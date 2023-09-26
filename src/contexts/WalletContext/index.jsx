import React from 'react';
import { isMobile } from 'react-device-detect';

import {
    createContext, 
    useContext, 
    useState, 
    useEffect, 
    useCallback, 
    useMemo 
} from "react";

import { useGlobal } from '../GlobalContext';
import walletConfig from './config';
import { connectors } from "./connectors";
import { useWeb3React } from "@web3-react/core";
import { toast } from 'react-toastify';


export const WalletContext = createContext();

export const WalletProvider = (props) => {
    const { chainId: globalChainId } = useGlobal()

    const [wallet, setWallet] = useState({
        address: '',
        chainId: 0
    });

    const configuredChainId = useMemo(() => parseInt(walletConfig[globalChainId].chainId, 16), [globalChainId])

    const {
        library,
        chainId: currentChainId,
        account,
        activate,
        deactivate
    } = useWeb3React();

    const setProviderType = (providerType) => {
        window.localStorage.setItem("providerType", providerType);
    }

    const getProviderType = () => {
        return window.localStorage.getItem("providerType");
    }

    const initWeb3 = useCallback(() => {
        // nothing to do here
    }, [])

    const connectWalletChain = useCallback(async (chainId, chainName, nativeCurrency, rpcUrls, blockExplorerUrls) => {
        let ethereum = window.ethereum;
        if (ethereum === undefined)
            return;

        try {
            await ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: chainId }] });
        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            console.log("error switch chain: ", switchError);
            if (switchError.code === 4902) {
                const data = [{
                    chainId: chainId,
                    chainName: chainName,
                    nativeCurrency: nativeCurrency,
                    rpcUrls: rpcUrls,
                    blockExplorerUrls: blockExplorerUrls
                }]

                await library.request({ method: 'wallet_addEthereumChain', params: data })
                    .then(() => {
                    })
                    .catch((error) => {
                        console.log('Failed to add network ', error)
                        throw error
                    });
            }
        }
    }, [library])

    const connectWalletByConfig = useCallback(async () => {
        return await connectWalletChain(
            walletConfig[globalChainId].chainId,
            walletConfig[globalChainId].networkName,
            walletConfig[globalChainId].nativeCurrency,
            walletConfig[globalChainId].rpcUrls,
            walletConfig[globalChainId].blockUrls
        )
    }, [connectWalletChain, globalChainId])

    const disconnectWallet = useCallback( async () => {
        if (getProviderType()) // if connected state then disconnect
        {
            // disconnected status
            console.log('disconnected from wallet');
        }

        setProviderType(null);
        setWallet(t => {
            return {
                address: '',
                chainId: 0,
            }
        })

        deactivate();
    }, [])

    const connectWallet = useCallback(async (w) => {
        let provider

        console.log("w", w);
        if (w === 'injected') {
            let ethereum = window.ethereum;
            if (ethereum === undefined && !isMobile) {
                toast('Please install Metamask on your PC!');
                return null;
            }

            provider = connectors.injected;
        }
        else if (w === 'walletconnect')
            provider = connectors.walletConnect;
        else {
            provider = connectors.injected;
            // provider = await window.web3Modal.connect();
            // console.log("Unknown provider!");
            // return null;
        }
        // console.log('trying to connect with provider ', provider);

        try {
            activate(provider);
        } catch (ex) {
            console.log(ex)
            return null;
        }

        setProviderType(w)
    }, [activate])

    const reconnectWallet = async () => {
        let providerType = getProviderType();

        if (providerType !== undefined)
            connectWallet(providerType)
    }

    useEffect(() => {
        initWeb3()
        reconnectWallet()
    }, [initWeb3])

    useEffect(() => {
        if (currentChainId !== configuredChainId)
            connectWalletByConfig();

        setWallet({
            chainId: currentChainId,
            address: account
        })
    }, [currentChainId, account, configuredChainId, connectWalletByConfig])

    const isLoggedIn = useCallback(() => {
        return library !== undefined && wallet.chainId === configuredChainId && wallet.address?.length > 0
    }, [library, wallet.address, wallet.chainId, configuredChainId])

    const isWrongChain = useCallback(() => {
        return wallet.address && wallet.chainId !== configuredChainId
    }, [wallet.chainId, wallet.address, configuredChainId])

    return (
        <WalletContext.Provider value={{ chainId: currentChainId, reconnectWallet, connectWallet, disconnectWallet, connectWalletByConfig, wallet, isLoggedIn, isWrongChain, library }}>
            {props.children}
        </WalletContext.Provider>
    )
}

export const useCustomWallet = () => {
    const dataManager = useContext(WalletContext)
    return dataManager || [{}]
}
