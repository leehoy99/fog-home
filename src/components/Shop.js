import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Nav from '../ui/Nav'
import '../css/shop.css'
import Bag from '../bag/Bag';

function Shop() {

    const [display, setDisplay] = useState('');
        const getDis = (display) => {
            setDisplay(display)
            console.log('do in shop')
        };
    console.log(display)
    useEffect(() => {
        getDis();
    },[display])
    
  return (
    <Fragment>
        <div className="container">
            <Nav value={display} getDis={getDis}/>
            <section className="filter-section">
                <p className="cartegory">ALL<span className="arrow" /></p>
                <p className="filter">FILTER<span className="cross-minus" /></p>
            </section>
            <section className="items">
                <div className="item">
                <div className="img-box">
                    <Link to="/shop/detail"><img src="Images/02.png" alt='/' /></Link>
                </div>
                <div className="paragraph-box">
                    <Link to="/shop/detail">
                    <p className="brand">FEAR OF GOD</p>
                    <p className="cloth">Full Zip Baseball Jersey</p>
                    <p className="price">₩976,200</p>
                    </Link>
                </div>
                </div>
            </section>
            <section className="page">
                <span className="left-arrow">←</span>
                <p>1</p>
                <p>2</p>
                <span className="right-arrow">→</span>
            </section>
        </div>
        <Bag value={display}/>
    </Fragment>
  )
}

export default Shop;
