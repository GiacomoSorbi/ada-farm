import React from 'react'
import FarmerDashboard from './dashboards/FarmerDashboard'
import FieldDashboard from './dashboards/FieldDashboard'
import MarketDashboard from './dashboards/MarketDashboard'

const FarmManager = ({ farm, farmer, market }) => (
  <div className='FarmManager'>
    {farmer.showUI && <FarmerDashboard farmer={farmer} />}
    {farm.fields.map(
      (field, i) =>
        field.showUI && <FieldDashboard key={field.id} field={field} />,
    )}
    {market.showUI && <MarketDashboard market={market} />}
  </div>
)

export default FarmManager
