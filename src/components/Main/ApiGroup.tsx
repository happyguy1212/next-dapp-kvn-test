import { ReactNode, useState } from 'react'
import ContractView from '../../interface/ContractView'

interface CurrencyGroupProps {
  children?: ReactNode
  index: number
  api: ContractView
}

const ApiGroup = ({ children, index, api }: CurrencyGroupProps) => {
  const [visibleContent, setVisibleContent] = useState<boolean>(false)
  const [params, setParams] = useState<any>({})

  const handleVisibleContent = () => {
    setVisibleContent(!visibleContent)
  }

  const handleQueryClick = () => {
    console.log(params)
  }

  return (
    <div className="border card">
      <div
        className="py-2 px-4 bg-white text-blue-dark font-bold cursor-pointer"
        onClick={handleVisibleContent}
      >
        {index + 1}. {api.name}
      </div>
      {visibleContent ? (
        <div className="p-2 space-y-2 border border-t-gray">
          {api.inputs?.map((info: any) => {
            return (
              <input
                key={`${api.name}-${info.name}`}
                type="text"
                placeholder={`${info.name} (${info.type})`}
                className="input input-bordered w-full input-sm"
              />
            )
          })}
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
