

import React, { useContext } from 'react'
import AlertContext from '../../Context/Alert/alertContext'


const Alerts = () => {

  const alertContext = useContext(AlertContext);
  
  const { alerts } = alertContext;

  return (
    
    alerts.length > 0 &&
    alerts.map( alert => (
      <div key={alert.id} className={ `alert alert-${alert.type}`}>
          <i className='fas fa-info-circle' /> {alert.msg}
      </div>
    ))
  )
}

export default Alerts;