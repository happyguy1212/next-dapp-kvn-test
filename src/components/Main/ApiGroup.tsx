import { ReactNode, useState } from 'react'
import { useProvider } from '../../hooks/useEthers'
import ContractView from '../../interface/ContractView'
import { ERC721EXT } from '../../generated/ERC721EXT'
import { ERC721EXT__factory } from '../../generated'

interface CurrencyGroupProps {
  children?: ReactNode
  index: number
  api: ContractView
}

const ApiGroup = ({ children, index, api }: CurrencyGroupProps) => {
  const provider = useProvider()
  const [visibleContent, setVisibleContent] = useState<boolean>(false)
  const [params, setParams] = useState<any>({})

  const handleVisibleContent = () => {
    setVisibleContent(!visibleContent)
  }

  const handleQueryClick = () => {
    if (provider === null) {
      console.log('provider is not connected')
      return
    }
    const contract = ERC721EXT__factory.connect(
      '0x08B447f91a8D70DE8FCf5b1870cb252C4f39C2bD',
      provider
    )

    console.log(contract.name())
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
