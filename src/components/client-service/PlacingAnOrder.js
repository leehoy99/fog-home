import React, { Fragment, useEffect, useState } from 'react'
import '../css/client-service.css'
import Bag from '../../bag/Bag';
import Bottom from '../../ui/Bottom';
import Nav from '../../ui/Nav'
import { Link } from 'react-router-dom';


function PlacingAnOrder() {

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
        <section className="main">
        <Nav value={display} getDis={getDis}/>
            <div className="contents">
            <div className="paragraph-1 paragraph">
                <p className="title"><span className="text-hilight">PLACING AN ORDER</span></p>
                <p>ALL SALES ARE FINAL ON ESSENTIALS, UNDERWEAR/BOXER BRIEFS SOCKS, THE CALIFORNIA SLIP-ON, SUNGLASSES, AND NEW ERA ITEMS.<br /><br />
                ALL SEVENTH COLLECTION SALE ITEMS ARE FINAL SALE AND CANNOT BE RETURNED FOR EXCHANGE OR REFUND.<br /><br />
                </p>
                <p className="sub-title"><span className="text-hilight">PLEASE NOTE THAT ONCE AN ORDER HAS BEEN PLACED IT CANNOT BE CANCELLED OR CHANGED. </span></p>
            </div>
            <div className="paragraph-2 paragraph">
                <p className="title"><span className="text-hilight">U.S. ORDERS</span></p>
                <p>FEAR OF GOD OFFERS FREE STANDARD GROUND SHIPPING ON ORDERS SHIPPING WITHIN THE UNITED STATES. WE DO NOT SHIP TO PO BOXES. PLEASE ALLOW 7-10 BUSINESS DAYS FOR YOUR ORDER TO BE PROCESSED AND SHIPPED.UT
                <br /><br />
                </p>
                <p className="sub-title"><span className="text-hilight">SALES TAX</span></p>
                <p>APPLICABLE SALES TAX WILL BE CALCULATED DURING CHECKOUT BASED ON YOUR SHIPPING ADDRESS</p>
            </div>
            <div className="paragraph-3 paragraph">
                <p className="title"><span className="text-hilight">INTERNATIONAL ORDERS - CUSTOMS FEES, IMPORT TAX &amp; DUTIES</span></p>
                <p>ALL INTERNATIONAL ORDERS (OUTSIDE OF THE USA) MAY BE SUBJECT TO SALES TAX, IMPORT DUTIES, AND CUSTOMS CHARGES AT THE RECEIVER’S EXPENSE.  THIS RATE IS DETERMINED BY THE RECEIVING COUNTRY. PLEASE CONTACT YOUR LOCAL CUSTOMS FOR FURTHER INFORMATION.
                </p>
            </div>
            <div className="paragraph-4 paragraph">
                <p className="title"><span className="text-hilight">SPECIAL NOTE:</span></p>
                <p>ESSENTIALS PRODUCTS ARE CURRENTLY NOT AVAILABLE FOR PURCHASE OR SHIPMENT TO THE EUROPEAN UNION.</p>
            </div>
            <div className="paragraph-5 paragraph">
                <p className="title"><span className="text-hilight">PREORDER</span></p>
                <p>FEAR OF GOD COLLECTS PAYMENT FOR ALL ITEMS PURCHASED ON PREORDER AT THE TIME THE ORDER IS PLACED.</p>
                <br /><br />
                <p>ONCE AN ORDER IS PLACED, YOU WILL RECEIVE AN ORDER CONFIRMATION EMAIL. PLEASE NOTE THAT ONCE AN ORDER IS PLACED IT CANNOT BE CANCELLED OR CHANGED. WE CANNOT CHANGE THE SHIPPING ADDRESS OR THE SHIPPING METHOD SELECTED.</p>
                <br /><br />
                <p>WE ARE UNABLE TO PRICE MATCH OR MAKE PRICE ADJUSTMENTS</p>
            </div>
            <div className="paragraph-6 paragraph">
                <p className="title"><span className="text-hilight">ORDER STATUS</span></p>
                <p>YOU WILL RECEIVE A SHIPPING CONFIRMATION EMAIL, CONTAINING A TRACKING NUMBER, ONCE YOUR ORDER LEAVES OUR DISTRIBUTION CENTER IN LOS ANGELES.  FOR ADDITIONAL INQUIRIES ABOUT THE STATUS OF YOUR ORDER, PLEASE CONTACT US AT HTTPS://FEAROFGOD.COM/PAGES/CONTACT..</p>
            </div>
            <div className="paragraph-7 paragraph">
                <p className="title"><span className="text-hilight">ROUTE PROTECTION SHIPPING INSURANCE</span></p>
                <p>IF YOU HAVE PURCHASED ROUTE PROTECTION YOU MAY FILE A CLAIM THROUGH ROUTE.<br />
                TO REPORT AN ISSUE PLEASE VISIT YOUR EMAIL CONFIRMATION AND FOLLOW THE STEPS BELOW:</p>
                <br /><br />
                <p>1. OPEN YOUR EMAIL FROM ROUTE</p>
                <p>2. IN THE EMAIL, COPY YOUR ROUTE ORDER ID INTO THE REQUIRED FIELD AND THEN CLICK 'RESOLVE AN ISSUE'</p>
                <p>3. IN THE FORM, YOUR EMAIL ADDRESS AND ORDER NUMBER WILL PRE-POPULATE</p>
                <p>4. CHOOSE ISSUE WITH YOUR ORDER (LOST, STOLEN, OR DAMAGED)</p>
                <p>5. ADD DESCRIPTION</p>
                <p>6. CLICK SUBMIT</p>
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

export default PlacingAnOrder;