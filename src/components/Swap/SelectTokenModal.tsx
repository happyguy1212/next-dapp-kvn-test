import { ChangeEvent, useState } from 'react'

import TokenList from '../../config/constants/TokenList'
import TokenListItem from './TokenListItem'

interface SelectTokenModalProps {
  open: boolean
  handleTokenModalOpen: (isOpen: boolean) => void
}

const SelectTokenModal = ({ open, handleTokenModalOpen }: SelectTokenModalProps) => {
  const [keyword, setKeyword] = useState<string>('')

  const handleKeywordUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    const targetKeyword = event.target.value
    setKeyword(targetKeyword)
  }

  const handleClose = () => {
    handleTokenModalOpen(false)
  }

  const handleSelectToken = () => {
    handleClose()
  }

  return (
    <div className={`modal ${open ? 'modal-open' : ''}`}>
      <div className="modal-box p-0 pb-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-blue-dark">Select a Token</h2>
          <button
            className="w-auto h-auto btn btn-ghost btn-xs"
            onClick={handleClose}
          >
            <img className="w-4" src="./images/icons/close.svg" />
          </button>
        </div>
        <div className="p-0">
          <div className="flex flex-col space-y-2 p-4 w-full">
            <div className="w-full">
              <input
                type="text"
                value={keyword}
                onChange={handleKeywordUpdate}
                placeholder="Search name or paste address"
                className="input input-accent input-bordered w-full font-bold text-blue-dark placeholder-blue-dark"
              />
            </div>
          </div>
          <div className="w-full h-[300px] flex flex-col space-y-2 scrollbar-thin scrollbar-thumb-brand py-4">
            {TokenList.map((token) => {
              return (
                <TokenListItem
                  key={token.description}
                  icon={`./images/tokens/${token.name.toLowerCase()}.png`}
                  token={token.name}
                  network={token.description}
                  address={'0x234df729384928342sdfsf32'}
                  keyword={keyword}
                  handleSelect={handleSelectToken}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectTokenModal
