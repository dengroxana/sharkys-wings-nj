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
        <img src={MondayImg} alt="Monday Specials" className='specialsImg' id="slide-1" />
        <img src={TuesdayImg} alt="Monday Specials" className='specialsImg' id="slide-2" />
        <img src={WednesdayImg} alt="Monday Specials" className='specialsImg' id="slide-3" />
        <img src={ThursdayImg} alt="Monday Specials" className='specialsImg' id="slide-4" />
        <img src={SaturdayImg} alt="Monday Specials" className='specialsImg' id="slide-5" />
        <img src={SundayImg} alt="Monday Specials" className='specialsImg' id="slide-6" />
      </div>
    </div>

  )
}

export default Specials


// TRIED WITH DIVS
// +++++++++++++

  //   <div id="specials">
  //   <h2>Specials</h2>
  //   <div className="dailySpecialsImgs">
  //     <div className='specialsImgTEST'>
  //       <img src={MondayImg} alt="Monday Specials" className='specialsImg' id="slide-1" />
  //     </div>
  //     <div className='specialsImgTEST'>
  //       <img src={TuesdayImg} alt="Monday Specials" className='specialsImg' id="slide-2" />
  //     </div>
  //     <div className='specialsImgTEST'>
  //       <img src={WednesdayImg} alt="Monday Specials" className='specialsImg' id="slide-3" />
  //     </div>
  //     <div className='specialsImgTEST'>
  //       <img src={ThursdayImg} alt="Monday Specials" className='specialsImg' id="slide-4" />
  //     </div>
  //     <div className='specialsImgTEST'>
  //       <img src={SaturdayImg} alt="Monday Specials" className='specialsImg' id="slide-5" />
  //     </div>
  //     <div className='specialsImgTEST'>
  //       <img src={SundayImg} alt="Monday Specials" className='specialsImg' id="slide-6" />
  //     </div>
  //   </div>
  // </div>