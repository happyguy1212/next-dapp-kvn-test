import { useState, useEffect } from 'react'

import Description from '../components/Main/Description'
import ApiGroup from '../components/Main/ApiGroup'
import abi from '../abis/ERC721EXT.json'
import { apiResolver } from 'next/dist/server/api-utils'

declare let window: any

const Main = () => {
  const [apis, setApis] = useState<any>([])

  const handleQuery = (params: any) => {
    console.log(params)
  }

  useEffect(() => {
    const abi_apis = abi.filter((func) => {
      return func.type === 'function' && func.stateMutability === 'view'
    })

    setApis(abi_apis)
  }, [])

  return (
    <div className="w-full pt-10">
      <div className="card w-3/4 sm:w-3/4 md:w-1/2 lg:w-1/3 border border-gray-300 p-0 mx-auto">
        <div className="p-0 card-body">
          <div className="card-title px-6 pt-6 pb-2 text-blue-dark border-b">
            <h3>SMART CONTRACT API</h3>
            <span className="text-sm">
              <span
                className="tooltip tooltip-right"
                data-tip="Liquidity providers earn a 0.17% trading fee on all trades made for that token pair, proportional to their share of the liquidity pool."
              ></span>
              <img
                className="w-4 h-4 inline-block"
                src="./images/icons/question.svg"
              />
              &nbsp;Interating with several smart contracts
            </span>
          </div>
          <div className="justify-center mt-2 px-4 pb-4">
            <div className="form-control w-full space-y-2">
              {apis.map((api: any) => {
                return <ApiGroup api={api} handleQuery={handleQuery} />
              })}
            </div>
          </div>
        </div>
      </div>
      <Description />
    </div>
  )
}

export default Main
