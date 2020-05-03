import React from 'react'
import "./Specials.css"
import MondayImg from '../images/MondaySpecial2x.png'
import TuesdayImg from '../images/TuesdaySpecial2x.png'
import WednesdayImg from '../images/WednesdaySpecial2x.png'
import ThursdayImg from '../images/ThursdaySpecial2x.png'
import SaturdayImg from '../images/SaturdaySpecial2x.png'
import SundayImg from '../images/SundaySpecial2x.png'

function Specials() {
  return (
    <div id="specials">
      <h2>Specials</h2>


      <div className="dailySpecialsImgs">
        <img src={MondayImg} alt="Monday Specials" className='specialsImg' />
        <img src={TuesdayImg} alt="Monday Specials" className='specialsImg' />
        <img src={WednesdayImg} alt="Monday Specials" className='specialsImg' />
        <img src={ThursdayImg} alt="Monday Specials" className='specialsImg' />
        <img src={SaturdayImg} alt="Monday Specials" className='specialsImg' />
        <img src={SundayImg} alt="Monday Specials" className='specialsImg' />
      </div>
    </div>

  )
}

export default Specials
