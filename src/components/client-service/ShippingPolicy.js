import React, { Fragment, useEffect, useState } from 'react'
import '../css/client-service.css'
import Bag from '../../bag/Bag';
import Bottom from '../../ui/Bottom';
import Nav from '../../ui/Nav'
import { Link } from 'react-router-dom';

function ShippingPolicy() {

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
                    <p className="title"><span className="text-hilight">SHIPPING POLICY</span></p>
                    <p className="sub-title"><span className="text-hilight">SHIPPING AND DELIVERY INFORMATION</span></p>
                    <p>STANDARD PROCESSING TIME FOR ORDERS IS 5-7 BUSINESS DAYS TO BE PROCESSED AND SHIPPED.<br />
                        ORDERS PLACED AFTER 10:00 AM (PST) MAY BE PROCESSED THE FOLLOWING BUSINESS DAY.<br />
                        PROCESSING AND SHIPPING TIMES MAY INCREASE DURING HOLIDAYS AND OTHER PEAK SEASONS.<br /> 
                        WE CANNOT CHANGE THE SHIPPING ADDRESS OR THE SHIPPING METHOD SELECTED AFTER CHECKOUT.<br />
                    </p>
                    <p>ONCE AN ORDER HAS BEEN SHIPPED, AN EMAIL WILL BE SENT TO THE EMAIL ADDRESS PROVIDED ON THE ORDER WITH YOUR SHIPMENT'S TRACKING INFORMATION.<br />
                        CUSTOMERS ARE RESPONSIBLE FOR MONITORING THE DELIVERY OF THEIR SHIPMENT ONCE AN ORDER HAS LEFT OUR WAREHOUSE.
                    </p>
                    <p className="sub-title"><span className="text-hilight">U.S. SHIPPING OPTIONS AND COSTS</span></p>
                    <p>FEAR OF GOD OFFERS <span className="text-hilight">FREE STANDARD GROUND SHIPPING</span> FOR ALL FULL PRICE MAINLINE ORDERS SHIPPING WITHIN THE UNITED STATES.  ORDERS TAKE 4-7 BUSINESS DAYS TO ARRIVE ONCE YOUR ORDER LEAVES OUR DISTRIBUTION CENTER IN LOS ANGELES.</p>
                    <p>FOR ALL OTHER PURCHASES, SHIPPING COSTS WILL BE CALCULATED AT CHECKOUT AND WILL BE BASED ON YOUR SHIPPING ADDRESS AND ESTIMATED WEIGHT OF YOUR PACKAGE.</p>
                </div>
                <div className="paragraph-2 paragraph">
                    <p className="title"><span className="text-hilight">DUE TO COVID-19 STAFFING PRECAUTIONS, WE DO NOT HAVE EXPEDITED SHIPPING AVAILABLE AT THIS TIME.</span></p>
                    <p>FOR DELIVERIES TO ALASKA, HAWAII AND PUERTO RICO, YOUR ORDER WILL BE AUTOMATICALLY UPGRADED TO AIR DELIVERY AT CHECKOUT
                        <br /><br />
                        WE ARE UNABLE TO COMBINE SEPARATE ORDERS INTO A SINGLE SHIPMENT.
                        <br /><br />
                        WE DO NOT SHIP TO PO BOXES.
                    </p>
                    <p className="sub-title"><span className="text-hilight">INTERNATIONAL SHIPPING OPTIONS AND COSTS</span></p>
                    <p>INTERNATIONAL SHIPPING RATES VARY.  DURING CHECKOUT WE CALCULATE SHIPPING COSTS BASED ON YOUR LOCATION AND ESTIMATED WEIGHT OF YOUR PACKAGE.
                    </p>
                </div>
                <div className="paragraph-3 paragraph">
                    <p className="title"><span className="text-hilight">FAILED DELIVERY/ RETURNED TO SENDER/ ABANDONED PACKAGES</span></p>
                    <p>IF YOUR PACKAGE CANNOT BE DELIVERED TO THE GIVEN SHIPPING ADDRESS DUE TO INCORRECT SHIPPING ADDRESS AND/OR PHONE NUMBER, THE PACKAGE WILL BE RETURNED TO THE SENDER (FEAR OF GOD) AT THE CUSTOMER’S EXPENSE. 
                        <br /><br />
                        IF THE RECEIVER IS ABSENT UPON ALL DELIVERY ATTEMPTS, YOUR PACKAGE WILL BE HELD AT A LOCAL FEDEX CENTER FOR PICK UP.  IF THE CUSTOMER FAILS TO PICK UP THE PACKAGE FOR ANY REASON, THE PACKAGE WILL BE RETURNED TO THE SENDER (FEAR OF GOD) AT THE CUSTOMER’S EXPENSE.
                        <br /><br />
                        FOR INTERNATIONAL CUSTOMERS, IF YOU REFUSE RECEIPT OF YOUR PACKAGE, THE PACKAGE WILL BE RETURNED TO FEAR OF GOD AT YOUR EXPENSE. THE EXPENSE INCLUDES SHIPPING COSTS AND ANY DUTY AND TAX THE PACKAGE MAY HAVE INCURRED; THIS AMOUNT WILL BE DEDUCTED FROM THE TOTAL OF THE AMOUNT TO BE REFUNDED.
                        <br /><br />
                        PACKAGES WILL BE HELD AT CUSTOMS FOR 30 DAYS, AFTER WHICH IT WILL BE DEEMED ABANDONED. CUSTOMERS WHO HAVE ABANDONED A PACKAGE WILL FORFEIT THE RIGHT TO AN EXCHANGE OR REFUND FOR THEIR ORDER.
                    </p>
                    <p className="sub-title"><span className="text-hilight">DAMAGED/OPENED BOX</span></p>
                    <p>IF YOU RECEIVE YOUR PACKAGE, AND IT IS DAMAGED AND/OR OPENED, PLEASE TAKE A PHOTO OF THE DAMAGE BEFORE CHECKING THE CONTENTS INSIDE. PLEASE SUBMIT A CLAIM VIA THE COURIER USED TO SHIP YOUR ORDER. PLEASE ALSO CONTACT US AT <a href>SHOP@FEAROFGOD.COM.</a></p>
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

export default ShippingPolicy;