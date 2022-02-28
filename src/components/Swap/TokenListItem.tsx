import { useEffect, useState } from 'react'

interface TokenListItemProps {
  icon: string
  token: string
  network: string
  address: string
  keyword: string
  handleSelect: () => void
}

const TokenListItem = ({
  icon,
  token,
  network,
  address,
  keyword,
  handleSelect,
}: TokenListItemProps) => {
  const [visible, setVisible] = useState<boolean>(true)

  const handleClick = () => {
    handleSelect()
  }

  useEffect(() => {
    const lowerCaseKeyword = keyword.toLowerCase()
    const lowerCaseToken = token.toLowerCase()
    const lowerCaseAddress = address.toLowerCase()
    const isVisible =
      lowerCaseToken.includes(lowerCaseKeyword) ||
      lowerCaseAddress.includes(lowerCaseKeyword)

    setVisible(isVisible)
  }, [keyword])

  return visible ? (
    <div
      className="w-full flex space-x-4 items-center px-4 py-1 hover:bg-gray-200 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex-none w-auto">
        <img className="w-6 h-6" src={icon} />
      </div>
      <div className="grow flex flex-col space-y text-sm">
        <p className="font-bold text-blue-dark uppercase">{token}</p>
        <p className="text-blue-dark normal-case">{network}</p>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default TokenListItem
