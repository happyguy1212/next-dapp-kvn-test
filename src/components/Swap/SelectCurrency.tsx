import { MouseEvent, ReactNode } from 'react'

interface SelectCurrencyProps {
  children?: ReactNode
  handleTokenModalOpen: (isOpen: boolean) => void
}

const SelectCurrency = ({ children, handleTokenModalOpen }: SelectCurrencyProps) => {
  const handleOpen = () => {
    handleTokenModalOpen(true)
  }

  return (
    <div
      className="w-6/12 btn-white border-1 border-gray hover:border-gray-300 border rounded-r-lg drop-shadow-lg normal-case font-bold mb-2 p-1 cursor-pointer flex justify-center"
      onClick={handleOpen}
    >
      <img className="w-6 h-6 mr-2" src="./images/tokens/cake.png" />
      <span className="text-blue-dark">Select a Token</span>
      <img className="w-6 h-6 ml-6" src="./images/icons/arrow-down.svg" />
    </div>
  )
}

export default SelectCurrency
