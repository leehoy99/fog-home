import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MenuExtendGnb1 from '../components/MenuExtendGnb1';
import MenuExtendGnb3 from '../components/MenuExtendGnb3';
// import Blur from '../ui/Blur';
import '../css/nav.css'
import Search from './Search';

function Nav(props) {

    // const [changeBlur, setChangeBlur] = useState(false);
    const [navScroll, setNavScroll] = useState('nav-top');
    const [gnb1Mouse, setGnb1Mouse] = useState(false);
    const [gnb3Mouse, setGnb3Mouse] = useState(false);
    const [searchMouse, setSearchMouse] = useState(false);
    
    const click = () => {
        props.getDis('on');
    }

    const navGoScroll = function() {
        if(window.scrollY > 0) {
            setNavScroll('nav-top nav-bg')
        } else {
            if(props.classInfo === 'main') {
                setNavScroll('nav-top main')
            } else {
                setNavScroll('nav-top')
            }
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            window.addEventListener('scroll', navGoScroll);
            navGoScroll();
        }, 100);
        return () => {
            clearInterval(timer);
            window.removeEventListener('scroll', navGoScroll)
        }
    });
    
    return (
    <Fragment>
        <div className='nav-container'>
            <div className='nav-top-sticky'>
                <nav className={navScroll}>
                    <div className="react-i">
                        <span className="material-symbols-outlined search">search</span>
                        <Link to="/Account"><span className="material-symbols-outlined person">person</span></Link>
                        <a href='/'><span className="material-symbols-outlined local_mall">local_mall</span></a>
                    </div>
                    <div className="L-gnb gnb">
                        <ul>
                            <li className="gnb1" onMouseOver={() => {
                                    setGnb1Mouse(true)
                                    props.getBlur('on')
                                }} onMouseLeave={() => {
                                    setGnb1Mouse(false)
                                    props.getBlur('')
                                }}>
                                <Link to="/shop" className="fog" >FEAR OF GOD
                                </Link>
                                <MenuExtendGnb1 class={gnb1Mouse}/>
                            </li>
                            <li className="gnb2">
                                <Link to="/athletics" className="ath">ATHLETIC</Link>
                            </li>
                            <li className="gnb3" onMouseOver={() => {
                                    setGnb3Mouse(true)
                                    props.getBlur('on')
                                }} onMouseLeave={() => {
                                    setGnb3Mouse(false)
                                    props.getBlur('')
                                }}>
                                <Link to="/shop" className="fog" >ESSENTIALS
                                </Link>
                                <MenuExtendGnb3 class={gnb3Mouse}/>
                            </li>
                        </ul>
                    </div>
                    <div className="title">
                        <Link to="/main"><p>FEAR OF GOD</p></Link>
                    </div>
                    <div className="R-gnb gnb">
                        <ul>
                        <li className="gnb4" onMouseOver={() => {
                                    setSearchMouse(true)
                                    props.getBlur('on')
                                }} onMouseLeave={() => {
                                    setSearchMouse(false)
                                    props.getBlur('')
                                }}>
                            <p>SEARCH</p>
                            <Search class={searchMouse}/>
                        </li>
                        <li className="gnb5"><Link to="/account">ACCOUNT</Link></li>
                        <li className="gnb6" onClick={click}><p>BAG</p></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="nav-bottom-sticky">
                <nav className="nav-bottom">
                <div className="L-gnb gnb">
                    <ul>
                    <li className="gnb1">
                        <Link to="/shop" className="fog">FEAR OF GOD</Link>
                    </li>
                    <li className="gnb2">
                        <Link to="/athletics">ATHLETIC</Link>
                    </li>
                    <li className="gnb3">
                        <Link to="/shop" className="esn">ESSENTIALS</Link>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        </div>
        {/* <Blur style={changeBlur}/> */}
    </Fragment>
  )
}

export default Nav;