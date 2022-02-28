import { IsEmptyObj } from '@reduxjs/toolkit/dist/tsHelpers'
import { ReactNode, useState } from 'react'

interface CurrencyGroupProps {
  children?: ReactNode
  handleQuery: (infos: any) => void
}

const ApiGroup = ({ children, handleQuery }: CurrencyGroupProps) => {
  const [params, setParams] = useState({})

  const handleQueryClick = () => {
    handleQuery(params)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="0.0"
        className="input input-bordered text-right w-full"
      />
      <input
        type="text"
        placeholder="0.0"
        className="input input-bordered text-right w-full"
      />
      <button
        className="btn btn-accent w-full rounded-xl drop-shadow-lg normal-case"
        onClick={handleQueryClick}
      >
        Query
      </button>
    </div>
  )
}

export default ApiGroup
