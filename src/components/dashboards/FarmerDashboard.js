import React from 'react'

export const foodConfig = [
  { food: 'straw', name: 'bails' },
  { food: 'milk', name: 'pints' },
  { food: 'seeds', name: 'bunches' },
]

const FarmerDashboard = ({ farmer }) => {
  const hideUI = () => {
    farmer.showUI = false
  }

  return (
    <div className='FarmerDashboard'>
      <dl>
        <dt>Current budget</dt>
        <dd>{farmer.budget}</dd>
        {farmer.myFarm && (
          <>
            <dt>Total cows</dt>
            <dd>{farmer.myFarm.cows.total}</dd>
          </>
        )}
        {farmer.myFarm &&
          foodConfig.map(item => (
            <>
              <dt className='some-food'>Total {item.food}</dt>
              <dd>{farmer.myFarm[item.food].total} [item.name]</dd>
            </>
          ))}
      </dl>
      <button onClick={hideUI}>Hide UI</button>
    </div>
  )
}

export default FarmerDashboard
