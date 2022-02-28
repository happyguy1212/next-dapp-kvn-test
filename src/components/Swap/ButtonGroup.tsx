import ACTION_STATUS from '../../config/constants/Liquidity'
import ActionButton from './ActionButton'

interface ButtonGroupProps {
  status: ACTION_STATUS
}

const ButtonGroup = ({ status }: ButtonGroupProps) => {
  return (
    <div className="pt-4 flex flex-col space-y-2">
      <ActionButton target={ACTION_STATUS.SWAP} status={status} title={'Swap'} />
    </div>
  )
}

export default ButtonGroup
