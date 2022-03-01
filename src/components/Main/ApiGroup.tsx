import Collapsible from 'react-collapsible'
import { ReactNode, useState } from 'react'

interface CurrencyGroupProps {
  children?: ReactNode
  api: any
  handleQuery: (infos: any) => void
}

const ApiGroup = ({ children, api, handleQuery }: CurrencyGroupProps) => {
  const [visibleContent, setVisibleContent] = useState<boolean>(false)
  const [params, setParams] = useState<any>({})

  const handleVisibleContent = () => {
    setVisibleContent(!visibleContent)
  }

  const handleQueryClick = () => {
    handleQuery(params)
  }

  return (
    <div className="border space-y-2 card">
      <div
        className="py-2 px-4 bg-brand text-white cursor-pointer"
        onClick={handleVisibleContent}
      >
        {api.name}
      </div>
      {visibleContent ? (
        <div className="p-2 space-y-2">
          <input
            type="text"
            placeholder="0.0"
            className="input input-bordered w-full input-sm"
          />
          <input
            type="text"
            placeholder="0.0"
            className="input input-bordered w-full input-sm"
          />
          <button
            className="btn btn-sm btn-accent w-full rounded-xl drop-shadow-lg normal-case"
            onClick={handleQueryClick}
          >
            Query
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default ApiGroup
