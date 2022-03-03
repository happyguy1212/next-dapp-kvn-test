import { ERC721EXT } from './../generated/ERC721EXT';
import { ERC721EXT__factory } from './../generated/factories/ERC721EXT__factory';
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { JsonRpcSigner, Web3Provider, EtherscanProvider, BaseProvider } from '@ethersproject/providers';

declare let window:any;

export const useProvider = () => {
    const [provider, setProvider] = useState<BaseProvider>(ethers.providers.getDefaultProvider('rinkeby'))
    return provider
}

export const useSigner = () => {
    const provider = useProvider()
    const [signer, setSigner] = useState<JsonRpcSigner|null>(null)

    useEffect(() => {
        // provider?.send("eth_requestAccounts", []).then(() => {
        //     setSigner(provider.getSigner())
        // });
    }, [])

    return signer
}

export const useApiTest = () => {
    const provider = useProvider()

    const getCurrentBlock = async () => {
        const blockNumber = await provider?.getBlockNumber();
        return blockNumber;
    }

    return getCurrentBlock
}

export const useContract = () => {
    const provider = useProvider()
    const [contract, setContract] = useState<ERC721EXT>(ERC721EXT__factory.connect(
        '0x08B447f91a8D70DE8FCf5b1870cb252C4f39C2bD',
        provider
    ))
    return contract
}