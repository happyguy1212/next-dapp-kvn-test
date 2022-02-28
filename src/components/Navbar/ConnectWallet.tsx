import { MouseEvent, ReactNode } from 'react'

interface ConnectWalletProps {
  children?: ReactNode
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const ConnectWallet = ({ children, handleClick }: ConnectWalletProps) => {
  return (
    <div className="flex-none">
      <button
        className="btn btn-sm btn-accent rounded-full w-32 normal-case"
        onClick={handleClick}
      >
        Connect Wallet
      </button>
    </div>
  )
}

export default ConnectWallet
