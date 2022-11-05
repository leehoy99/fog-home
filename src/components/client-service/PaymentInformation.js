import React, { Fragment, useEffect, useState } from 'react'
import '../css/client-service.css'
import Bag from '../../bag/Bag';
import Bottom from '../../ui/Bottom';
import Nav from '../../ui/Nav'
import { Link } from 'react-router-dom';


function PaymentInformation() {

    const [display, setDisplay] = useState('');
    const [blur, setBlur] = useState('');
    const getDis = (display) => {
        setDisplay(display)
    };
    const getBlur = (blur) => {
        if(blur === 'on') {
                setBlur(blur)
        } else {
            setBlur(blur)
        }
    }

    useEffect(() => {
        getDis();
    },[display])



  return (
    <Fragment>
        <Nav value={display} getDis={getDis} getBlur={getBlur}/>
        <section className={"main " + blur}>
            <div className="contents">
            <div className="paragraph-1 paragraph">
                <p className="title"><span className="text-hilight">
                    PAYMENT INFORMATION</span></p>
                <p className="sub-title"><span className="text-hilight">PPAYMENT METHODS</span></p>
                <p>FEAR OF GOD ACCEPTS VISA, MASTERCARD, DISCOVER, AMERICAN EXPRESS, PAYPAL, APPLE PAY, AND ANDROID PAY. PLEASE NOTE ONLY ONE (1) FORM OF PAYMENT METHOD MAY BE USED ON A SINGLE ORDER.
                </p>
                <p className="sub-title"><span className="text-hilight">
                    PAYMENT TROUBLESHOOTING</span></p>
                <p>FOR THE SECURITY OF OUR SHOPPERS, WE HAVE FRAUD PROTECTIONS IN PLACE DURING OUR CHECKOUT PROCESS.  IF YOU ARE ATTEMPTING TO CHECKOUT AND RECEIVE THE FOLLOWING ERROR
                <br />
                MESSAGE "TRANSACTION CANNOT BE PROCESSED" PLEASE CONTACT YOUR BANK IN ORDER FOR THEM TO AUTHORIZE THE TRANSACTION. 
                </p>
                <p className="sub-title"><span className="text-hilight">CHARGING YOUR CARD</span></p>
                <p>ONCE YOUR ORDER HAS BEEN PLACED, YOUR CARD IS CHARGED ACCORDING TO THE AMOUNT AND CURRENCY OF YOUR ORDER, INCLUDING ANY APPLICABLE TAXES AND SHIPPING FEES.</p>
            </div>
            <div className="paragraph-2 paragraph">
                <p className="title"><span className="text-hilight">
                    REFUNDS FOR FULL ORDER OR ITEM CANCELLATIONS
                </span></p>
                <p>IF WE NEED TO CANCEL YOUR ORDER DUE TO LACK OF PRODUCT AVAILABILITY, WE WILL NOTIFY YOU BY EMAIL AND WILL REFUND THE AMOUNT CHARGED IMMEDIATELY. PLEASE NOTE THAT IT MAY TAKE UP TO 10 BUSINESS DAYS FOR THE FUNDS TO REFLECT BACK ON YOUR BANK STATEMENT.
                </p>
            </div>
            <div className="paragraph-3 paragraph">
                <p className="title"><span className="text-hilight">
                    PAYMENT FOR PREORDERED ITEMS</span></p>
                <p>WE COLLECT PAYMENT FOR ALL ITEMS PURCHASED ON PREORDER AT THE TIME YOU PLACE THE ORDER.</p>
                <p className="sub-title"><span className="text-hilight">
                    PERSONAL INFORMATION</span></p>
                <p>ALL INFORMATION SHARED WITH FEAR OF GOD WHEN PLACING AN ORDER IS CONFIDENTIAL. FOR ADDITIONAL INFORMATION PLEASE READ OUR PRIVACY POLICY.</p>
            </div>
            <div className="paragraph-4 paragraph">
                <p className="title"><span className="text-hilight">INTERNATIONAL ORDERS - CUSTOMS FEES, IMPORT TAX &amp; DUTIES</span></p>
                <p>ALL INTERNATIONAL ORDERS (OUTSIDE OF THE USA) MAY BE SUBJECT TO SALES TAX, IMPORT DUTIES, AND CUSTOMS CHARGES AT THE RECEIVER’S EXPENSE.   THIS RATE IS DETERMINED BY THE RECEIVING COUNTRY. PLEASE CONTACT YOUR LOCAL CUSTOMS FOR FURTHER INFORMATION.</p>
            </div>
            <div className="paragraph-5 paragraph">
                <p className="title"><span className="text-hilight">
                    ESSENTIALS PRODUCTS ARE CURRENTLY NOT AVAILABLE FOR PURCHASE IN THE EUROPEAN UNION. </span></p>
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
        <Bottom />
        <Bag value={display}/>
    </Fragment>
  )
}

export default PaymentInformation;