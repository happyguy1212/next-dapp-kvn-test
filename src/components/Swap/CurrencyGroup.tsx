import { IsEmptyObj } from '@reduxjs/toolkit/dist/tsHelpers'
import { ReactNode } from 'react'

import SelectChain from './SelectChain'
import SelectCurrency from './SelectCurrency'

interface CurrencyGroupProps {
  children?: ReactNode
  handleChainModalOpen: (isOpen: boolean) => void
  handleTokenModalOpen: (isOpen: boolean) => void
}

const CurrencyGroup = ({
  children,
  handleChainModalOpen,
  handleTokenModalOpen,
}: CurrencyGroupProps) => {
  return (
    <div>
      <div className="w-full flex justify-items-start items-center">
        <SelectChain handleChainModalOpen={handleChainModalOpen} />
        <SelectCurrency handleTokenModalOpen={handleTokenModalOpen} />
      </div>
      <input
        type="text"
        placeholder="0.0"
        className="input input-bordered text-right w-full"
      />
    </div>
  )
}

export default CurrencyGroup
