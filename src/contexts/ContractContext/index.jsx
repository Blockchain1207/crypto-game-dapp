import {
  createContext, 
  useContext, 
  useState, 
  useEffect, 
  useCallback, 
  useMemo
} from 'react'
import { useCustomWallet } from '../WalletContext'
import ERC20_abi from './abi/MockUSDT.sol/MockUSDT.json'
import Vault_abi from './abi/USDTVault.sol/USDTVault.json'
import House_abi from './abi/games/House.sol/House.json'
import Game_abi from './abi/games/Game.sol/Game.json'
import walletConfig from '../WalletContext/config'
import ADDRESS from './address'
import axios from 'axios'
import qs from 'qs'
import { ethers } from "ethers";

import BN from 'bignumber.js'
import { useGlobal } from '../GlobalContext'
import { useDispatch, useSelector } from 'react-redux'

import {
  setAddress as setVaultAddress,
  setBalance as setUSDTBalance,
  setDepositedUSDT,
  setVaultAllowance,
  setVaultCap,
  setTotalWager,
} from '../ReduxContext/reducers/vault'

import chain, {
  setChainId,
  setBalance as setETHBalance,
  setLabel,
  setName,
  setNetwork,
  setBrand,
  setIcon,
  setLogo,
  setNativeCurrency,
  setRPCUrl,
  setBlockUrl,
  setUSDT,
  setConsole,
  setVault,
  setRNG,
  setHouse,
  setDice,
  setRoulette,
  setCoinflip,
  setRPS,
  setDexURL,
  setTelegramURL,
  setTwitterURL,
  setLandingURL,
  setDocURL,
} from '../ReduxContext/reducers/chain'

import { setHouseAllowance as setDiceHouseAllowance } from '../ReduxContext/reducers/dice'
import { setHouseAllowance as setRouletteHouseAllowance } from '../ReduxContext/reducers/roulette'
import { setHouseAllowance as setCoinflipHouseAllowance } from '../ReduxContext/reducers/coinflip'
import { setHouseAllowance as setRPSHouseAllowance } from '../ReduxContext/reducers/rps'

export const ContractContext = createContext()

BN.config({
  EXPONENTIAL_AT: [-10, 64],
})

