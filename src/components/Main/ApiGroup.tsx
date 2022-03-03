import { ChangeEvent, ReactNode, useState } from 'react'
import { useContract } from '../../hooks/useEthers'
import ContractView from '../../interface/ContractView'

interface CurrencyGroupProps {
  children?: ReactNode
  index: number
  api: ContractView
}

const ApiGroup = ({ children, index, api }: CurrencyGroupProps) => {
  const contract = useContract()
  const [visibleContent, setVisibleContent] = useState<boolean>(false)
  const [params, setParams] = useState<(number | string)[]>([])
  const [result, setResult] = useState<string>('')

  const handleVisibleContent = () => {
    setVisibleContent(!visibleContent)
  }

  const handleChangeParam = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    let param_array = [...params]
    const index = parseInt(name)
    param_array[index] = value
    setParams(param_array)
  }

  const getPropertyType = (type: string) => {
    if (type.indexOf('uint') === 0) return 'number'
    return 'text'
  }

  const handleQueryClick = () => {
    console.log(api.name)
    setResult('Pending')
    // @ts-ignore:next-line
    contract[api.name]()
      // @ts-ignore:next-line
      .then((response) => {
        let result = response
        if (typeof response === 'object') result = JSON.stringify(response)
        setResult(result)
      })
      .catch(() => {
        setResult('Error')
      })
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
          {api.inputs?.map((info: any, index: number) => {
            return (
              <input
                key={`${api.name}-${info.name}`}
                name={`${index}`}
                type={getPropertyType(info.type)}
                placeholder={`${info.name} (${info.type})`}
                onChange={handleChangeParam}
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
          <div className="text-brand font-bold p-2">
            <span>Result: </span>
            <span>{result}</span>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default ApiGroup
