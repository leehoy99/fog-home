import React, { Fragment, useEffect, useState } from 'react'
import '../css/client-service.css'
import { Link } from 'react-router-dom';


function Covid19Notice(props) {

    const [blur, setBlur] = useState('');
    useEffect(() => {
        setBlur(props.blur)
    },[props.blur])



  return (
    <Fragment>
        <section className={"main " + blur}>
            <div className="contents">
            <div className="paragraph-1 paragraph">
                <p className="title"><span className="text-hilight">
                    COVID-19 NOTICE</span></p>
                <p>TO JOIN IN THE EFFORTS TO SOCIALLY DISTANCE AND STOP THE SPREAD OF COVID-19, WE'RE ASKING OUR EMPLOYEES TO WORK FROM HOME.
                <br /><br />
                OUR WEBSITE WILL REMAIN OPEN AND OPERATIONAL DURING THIS TIME. WE’LL DO OUR BEST TO ENSURE ALL ORDERS ARE SHIPPED IN A TIMELY MANNER BUT ASK FOR YOUR PATIENCE AS THERE WILL BE INEVITABLE DELAYS IN PRODUCTION AND SHIPPING. WE WILL CONTINUE TO UPDATE OUR WEBSITE AND SOCIAL MEDIA PLATFORMS FOR ANY CHANGES THAT MAY OCCUR.
                <br /><br />
                IF YOU HAVE ANY QUESTIONS OR NEED SOMETHING BY A SPECIFIC DATE, PLEASE REACH OUT TO US AT SHOP@FEAROFGOD.COM AND WE WILL ADDRESS YOUR CONCERNS TO THE BEST OF OUR ABILITY.
                <br /><br />
                PLEASE STAY SAFE AND HEALTHY, AND THANK YOU FOR YOUR PATIENCE.
                </p>
                <p className="sub-title"><span className="text-hilight">
                    FEAR OF GOD</span></p>
            </div>
            </div>
            <div className="side-menu">
                <ul>
                    <li><Link to='/placing-an-order'>PLACING AN ORDER</Link></li>
                    <li><Link to='/payment-information'>PAYMENT INFORMATION</Link></li>
                    <li><Link to='/shipping-policy'>SHIPPING POLICY</Link></li>
                    <li><Link to='/return-policy'>RETURN POLICY</Link></li>
                    <li><Link to='/covid-19-notice'>COVID-19 NOTICE</Link></li>
                </ul>
            </div>
        </section>
    </Fragment>
  )
}

export default Covid19Notice;