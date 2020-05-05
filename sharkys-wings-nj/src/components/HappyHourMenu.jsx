import React from 'react'

function HappyHourMenu() {
  return (
    <>
      <div id='hhMenuDiv'>
        <div className="hhMenuMiniDiv">
          <b><p>Wings</p></b>
          <p>$0.70 each</p>
        </div>
        <div className="hhMenuMiniDiv">
          <b><p>Clams</p></b>
          <p>$0.60 each</p>
        </div>
        <div className="hhMenuMiniDiv">
          <b><p>Coors Light & Yuengling Pints</p></b>
          <p>$2.00 each</p>
        </div>
        <div className="hhMenuMiniDiv">
          <b><p>Sam Adams, Stella & Cider Pints</p></b>
          <p>$3.50 each</p>
        </div>
        <div className="hhMenuMiniDiv">
          <b><p>Select shots</p></b>
          <p>$3.00 each</p>
        </div>
        <p>&frac12; off selected appetizers <br/>* <i>Dine-in only</i></p>
      </div>
    </>
  )
}

export default HappyHourMenu