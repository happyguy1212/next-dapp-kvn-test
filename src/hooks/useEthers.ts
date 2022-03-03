import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { JsonRpcSigner, Web3Provider, EtherscanProvider } from '@ethersproject/providers';

declare let window:any;

export const useProvider = () => {
    const [provider, setProvider] = useState<Web3Provider|null>(null)

    useEffect(() => {
        const provider = new ethers.providers.Web3Provider(
            window.ethereum, "rinkerby"
        );

        setProvider(provider)
    }, [])

    return provider
}

export const useSigner = () => {
    const provider = useProvider()
    const [signer, setSigner] = useState<JsonRpcSigner|null>(null)

    useEffect(() => {
        provider?.send("eth_requestAccounts", []).then(() => {
            setSigner(provider.getSigner())
        });
    }, [])

    return signer
}

export const useApiTest = () => {
    const provider = useProvider();

    const getCurrentBlock = async () => {
        const blockNumber = await provider?.getBlockNumber();
        return blockNumber;
    }

    return getCurrentBlock
}

