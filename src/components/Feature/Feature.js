import React from 'react'
import './Feature.css'
import clock from '../../assets/clock.png'
import ads from '../../assets/ads.png'
import book from '../../assets/book.png'
import live from '../../assets/live.png'
import edu from '../../assets/edu.png'

const Feature = () => {
  return (
    <div className='feature-container'>
      <h1>
        Access curated courses worth ₹<strike> <span> 18,500 </span></strike>&nbsp; at just ₹ 99 per year!
      </h1>
      <div className="feature-subheading">
        <img src={book} alt="" />
        <div><span>100+ </span>&nbsp;Job relevant courses</div>
      </div>
      <div className="feature-subheading">
        <img src={clock} alt="" />
        <div><span>20,000+ </span>&nbsp;Hours of content</div>
      </div>
      <div className="feature-subheading">
        <img src={live} alt="" />
        <div><span>Exclusive </span>&nbsp;webinar access</div>
      </div>
      <div className="feature-subheading">
        <img src={edu} alt="" />
        <div>Scholorship worth ₹<span>&nbsp; 94,500</span></div>
      </div>
      <div className="feature-subheading">
        <img src={ads} alt="" />
        <div><span>Ads Free </span>&nbsp;learning experience</div>
      </div>
    </div>
  )
}

export default Feature
