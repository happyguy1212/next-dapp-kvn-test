import { useState, useEffect } from 'react'

import Web3 from 'web3'
import { Web3Exception } from '../interface/web3'

import ButtonGroup from '../components/Swap/ButtonGroup'
import CurrencyGroup from '../components/Swap/CurrencyGroup'
import Description from '../components/Swap/Description'
import PricePanel from '../components/Swap/PricePanel'
import SelectTokenModal from '../components/Swap/SelectTokenModal'
import ACTION_STATUS from '../config/constants/Liquidity'
import SelectChainModal from '../components/Swap/SelectChainModal'

declare let window: any

const Swap = () => {
  const [tokenModalOpen, setTokenModalOpen] = useState<boolean>(false)
  const [chianModalOpen, setChainModalOpen] = useState<boolean>(false)

  const [web3, setWeb3] = useState<Web3 | null>(null)
  const [address, setAddress] = useState<string>('')

  useEffect(() => {
    if (!window.ethereum) {
      console.error('Please install MetaMask')
      return
    }

    window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then((accounts: string[]) => {
        setAddress(accounts[0])
        let w3 = new Web3(window.ethereum)
        setWeb3(w3)
      })
      .catch((err: Web3Exception) => console.log(err.code))
  }, [])

  const handleChainModalOpen = (isOpen: boolean) => {
    setChainModalOpen(isOpen)
  }

  const handleTokenModalOpen = (isOpen: boolean) => {
    setTokenModalOpen(isOpen)
  }

  return (
    <div className="w-full pt-10">
      <div className="card w-3/4 sm:w-3/4 md:w-1/2 lg:w-1/3 border border-gray-300 p-0 mx-auto">
        <div className="p-0 card-body">
          <div className="card-title px-6 pt-6 pb-2 text-blue-dark border-b">
            <h3>CROSS-CHAIN TRANSFER</h3>
            <span className="text-sm">
              <span
                className="tooltip tooltip-right"
                data-tip="Liquidity providers earn a 0.17% trading fee on all trades made for that token pair, proportional to their share of the liquidity pool."
              ></span>
              <img
                className="w-4 h-4 inline-block"
                src="./images/icons/question.svg"
              />
              &nbsp;Transfer tokens between different chains
            </span>
          </div>
          <div className="justify-center mt-2 px-4 pb-4">
            <div className="form-control w-full">
              <CurrencyGroup
                handleChainModalOpen={handleChainModalOpen}
                handleTokenModalOpen={handleTokenModalOpen}
              />
              <div className="w-full text-center font-bold my-4">&darr;</div>
              <CurrencyGroup
                handleChainModalOpen={handleChainModalOpen}
                handleTokenModalOpen={handleTokenModalOpen}
              />
            </div>

            <div className="w-full flex justify-end mt-2">
              <span className="text-sm font-bold flex btn btn-sm btn-ghost normal-case">
                Advanced Options
                <img className="w-6 h-6" src="./images/icons/arrow-down-black.svg" />
              </span>
            </div>
            <ButtonGroup status={ACTION_STATUS.SWAP} />
          </div>
        </div>
      </div>
      <Description />

      <SelectChainModal
        open={chianModalOpen}
        handleTokenModalOpen={handleChainModalOpen}
      />

      <SelectTokenModal
        open={tokenModalOpen}
        handleTokenModalOpen={handleTokenModalOpen}
      />
    </div>
  )
}

export default Swap