export const ContractProvider = ({ children }) => {
  const { wallet, library } = useCustomWallet()
  const { chainId } = useGlobal()

  const dispatch = useDispatch()
  const usdtPerChip = useSelector((state) => state.roulette.usdtPerChip)

  const [reloadCounter, setReloadCounter] = useState(0)
  const provider = useMemo(() => {
    return library?.provider;
  }, [chainId, library?.provider]);

  const callProvider = useMemo(() => {
    return new ethers.JsonRpcProvider(
      walletConfig[chainId].rpcUrls[0],
      chainId
    );
  }, [chainId]);

  const buildEncodedData = useCallback((types, values) => {
    var encoded = ethers.AbiCoder.encode(types, values);
    if (encoded.slice(0, 2) === "0x") {
      encoded = encoded.slice(2);
    }
    return encoded;
  }, []);

  useEffect(() => {
    let ac = new AbortController()

    const reload = () => {
      setReloadCounter((t) => {
        return t + 1
      })
    }

    let tmr = setInterval(() => {
      if (ac.signal.aborted === false) {
        reload()
      }
    }, 50000)

    return () => {
      ac.abort()
      clearInterval(tmr)
    }
  }, [])

  useEffect(() => {
    setReloadCounter((t) => {
      return t + 1
    })
  }, [wallet])

  const refreshPages = () => {
    setTimeout(() => {
      setReloadCounter((t) => {
        return t + 1
      })
    }, 2000)
  }

  const assertValidAddress = useCallback((addr) => {
    if (!ethers.isAddress(addr)) {
      throw new Error("Invalid Address");
    }
  }, []);

  const getBN = () => {
    return BN;
  };

  const makeTx = useCallback(
    async (addr, tx, gasPlus) => {
      const gasCostOrg = await provider.estimateGas({
        ...tx,
        from: wallet.address,
      });
      const gasCost = BN(gasCostOrg.toString()).plus(100000).toString()
      console.log('>>>', gasCostOrg.toString(), gasCost.toString())
      
      const txUnsigned = {
        from: wallet.address,
        to: addr,
        data: tx.data,
        gasLimit: gasCost,
          // parseInt(gasCost.toString()) + (gasPlus !== undefined ? gasPlus : 0),
      };

      const signer = await provider.getSigner();
      // const txSigned = await signer.signTransaction(txUnsigned);
      const submittedTx = await signer.sendTransaction(txUnsigned);
      const receipt = await submittedTx.wait();
      return receipt;
    },
    [provider, wallet.address]
  );

  const makeTxWithNativeCurrency = useCallback(
    async (addr, tx, nativeCurrencyAmount, gasPlus) => {
      const gasCostOrg = await provider.estimateGas({
        value: nativeCurrencyAmount,
        from: wallet.address,
        data: tx.data,
      });
      const gasCost = BN(gasCostOrg.toString()).plus(21000).toString()

      const txUnsigned = {
        from: wallet.address,
        to: addr,
        value: nativeCurrencyAmount,
        data: tx.data,
        gas:
          parseInt(gasCost.toString()) + (gasPlus !== undefined ? gasPlus : 0),
      };
      const signer = await provider.getSigner();

      const submittedTx = await signer.sendTransaction(txUnsigned);
      const receipt = await submittedTx.wait();
      return receipt;
    },
    [provider, wallet.address]
  );

  const makeTxByProvider = useCallback(
    async (data, gasPlus) => {
      const gasCost = await provider.estimateGas(data);
      const txUnsigned = {
        ...data,
        gas:
          parseInt(gasCost.toString()) + (gasPlus !== undefined ? gasPlus : 0),
      };

      const signer = await provider.getSigner();

      const submittedTx = await signer.sendTransaction(txUnsigned);
      const receipt = await submittedTx.wait();
      return receipt;
    },
    [provider]
  );

  const getGasPrice = useCallback(async () => {
    const data = await callProvider.getFeeData();
    return data.gasPrice.toString(10);
  }, [callProvider]);

  const A2D = useCallback(
    async (addr, amount) => {
      assertValidAddress(addr);

      const erc20 = new ethers.Contract(addr, ERC20_abi.abi, callProvider);
      let tval = await erc20.decimals();
      let tt = new BN(amount).div(new BN(`1e${tval}`));

      return tt;
    },
    [callProvider, assertValidAddress]
  );

  const D2A = useCallback(
    async (addr, amount) => {
      assertValidAddress(addr);

      const toBN = ethers.toNumber;
      const erc20 = new ethers.Contract(addr, ERC20_abi.abi, callProvider);
      let tval = await erc20.decimals();
      tval = new BN(amount).times(new BN(`1e${tval}`));

      return tval;
    },
    [callProvider, assertValidAddress]
  );

  const balanceOf = useCallback(
    async (token, address) => {
      assertValidAddress(token);
      if (address === undefined || address === "") return 0;

      const tokenContract = new ethers.Contract(
        token,
        ERC20_abi.abi,
        callProvider
      );
      let ret = await tokenContract.balanceOf(address);

      return await A2D(token, ret);
    },
    [callProvider, A2D, assertValidAddress]
  );

  const balanceETH = useCallback(
    async (address) => {
      assertValidAddress(address);

      const ret = await callProvider.getBalance(address);

      return ethers.formatEther(ret);
    },
    [callProvider, assertValidAddress]
  );

  const getTokenApprovedAmount = useCallback(
    async (token, owner, spender) => {
      assertValidAddress(token);

      const tokenContract = new ethers.Contract(
        token,
        ERC20_abi.abi,
        callProvider
      );
      let ret = await tokenContract.allowance(owner, spender);

      return await A2D(token, ret);
    },
    [callProvider, A2D, assertValidAddress]
  );

  const approveToken = useCallback(
    async (token, spender) => {
      assertValidAddress(token);

      const tokenContract = new ethers.Contract(
        token,
        ERC20_abi.abi,
        await provider.getSigner()
      );

      let tx = await tokenContract.approve(
        spender,
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      );

      return tx.wait();
    },
    [provider, assertValidAddress]
  );

  const getTokenName = useCallback(
    async (token) => {
      assertValidAddress(token);

      const tokenContract = new ethers.Contract(
        token,
        ERC20_abi.abi,
        callProvider
      );

      return await tokenContract.name();
    },
    [assertValidAddress, callProvider]
  );

  const getTokenSymbol = useCallback(
    async (token) => {
      assertValidAddress(token);

      const tokenContract = new ethers.Contract(
        token,
        ERC20_abi.abi,
        callProvider
      );

      return await tokenContract.symbol();
    },
    [assertValidAddress, callProvider]
  );

  const getTokenDecimals = useCallback(
    async (token) => {
      assertValidAddress(token);

      const tokenContract = new ethers.Contract(
        token,
        ERC20_abi.abi,
        callProvider
      );
      const decimals = await tokenContract.decimals();

      return parseInt(decimals.toString());
    },
    [assertValidAddress, callProvider]
  );

  const getTokenSupply = useCallback(
    async (token) => {
      assertValidAddress(token);

      const tokenContract = new ethers.Contract(
        token,
        ERC20_abi.abi,
        callProvider
      );

      return await A2D(token, await tokenContract.totalSupply());
    },
    [A2D, assertValidAddress, callProvider]
  );

  const isAddressFormat = useCallback((addr) => {
    return ethers.isAddress(addr);
  }, []);

  const getTokenInfo = useCallback(
    async (token, user, router) => {
      assertValidAddress(token);

      if (token === ethers.ZeroAddress) {
        let balance = "";
        try {
          const ret = await Promise.all([callProvider.getBalance(user)]);
          balance = BN(ret[0])
            .div(BN(`1e${walletConfig[chainId].nativeCurrency.decimals}`))
            .toString();
        } catch (err) {}

        return {
          address: token,
          name: walletConfig[chainId].nativeCurrency.name,
          symbol: walletConfig[chainId].nativeCurrency.symbol,
          decimals: walletConfig[chainId].nativeCurrency.decimals,
          balance: balance,
          allowance: BN(2).pow(256).minus(1).toString(),
        };
      } else {
        let balance, symbol, name, decimals, allowance;
        try {
          const ret = await Promise.all([
            getTokenSymbol(token),
            getTokenName(token),
            getTokenDecimals(token),
            balanceOf(token, user),
            getTokenApprovedAmount(token, user, router),
          ]);
          symbol = ret[0];
          name = ret[1];
          decimals = ret[2];
          balance = ret[3].toString();
          allowance = ret[4].toString();
        } catch (err) {}

        return {
          address: token,
          name,
          symbol,
          decimals,
          balance,
          allowance,
        };
      }
    },
    [assertValidAddress, callProvider, chainId]
  );

  // const getWithdrawContext = useCallback(
  //   async (account) => {
  //     const vaultContract = new ethers.Contract(ADDRESS[chainId].vault, Vault_abi.abi)
  //     const ret = await vaultContract.getWithdrawInfo(account)
  //     return [parseInt(ret.nextWithdrawTime.toString()) * 1000, parseInt(ret.steps.toString())]
  //   },
  //   [A2D, chainId, callProvider],
  // )

  const getVaultDepositedUSDT = useCallback(
    async (account) => {
      const vaultContract = new ethers.Contract(ADDRESS[chainId].vault, Vault_abi.abi)
      const usdtAddress = await vaultContract.usdtToken()
      const usdtContract = new ethers.Contract(usdtAddress, ERC20_abi.abi)
      const usdtDecimals = await usdtContract.decimals()
      const ret = await vaultContract.balanceOf(account)
      return BN(ret.toString()).div(BN(`1e${usdtDecimals.toString()}`))      
    },
    [callProvider, chainId],
  )

  const getMaxPayout = useCallback(
    async (gameAddress, betNum, dataArray) => {
      const gameContract = new ethers.Contract(gameAddress, Game_abi.abi, callProvider)

      const ret = await gameContract
        .getMaxPayout(
          betNum,
          dataArray.map((d) => Math.floor(d * 100000)),
        )
      
      return new BN(ret.toString()).div(new BN('1e24')).toFixed(10)
    },
    [A2D, chainId, callProvider],
  )

  const getBetHistory = useCallback(
    async (gameAddress) => {
      const gameContract = new ethers.Contract(gameAddress, Game_abi.abi, callProvider)

      let eventFilter = gameContract.filters.GameEnd();
      let events = await gameContract.queryFilter(eventFilter);

      const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

      let betHistory = [];
      for (let index = events.length - 1; index >= 0; index--) {
        const e = events[index];

        const timestamp = parseInt(e.args[9]) * 1000;
        const timeNow = Date.now();
        let times;
        let time = (timeNow  - timestamp) / day;
        if (time < 1) {
          time = (timeNow  - timestamp) / hour;
          if (time < 1) {
            time = (timeNow  - timestamp) / minute;
            if (time < 1) {
              time = (timeNow  - timestamp) / second;
              times = parseInt(time) + " seconds ago"
            } else {
              times = parseInt(time) + " mins ago"
            }
          } else {
            times = parseInt(time) + " hrs ago"
          }
        } else {
          times = parseInt(time) + " days ago"
        }

        const betLog = [e.transactionHash, 
                        e.args[8], 
                        BN(e.args[4]).div(BN(1e18)),
                        BN(e.args[7]).div(BN(1e18)), 
                        parseInt(e.args[2][0]),
                        // parseInt(e.args[9]),
                        times,
                      ]

          betHistory.push(betLog);
      }
      // events.forEach(e => {
      //   const betLog = [e.transactionHash, 
      //                   e.args[8], 
      //                   BN(e.args[4]).div(BN(1e18)),
      //                   BN(e.args[7]).div(BN(1e18)), 
      //                   e.args[2][0]]

      //   betHistory.push(betLog);
      // })

   
      console.log("BET HISTORY", betHistory)
      return betHistory

      // console.log("EVENT LOGS", events);

      // events.forEach(e => {
      //   const betLog = [e.transactionHash, e.args[8], e.args[4], e.args[7], e.args[2][0]]
      //   console.log("TX", e.transactionHash)
      //   console.log("ACC", e.args[8])
      //   console.log("PLOG-BET", e.args[4])
      //   console.log("PLOG-PAYOUT", e.args[7])
      //   console.log("PLOG-RESULT", e.args[2][0])
      // })
    },
    [A2D, chainId, callProvider]
  )

  const getTotalWager = useCallback(
    async (token, houseAddress) => {
      const houseContract = new ethers.Contract(houseAddress, House_abi.abi, callProvider)

      const ret = await houseContract
        .globalWagers()
      
      return (await A2D(token, ret)).toFixed(2);
    },
    [A2D, chainId, callProvider],
  )

  const playDice = useCallback(
    async (betDices, betAmount) => {
      const diceContract = new ethers.Contract(ADDRESS[chainId].dice, Game_abi.abi, callProvider)

      // let data = Array.from({ length: 50 }).map(() => 0)

      // for (let index = 0; index < 6; index++) {
      //   data[index] = Number(betDices[index]);
      // }
      console.log("betDices===>", betDices)
      console.log("betAmount===>", betAmount)
      console.log("RPS Stake: ", (await D2A(ADDRESS[chainId].usdt, betAmount)).toString())
      const txData = await diceContract.play.populateTransaction(
        1,
        0,
        betDices,
        (await D2A(ADDRESS[chainId].usdt, betAmount)).toString()
      )

      let tx = await makeTx(
        ADDRESS[chainId].dice,
        txData
      )

      return tx
    },
    [makeTx, chainId, D2A],
  )

  const playRoulette = useCallback(
    async (chipData) => {
      const rouletteContract = new ethers.Contract(ADDRESS[chainId].roulette, Game_abi.abi)

      console.log("rouletteContract", rouletteContract);

      const decimals = await getTokenDecimals(ADDRESS[chainId].usdt)
      const mp = chipData.map(
        (c) =>
          BN(c.toString())
            .times(BN(`1e${parseInt(decimals.toString())}`))
            .times(BN(usdtPerChip))
            .integerValue()
            .toString(), // 1 chip = 0.01 USDT
      )

      const ts = mp.reduce((c, v) => {
        return BN(c).plus(BN(v)).toString()
      }, '0')

      const txData = await rouletteContract.play.populateTransaction(
        1,
        0,
        mp,
        ts,
      )

      let tx = await makeTx(
        ADDRESS[chainId].roulette,
        txData,
      )

      return tx
    },
    [makeTx, chainId, D2A, getTokenDecimals, usdtPerChip],
  )

  const playCoinflip = useCallback(
    async (betNum, betAmount) => {
      const cfContract = new ethers.Contract(ADDRESS[chainId].coinflip, Game_abi.abi)
      console.log("===> Play CoinFlip", ADDRESS[chainId].coinflip)
      const txData = await cfContract.play.populateTransaction(
        1,
        betNum,
        Array.from({ length: 50 }).map(() => 0),
        (await D2A(ADDRESS[chainId].usdt, betAmount)).toString(),
      )

      let tx = await makeTx(
        ADDRESS[chainId].coinflip,
        txData,
      )

      return tx
    },
    [makeTx, chainId, D2A],
  )

  const playRPS = useCallback(
    async (betNum, betAmount) => {
      console.log(">>>>>", betNum, betAmount)
      const rpsContract = new ethers.Contract(ADDRESS[chainId].rps, Game_abi.abi, provider)
      
      console.log("RPS Stake: ", (await D2A(ADDRESS[chainId].usdt, betAmount)).toString())
      const txData = await rpsContract.play.populateTransaction(
        1,
        betNum,
        Array.from({ length: 50 }).map(() => 0),
        (await D2A(ADDRESS[chainId].usdt, betAmount)).toString(),
      )

      let tx = await makeTx(
        ADDRESS[chainId].rps,
        txData,
      )

      console.log("TX", tx);

      return tx
    },
    [makeTx, chainId, D2A],
  )

  const decodeTxLogs = useCallback(
    (abi, logs) => {
      const contractInterface = new ethers.Interface(abi);

      let ret = []

      logs.forEach(l => {
        console.log(contractInterface.parseLog(l));
        const parselog = contractInterface.parseLog(l);
        if (parselog && parselog.fragment.type === 'event') {
          ret = [...ret, { ...parselog.args, name: parselog.name }]
        }

      })
      
      // const events = contractInterface.fragments.filter((o) => o.type === 'event')

      // let ret = []
      // for (const ev of events) {

      //   console.log('>>>', logs[0].topics[0], ev.signature)
      //   const lg = logs.find((g) => g.topics[0] === ev.signature)

      //   if (lg) {
      //     const r = ethers.AbiCoder.decode([lg.data, lg.topics.slice(1)], ev.inputs)
      //     ret = [...ret, { ...r, name: ev.name }]
      //   }
      // }

      console.log(">>>", ret);
      return ret
    },
    [callProvider],
  )

  const verifyContract = useCallback(
    async (token, templateId, creator, param) => {
      let constructorParam = buildEncodedData(['address', 'bytes'], [creator, param])

      const fileContent = await (await fetch(`/contracts/Template${templateId}.sol`)).text()

      const data = {
        apikey: walletConfig[chainId].apiKey,
        module: 'contract',
        action: 'verifysourcecode',
        contractaddress: token,
        sourceCode: fileContent,
        codeformat: 'solidity-single-file',
        contractname: `SafuDeployerTemplate${templateId}`,
        compilerversion: 'v0.8.16+commit.07a7930e',
        optimizationused: 1,
        runs: 200,
        evmVersion: '',
        licenseType: 3,
        constructorArguements: constructorParam,
      }

      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url: walletConfig[chainId].apiUrl,
      }

      let result = await axios(options)
      return result.data
    },
    [buildEncodedData, chainId],
  )

  useEffect(() => {
    let ac = new AbortController()

    dispatch(setVaultAddress(ADDRESS[chainId].vault))

    
    if (ethers.isAddress(wallet.address)) {
      balanceOf(ADDRESS[chainId].usdt, wallet.address)
      .then((r) => {
        if (ac.signal.aborted === false) {
          dispatch(setUSDTBalance(r.toString()))
        }
      })
      .catch((err) => {
        console.log(err)
      })
      
      // getVaultDepositedUSDT(wallet.address)
      // .then((r) => {
      //   if (ac.signal.aborted === false) {
      //     dispatch(setDepositedUSDT(r.toString()))
      //   }
      // })
      // .catch((err) => {
      //   console.log(err)
      // })

      balanceOf(ADDRESS[chainId].usdt, ADDRESS[chainId].vault)
      .then((r) => {
        if (ac.signal.aborted === false) {
          dispatch(setVaultCap(r.toString()))
        }
      })
      .catch((err) => {
        console.log(err)
      })

      // getWithdrawContext(wallet.address)
      // .then((r) => {
      //   if (ac.signal.aborted === false) {
      //     dispatch(setUntilNextWithdraw(r[0]))
      //     dispatch(setWithdrawSteps(r[1]))
      //   }
      // })
      // .catch((err) => {
      //   console.log(err)
      // })


    getTokenApprovedAmount(ADDRESS[chainId].usdt, wallet.address, ADDRESS[chainId].vault)
      .then((r) => {
        if (ac.signal.aborted === false) {
          dispatch(setVaultAllowance(r.toString()))
        }
      })
      .catch((err) => {
        console.log(err)
      })
    }

    getTotalWager(ADDRESS[chainId].usdt, ADDRESS[chainId].house)
      .then((r) => {
        if (ac.signal.aborted === false) {
          dispatch(setTotalWager(r.toString()))
        }
      })
      .catch((err) => {
        console.log(err)
      })

    if (ethers.isAddress(wallet.address)) {
    getTokenApprovedAmount(ADDRESS[chainId].usdt, wallet.address, ADDRESS[chainId].house)
      .then((r) => {
        if (ac.signal.aborted === false) {
          dispatch(setDiceHouseAllowance(r.toString()))
          dispatch(setRouletteHouseAllowance(r.toString()))
          dispatch(setCoinflipHouseAllowance(r.toString()))
          dispatch(setRPSHouseAllowance(r.toString()))
        }
      })
      .catch((err) => {
        console.log(err)
      })
    }

    return () => ac.abort()
  }, [
    dispatch,
    balanceOf,
    balanceETH,
    // getWithdrawContext,
    getTokenApprovedAmount,
    getVaultDepositedUSDT,
    wallet.address,
    reloadCounter,
    chainId,
  ])

  useEffect(() => {
    dispatch(setChainId(chainId))
    dispatch(setLabel(walletConfig[chainId].switchLabel))
    dispatch(setName(walletConfig[chainId].networkName))
    dispatch(setNetwork(walletConfig[chainId].network))
    dispatch(setBrand(walletConfig[chainId].brand))
    dispatch(setIcon(walletConfig[chainId].icon))
    dispatch(setLogo(walletConfig[chainId].logo))
    dispatch(setNativeCurrency(walletConfig[chainId].nativeCurrency))
    dispatch(setRPCUrl(walletConfig[chainId].rpcUrls[0]))
    dispatch(setBlockUrl(walletConfig[chainId].blockUrls[0]))

    dispatch(setUSDT(ADDRESS[chainId].usdt))
    dispatch(setConsole(ADDRESS[chainId].console))
    dispatch(setVault(ADDRESS[chainId].vault))
    dispatch(setRNG(ADDRESS[chainId].rng))
    dispatch(setHouse(ADDRESS[chainId].house))
    dispatch(setDice(ADDRESS[chainId].dice))
    dispatch(setRoulette(ADDRESS[chainId].roulette))
    dispatch(setCoinflip(ADDRESS[chainId].coinflip))
    dispatch(setRPS(ADDRESS[chainId].rps))

    dispatch(setDexURL(walletConfig[chainId].ex.dex))
    dispatch(setTelegramURL(walletConfig[chainId].ex.telegram))
    dispatch(setTwitterURL(walletConfig[chainId].ex.twitter))
    dispatch(setLandingURL(walletConfig[chainId].ex.landing))
    dispatch(setDocURL(walletConfig[chainId].ex.docs))
  }, [dispatch, chainId])

  return (
    <ContractContext.Provider
      value={{
        reloadCounter,
        refreshPages,
        makeTx,
        makeTxWithNativeCurrency,
        A2D,
        D2A,
        balanceOf,
        getTokenApprovedAmount,
        approveToken,
        balanceETH,
        getTokenName,
        getTokenSymbol,
        getTokenSupply,
        isAddressFormat,
        buildEncodedData,
        verifyContract,
        getMaxPayout,
        getBetHistory,
        playDice,
        playRoulette,
        playCoinflip,
        playRPS,
        decodeTxLogs,
      }}
    >
      {children}
    </ContractContext.Provider>
  )
}

export const useContract = () => {
  const contractManager = useContext(ContractContext)
  return contractManager || [{}]
}
