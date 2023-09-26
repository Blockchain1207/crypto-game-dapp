import { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { useContract } from '../../contexts/ContractContext'
import { toast } from 'react-toastify'

const useToken = () => {
    const { refreshPages, approveToken, stakeToSArbet, unstakeToSArbet, claimArbet, stakeToVault, unstakeToVault, claimVault } = useContract()
    const { contracts } = useSelector((state) => state.chain)
    const { symbol } = useSelector(state => state.token)

    const approveTokenForSArbet = useCallback(async () => {
        const id = toast.loading(`Approving token for staker...`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        approveToken(contracts.token, contracts.sArbet)
            .then(tx => {
                toast.update(id, {
                    render: 'Approval: ' + tx.transactionHash,
                    type: 'success',
                    isLoading: false
                })
                refreshPages()
            })
            .catch(err => {
                console.log(`${err.message}`)
                toast.update(id, {
                    render: 'Approval: ' + err.message,
                    type: 'error',
                    isLoading: false
                })
            })
    }, [approveToken, contracts.token, contracts.sArbet, refreshPages])

    const stake = useCallback(async (amount) => {
        const id = toast.loading(`Staking ${amount} ${symbol}...`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        stakeToSArbet(amount)
            .then(tx => {
                toast.update(id, {
                    render: 'Stake: ' + tx.transactionHash,
                    type: 'success',
                    isLoading: false
                })
                refreshPages()
            })
            .catch(err => {
                console.log(`${err.message}`)
                toast.update(id, {
                    render: 'Stake: ' + err.message,
                    type: 'error',
                    isLoading: false
                })
            })
    }, [stakeToSArbet, symbol, refreshPages])

    const unstake = useCallback(async (amount) => {
        const id = toast.loading(`Unstaking ${amount} ${symbol}...`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        unstakeToSArbet(amount)
            .then(tx => {
                toast.update(id, {
                    render: 'Unstake: ' + tx.transactionHash,
                    type: 'success',
                    isLoading: false
                })
                refreshPages()
            })
            .catch(err => {
                console.log(`${err.message}`)
                toast.update(id, {
                    render: 'Unstake: ' + err.message,
                    type: 'error',
                    isLoading: false
                })
            })
    }, [unstakeToSArbet, symbol, refreshPages])

    const claim = useCallback(async () => {
        const id = toast.loading(`Claming USDT...`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        claimArbet()
            .then(tx => {
                toast.update(id, {
                    render: 'Claim: ' + tx.transactionHash,
                    type: 'success',
                    isLoading: false
                })
                refreshPages()
            })
            .catch(err => {
                console.log(`${err.message}`)
                toast.update(id, {
                    render: 'Claim: ' + err.message,
                    type: 'error',
                    isLoading: false
                })
            })
    }, [claimArbet, refreshPages])

    const approveUSDTForVault = useCallback(async () => {
        const id = toast.loading(`Approving USDT for vault...`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        approveToken(contracts.usdt, contracts.vault)
            .then(tx => {
                toast.update(id, {
                    render: 'Approval: ' + tx.transactionHash,
                    type: 'success',
                    isLoading: false
                })
                refreshPages()
            })
            .catch(err => {
                console.log(`${err.message}`)
                toast.update(id, {
                    render: 'Claim: ' + err.message,
                    type: 'error',
                    isLoading: false
                })
            })
    }, [approveToken, contracts.usdt, contracts.vault, refreshPages])

    const stakeUSDT = useCallback(async (amount) => {
        const id = toast.loading(`Staking ${amount} USDT...`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        stakeToVault(amount)
            .then(tx => {
                toast.update(id, {
                    render: 'Stake Vault: ' + tx.transactionHash,
                    type: 'success',
                    isLoading: false
                })
                refreshPages()
            })
            .catch(err => {
                console.log(`${err.message}`)
                toast.update(id, {
                    render: 'Stake Vault: ' + err.message,
                    type: 'error',
                    isLoading: false
                })
            })
    }, [stakeToVault, refreshPages])

    const unstakeUSDT = useCallback(async () => {
        const id = toast.loading(`Unstaking USDT...`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        unstakeToVault()
            .then(tx => {
                toast.update(id, {
                    render: 'Unstake Vault: ' + tx.transactionHash,
                    type: 'success',
                    isLoading: false
                })
                refreshPages()
            })
            .catch(err => {
                console.log(`${err.message}`)
                toast.update(id, {
                    render: 'Unstake Vault: ' + err.message,
                    type: 'error',
                    isLoading: false
                })
            })
    }, [unstakeToVault, refreshPages])

    const claimUSDT = useCallback(async () => {
        const id = toast.loading(`Claming USDT...`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        claimVault()
            .then(tx => {
                toast.update(id, {
                    render: 'Claim Vault: ' + tx.transactionHash,
                    type: 'success',
                    isLoading: false
                })
                refreshPages()
            })
            .catch(err => {
                console.log(`${err.message}`)
                toast.update(id, {
                    render: 'Claim Vault: ' + err.message,
                    type: 'error',
                    isLoading: false
                })
            })
    }, [claimVault, refreshPages])

    return { approveTokenForSArbet, stake, unstake, claim, approveUSDTForVault, stakeUSDT, unstakeUSDT, claimUSDT }
}

export default useToken