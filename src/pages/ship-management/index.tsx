import React, { useEffect } from 'react'
import { getShipments } from 'src/services/ship-management/ShipManagementService'

function ShipManagement() {
  useEffect(() => {
    getShipments().then(res => {
      console.log(res)
    })
  }, [])
  return <div>ShipManagement</div>
}

export default ShipManagement
