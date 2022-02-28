import { MouseEvent, ReactNode } from 'react'

interface SelectChainProps {
  children?: ReactNode
  handleChainModalOpen: (isOpen: boolean) => void
}

const SelectChain = ({ children, handleChainModalOpen }: SelectChainProps) => {
  const handleOpen = () => {
    handleChainModalOpen(true)
  }

  return (
    <div
      className="w-6/12 btn-white border border-gray hover:border-gray-300 rounded-l-lg drop-shadow-lg normal-case font-bold mb-2 p-1 cursor-pointer flex justify-center"
      onClick={handleOpen}
    >
      <img className="w-6 h-6 mr-2" src="./images/tokens/btcb.png" />
      <span className="text-blue-dark">Select a Chain</span>
      <img className="w-6 h-6 ml-6" src="./images/icons/arrow-down.svg" />
    </div>
  )
}

export default SelectChain
