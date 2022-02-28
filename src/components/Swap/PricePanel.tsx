const PricePanel = () => {
  return (
    <div className="card border w-full mt-4 rounded-md text-blue-dark font-bold text-xs">
      <div className="card-bordy flex flex-col space-y-2">
        <div className="border-b p-2">
          <p>Prices and pool share</p>
        </div>

        <div className="flex space-between text-center p-4">
          <div className="w-1/3 space-y-2">
            <p>421.872</p>
            <p>BUSD per BNB</p>
          </div>
          <div className="w-1/3 space-y-2">
            <p>0.00236986</p>
            <p>BNB per BUSD</p>
          </div>
          <div className="w-1/3 space-y-2">
            <p>0%</p>
            <p>Share of Pool</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricePanel
