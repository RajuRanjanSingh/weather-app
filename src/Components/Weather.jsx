import React from 'react'

const Weather = () => {
  return (
    <>
        <div className="container-1">
            <div className='header'>
                <div className="h2-text">New York City, NY,United States <span className="small-text">As of 04:37 EDT</span></div>
                <div className="search-bar">
                    <input type="text" className="search-input" />
                </div>
            </div>
            <h1 className="h1-text">21&deg;</h1>
            <h4 className="h4-text">Clear</h4>
            <span className="text-2">Day 30&deg;</span>
            <span className="dot"></span>
            <span className="text-2">Night 20&deg;</span>
          </div>
          <div className="container-2">
            <h3 className="h3-text">Today's Forecast for New York City, NY, United States</h3>
            <div className="list">
              <div className="list-items">
                <div className="text">Morning</div>
                <div className="deg">25&deg;</div>
                <div className="icon"></div>
                <div className="text">0%</div>
              </div>
              <div className="list-items">
              <div className="text">Morning</div>
                <div className="deg">25&deg;</div>
                <div className="icon">

                </div>
                <div className="text-1">0%</div>
              </div>
              <div className="list-items">
              <div className="text">Morning</div>
                <div className="deg">25&deg;</div>
                <div className="icon"></div>
                <div className="text">0%</div>
              </div>
              <div className="list-items">
              <div className="text">Morning</div>
                <div className="deg">25&deg;</div>
                <div className="icon"></div>
                <div className="text">0%</div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Weather