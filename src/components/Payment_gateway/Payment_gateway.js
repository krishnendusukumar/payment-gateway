import React, { useState } from 'react'
import time from '../../assets/time.png'
import './Payment_gateway.css'
import razorpay from '../../assets/razorpay.png'


const Payment_gateway = () => {
  const [price1, setprice1] = useState(99)
  const [price2, setprice2] = useState(149)
  const [price3, setprice3] = useState(179)
  const [price4, setprice4] = useState(199)
  const [price, setprice] = useState()
  const [totalPrice, setTotalPrice] = useState(19799)
  const priceList = [19799, 19999, 21299];

  const [checked1, setChecked1] = useState("clicked")
  const [checked2, setChecked2] = useState()
  const [checked3, setChecked3] = useState()


  const [DiscountPrice, setDiscountedPrice] = useState(18500)

  const handleClick = (e) => {
    let value;
    console.log(e)
    setChecked1("")
    setChecked2("")
    setChecked3("")
    if (e === 'a') {
      setChecked1("clicked");
      setTotalPrice(() => priceList[0])
    }
    else if (e === 'b') {
      setChecked2("clicked");
      setTotalPrice(() => priceList[1])
    }
    else {
      setChecked3("clicked")
      setTotalPrice(() => priceList[2])
    }
  }

  return (
    <div className='payment-container'>
      <div className="payment-login">
        <div className="login">
          <div className='login-1'>1</div>
          <div className="login-text">Sign Up</div>
        </div>
        <div className="subscribe">
          <div className='login-2'>2</div>
          <div className="subscribe-text">Subscribe</div>
        </div>
      </div>
      <div className="payment-heading">
        <h4>Select a subscription plan</h4>
      </div>
      <div className="payment-plan">
        <button className="payment-pricing">
          <div className="pricing-text">
            <input type="radio" checked />
            <label>12 Months Subscription</label>
            <span>Offer expired</span>
          </div>
          <div className="pricing-numbers">
            <div className="total-pricing">
              Total ₹{price1}
            </div>
            <div className="month-pricing">
              ₹5 /mon
            </div>
          </div>
        </button>

        <button className={checked1 ? "clicked payment-pricing" : "payment-pricing"}>
          <div className="pricing-text">
            <input type="radio" checked={checked1 === "clicked"} onClick={() => handleClick('a')} />
            <label>12 Months Subscription</label>
            <span className='recommended'>Recommended</span>
          </div>

          <div className="pricing-numbers">
            <div className="total-pricing">
              Total ₹{price2}
            </div>
            <div className="month-pricing">
              ₹15 /mon
            </div>
          </div>
        </button>

        <div className={checked2 ? "clicked payment-pricing" : "payment-pricing"}>
          <div className="pricing-text">
            <input type="radio" checked={checked2 === "clicked"} onClick={() => handleClick('b')} />
            <label>6 Months Subscription</label>
          </div>

          <div className="pricing-numbers">
            <div className="total-pricing">
              Total ₹{price3}
            </div>
            <div className="month-pricing">
              ₹25 /mon
            </div>
          </div>

        </div>
        <div className={checked3 ? "clicked payment-pricing" : "payment-pricing"}>
          <div className="pricing-text">
            <input type="radio" checked={checked3 === "clicked"} onClick={() => handleClick('c')} />
            <label>3 Months Subscription</label>
          </div>

          <div className="pricing-numbers">
            <div className="total-pricing">
              Total ₹{price4}
            </div>
            <div className="month-pricing">
              ₹33 /mon
            </div>
          </div>

        </div>

      </div>

      <div className="payment-fee">
        <label htmlFor="">Subscription Fee</label>
        <span>₹{totalPrice}</span>
      </div>

      <div className="discount-fee">
        <div className="discounted-text">
          <div>
            Limited time offer
          </div>
          <span>-₹{DiscountPrice}</span>
        </div>
        <div className="discount-valid">
          <img src={time} alt="" />
          <span>Offer valid till 25th Mar 2023</span>
        </div>
      </div>
      <div className="final-price">
        <div> <b>Total</b> (incl. of 18% GST)</div>
        <span>₹{totalPrice - DiscountPrice}</span>
      </div>

      <div className="payment-done-button">
        <button className="cancel">Cancel</button>
        <button className="proceed">Proceed</button>
      </div>

      <img src={razorpay} className='png-razorpay' alt="" />

    </div>
  )
}

export default Payment_gateway
