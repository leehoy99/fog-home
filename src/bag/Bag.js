import React, { Fragment, useState, useEffect } from 'react'
import '../css/bag.css'

function Bag(props) {
    const [displayOn, setDisplayOn] = useState('');

    useEffect(() => {
        const interValue = props.value;
            if(interValue === 'on') {
                setDisplayOn(`on`)
            }
    },[props.value]);

  return (
    <Fragment>
        <div className={`bag-extend `+displayOn}>
            <div className="control">
                <p>SHOPPING CART</p>
                <p onClick={() => setDisplayOn('')}>BACK</p>
            </div>
            <div className="bag-box">
                <div className="bag-item">
                <div className="img-box">
                    <img src="Images/bag-img.webp" alt='/' />
                </div>
                <div className="info">
                    <p className="item-name">Baseball Tee</p>
                    <p className="sale-info">This item is final sale</p>
                    <p className="item-info">
                    <span className="item-color">
                        Cream Heather/Red 
                    </span>/ 
                    <span className="item-size">
                        XS
                    </span>
                    </p>
                    <p className="qty-text">Qty: <span className="qty">1</span></p>
                </div>
                <div className="price-info">
                    <p>₩<span className="item-price">484,000</span></p>
                    <p className="item-remove">
                    REMOVE
                    </p>
                </div>
                </div>
                <div className="bag-item">
                <div className="img-box">
                    <img src="Images/bag-img.webp" alt='/' />
                </div>
                <div className="info">
                    <p className="item-name">Baseball Tee</p>
                    <p className="sale-info">This item is final sale</p>
                    <p className="item-info">
                    <span className="item-color">
                        Cream Heather/Red 
                    </span>/ 
                    <span className="item-size">
                        XS
                    </span>
                    </p>
                    <p className="qty-text">Qty: <span className="qty">1</span></p>
                </div>
                <div className="price-info">
                    <p>₩<span className="item-price">484,000</span></p>
                    <p className="item-remove">
                    REMOVE
                    </p>
                </div>
                </div>
                <div className="bag-item">
                <div className="img-box">
                    <img src="Images/bag-img.webp" alt='/' />
                </div>
                <div className="info">
                    <p className="item-name">Baseball Tee</p>
                    <p className="sale-info">This item is final sale</p>
                    <p className="item-info">
                    <span className="item-color">
                        Cream Heather/Red 
                    </span>/ 
                    <span className="item-size">
                        XS
                    </span>
                    </p>
                    <p className="qty-text">Qty: <span className="qty">1</span></p>
                </div>
                <div className="price-info">
                    <p>₩<span className="item-price">484,000</span></p>
                    <p className="item-remove">
                    REMOVE
                    </p>
                </div>
                </div>
                <div className="bag-item">
                <div className="img-box">
                    <img src="Images/bag-img.webp" alt='/' />
                </div>
                <div className="info">
                    <p className="item-name">Baseball Tee</p>
                    <p className="sale-info">This item is final sale</p>
                    <p className="item-info">
                    <span className="item-color">
                        Cream Heather/Red 
                    </span>/ 
                    <span className="item-size">
                        XS
                    </span>
                    </p>
                    <p className="qty-text">Qty: <span className="qty">1</span></p>
                </div>
                <div className="price-info">
                    <p>₩<span className="item-price">484,000</span></p>
                    <p className="item-remove">
                    REMOVE
                    </p>
                </div>
                </div>
            </div>
            <div className="shipping">
                <p className="shipping-info">₩470,200 이상에 해당하는 모든 주문은 KOREA (SOUTH)까지 무료 배송해 드립니다</p>
                <p className="cart-limit-info">YOUR CART IS LIMITED TO 10 ESSENTIALS ITEMS</p>
                <div className="subtotal">
                <p>SUBTOTAL:</p>
                <p className="subtotal-price">₩<span>976,200</span></p>
                </div>
                <div className="package-protection-box">
                <div className="package-protection-icon">
                    <img src="Images/package-protection-logo.svg" alt='/' />
                </div>
                <div className="package-protection-paragraph">
                    <p className="package-protection-title">Package Protection</p>
                    <p className="package-protection-text">Against loss, theft, or damage in transit, and<br /> instant resolution with Route. <span className="package-protection-learnMore">Learn More</span></p>
                </div>
                <div className="package-protection-check">
                    <input type="checkbox" id="switch" /><label className="switch" htmlFor="switch">Toggle</label>
                    <p className="package-protection-price">₩25,000</p>
                </div>
                </div>
                <div className="checkout">
                <a href="/international-checkout.html"><p>CHECKOUT</p></a>
                </div>
                <div className="continue-shipping">
                <a href="/detail.html"><p>CONTINUE SHIPPING</p></a>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Bag