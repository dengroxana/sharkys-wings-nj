import React from 'react'
import HappyHourDays from './HappyHourDays'
import HappyHourMenu from './HappyHourMenu'
import './HappyHour.css'


function HappyHour() {
  return (
    <div id="HappyHour">
      <HappyHourDays />
      <HappyHourMenu />
    </div>
  )
}

export default HappyHour