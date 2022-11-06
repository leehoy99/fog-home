import React, { Fragment, useEffect, useState } from 'react'
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';
import '../css/main.css'
// import Nav from '../ui/Nav'

function Main(props) {
    const [blur, setBlur] = useState('');
    useEffect(() => {
        setBlur(props.blur)
    },[props.blur])
  return (
    <Fragment>
        <div className={'main-container ' + blur}>
            <header className="header">
                <div className="header-video">
                    <ReactPlayer 
                        className='video'
                        url={'https://cdn.shopify.com/videos/c/o/v/9d91782f640c475ba57648d9daae34e0.mp4'}
                        playing={true}
                        loop={true}
                        muted={true}
                        autoPlay={true}
                        width={'100vw'}
                        height={'100vh'}
                    />
                </div>
                <div className="header-text">
                <h1 className="header-text1">ESSENTIALS</h1>
                <h1 className="header-text1">THE SECOND DELIVERY</h1>
                <Link to='/shop'><h4 className="header-text2">SHOP</h4></Link>
                </div>
            </header>
            <section className="cloth-section">
                <div className="cloth-menu-1 cloth-menu">
                <a href="/shop.html">
                    <img src="Images/main-1.webp" alt='/' />
                    <p>FEAR OF GOD</p>
                </a>
                </div>
                <div className="cloth-menu-2 cloth-menu">
                <a href="/athletics.html">
                    <img src="Images/main-2.webp" alt='/' />
                    <p>ATHLETICS</p>
                </a>
                </div>
                <div className="cloth-menu-3 cloth-menu">
                <a href="/shop.html">
                    <img src="Images/main-3.webp" alt='/' />
                    <p>ESSENTIALS</p>
                </a>
                </div>
            </section>
        </div>
    </Fragment>
  )
}

export default Main
