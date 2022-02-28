import ACTION_STATUS from '../../config/constants/Liquidity'

interface ActionButtonProps {
  target: ACTION_STATUS
  status: ACTION_STATUS
  title: string
}

const ActionButton = ({ target, status, title }: ActionButtonProps) => {
  return target === status ? (
    <button className="btn btn-accent w-full rounded-xl drop-shadow-lg normal-case">
      {title}
    </button>
  ) : (
    <></>
  )
}

export default ActionButton
