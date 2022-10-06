import React from 'react'
import data from '../Details.json'

const Weather = () => {
  return (
    <>
       {
        Object.values(data).map((item,index)=>(
            <div key={index}>
<div className="container-1">
            <div className='header'>
                <div className="h2-text">{item.results.channel.location.city}, {item.results.channel.location.region} {item.results.channel.location.country} <span className="small-text">As of 04:37 EDT</span></div>
                <div className="search-bar">
                    <input type="text" className="search-input" />
                </div>
            </div>
            <h1 className="h1-text">{item.results.channel.item.condition.code}&deg;</h1>
            <h4 className="h4-text">Clear</h4>
            <span className="text-2">{item.results.channel.item.title}</span>
           
          </div>
          <div className="container-2">
            <h3 className="h3-text">{item.results.channel.description}</h3>
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
                <div className="icon">
                  <img src={item.results.channel.image.url} alt="" />
                </div>
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
            </div>
            
        ))
       }
        
    </>
  )
}

export default Weather