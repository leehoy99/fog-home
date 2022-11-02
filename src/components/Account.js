import React, { Fragment, useEffect, useState } from 'react'
import Nav from '../ui/Nav';
import Bag from '../bag/Bag';
import '../css/account.css'
import Bottom from '../ui/Bottom';

function Account() {
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
        <Nav value={display} getDis={getDis}/>
        <section class="account">
            <div class="contents">
                <p>LOGIN</p>
                <form action="" class="account-form">
                    <div class="email-box">
                        <label for="email"></label>
                        <input type="email" id="email" placeholder="EMAIL"/>
                    </div>
                    <div class="password-box">
                        <label for="password"></label>
                        <input type="password" id="password" placeholder="PASSWORD"/>
                    </div>
                    <input type="submit" value="SIGN IN" />
                </form>
                <a href="/"><p>FORGOT YOUR PASSWORD?</p></a>
                <input type="button" id="resist" value="REGISTER AN ACCOUNT"/> 
            </div>
        </section>
        <Bottom />
        <Bag value={display}/>
    </Fragment>
  )
}

export default Account