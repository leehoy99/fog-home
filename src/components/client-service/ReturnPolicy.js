import React, { Fragment, useEffect, useState } from 'react'
import '../css/client-service.css'
import Bag from '../../bag/Bag';
import Bottom from '../../ui/Bottom';
import Nav from '../../ui/Nav'
import { Link } from 'react-router-dom';


function ReturnPolicy() {

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
                <p className="title"><span className="text-hilight">
                    RETURN POLICY</span></p>
                <p className="sub-title"><span className="text-hilight">
                    STANDARD RETURN POLICY</span></p>
                <p>FOR ITEMS PURCHASED AT FEAROFGOD.COM, ALL RETURNS MUST BE SUBMITTED WITHIN 14 DAYS OF RECEIVING YOUR ITEM(S).
                <br /><br />
                TO BE ELIGIBLE FOR RETURN, ITEM(S) MUST BE SENT BACK IN SALE-ABLE CONDITION, IN ITS ORIGINAL PACKAGING WITH TAGS ATTACHED. IF YOU ARE RETURNING SHOES, YOU MUST INCLUDE THE ORIGINAL SHOE BOX WITH DUST BAGS.
                <br /><br />
                ALL ESSENTIALS, COLLABORATION AND SALE PRODUCT IS FINAL SALE, NO EXCEPTIONS.
                </p>
            </div>
            <div className="paragraph-2 paragraph">
                <p className="title"><span className="text-hilight">
                    THE ITEM MUST BE NEW, NOT WORN, UNALTERED, AND FREE OF ANY ODORS OR FRAGRANCES.
                </span></p>
                <p>IF ITEM(S) DO NOT FIT THESE REQUIREMENTS, IT WILL BE SENT BACK TO THE CUSTOMER AT HIS/HER EXPENSE. WE RESERVE THE RIGHT, AT OUR SOLE DISCRETION, TO DETERMINE IF RETURNED MERCHANDISE IS IN SALE-ABLE CONDITION.
                <br /><br />
                WE DO NOT ACCEPT RETURNS OF FEAR OF GOD PRODUCTS PURCHASED AT OUR RETAILERS PARTNERS. PLEASE CONTACT YOUR ORIGINAL POINT OF PURCHASE.
                </p>
            </div>
            <div className="paragraph-3 paragraph">
                <p className="title"><span className="text-hilight">
                    ALE PRODUCT</span></p>
                <p><span className="text-hilight">
                    SALE PRODUCT</span></p>
                <p><span className="text-hilight">
                    ESSENTIALS</span></p>
                <p><span className="text-hilight">
                    THE CALIFORNIA</span></p>
                <p><span className="text-hilight">
                    UNDERWEAR/BOXER BRIEFS</span></p>
                <p><span className="text-hilight">
                    SOCKS</span></p>
                <p><span className="text-hilight">
                    SUNGLASSES</span></p>
                <p className="sub-title"><span className="text-hilight">
                    RETURN INSTRUCTIONS – FOR U.S. ORDERS ONLY</span></p>
            </div>
            <div className="paragraph-4 paragraph">
                <p>FOR FULL PRICED ITEMS ELIGIBLE FOR RETURN, PLEASE SUBMIT A REQUEST AT RETURNS.FEAROFGOD.COM WITHIN 14 DAYS OF RECEIVING THE ITEM(S). WE UTILIZE A THIRD-PARTY SERVICE CALLED RETURNLY TO APPROVE AND PROCESS ALL ONLINE RETURNS. FOLLOW THE INSTRUCTIONS ONLINE AND IF YOUR RETURN REQUEST IS ACCEPTED, YOU WILL BE PROMPTED TO PRINT A FEDEX RETURN SHIPPING LABEL.</p>
                <br /><br />
                <p>PLEASE PACK ALL ITEMS YOU ARE RETURNING AND INCLUDE YOUR ORIGINAL PACKING SLIP, NOTING THE ITEMS YOU ARE RETURNING.  YOU CAN DROP OFF YOUR PACKAGE AT ANY FEDEX CENTER.  WE RECOMMEND YOU OBTAIN A RECEIPT OF YOUR DROP OFF AND/OR NOTE THE TRACKING NUMBER.</p>
                <br /><br />
                <p>YOU WILL RECEIVE AN EMAIL NOTIFICATION ONCE YOUR ITEM IS RECEIVED BACK AT OUR LOS ANGELES DISTRIBUTION CENTER. PLEASE ALLOW 7-14 BUSINESS DAYS FOR ALL RETURNS TO BE PROCESSED.</p>
            </div>
            <div className="paragraph-5 paragraph">
                <p>IF YOU USE THE PREPAID SHIPPING LABEL GENERATED FROM RETURNLY, WE WILL DEDUCT A FEE OF ₩‌11,600 FROM YOUR REFUND.</p>
                <br /><br />
                <p>IF YOU PREFER TO SHIP BACK YOUR ITEM TO US USING A DIFFERENT SHIPPING METHOD PLEASE CONTACT FEAR OF GOD CUSTOMER SERVICE AT SHOP@FEAROFGOD.COM FOR RETURN INSTRUCTIONS.</p>
            </div>
            <div className="paragraph-6 paragraph">
                <p className="title"><span className="text-hilight">
                    RETURN INSTRUCTIONS – FOR INTERNATIONAL ORDERS</span></p>
                <p>ALL INTERNATIONAL RETURNS MUST BE SHIPPED BACK TO FEAR OF GOD AT THE CUSTOMER’S EXPENSE. PLEASE CONTACT FEAR OF GOD CUSTOMER SERVICE AT SHOP@FEAROFGOD.COM FOR RETURN INSTRUCTIONS SPECIFIC TO YOUR COUNTRY.
                <br /><br />
                PLEASE PACK ALL ITEMS YOU ARE RETURNING AND INCLUDE YOUR ORIGINAL PACKING SLIP, NOTING THE ITEMS YOU ARE RETURNING. YOU WILL RECEIVE AN EMAIL NOTIFICATION ONCE YOUR ITEM IS RECEIVED BACK AT OUR LOS ANGELES DISTRIBUTION CENTER.
                </p>
            </div>
            <div className="paragraph-7 paragraph">
                <p className="title"><span className="text-hilight">
                    RETURN INSTRUCTIONS – FOR INTERNATIONAL ORDERS</span></p>
                <p>ALL INTERNATIONAL RETURNS MUST BE SHIPPED BACK TO FEAR OF GOD AT THE CUSTOMER’S EXPENSE. PLEASE CONTACT FEAR OF GOD CUSTOMER SERVICE AT SHOP@FEAROFGOD.COM FOR RETURN INSTRUCTIONS SPECIFIC TO YOUR COUNTRY.
                <br /><br />
                PLEASE PACK ALL ITEMS YOU ARE RETURNING AND INCLUDE YOUR ORIGINAL PACKING SLIP, NOTING THE ITEMS YOU ARE RETURNING. YOU WILL RECEIVE AN EMAIL NOTIFICATION ONCE YOUR ITEM IS RECEIVED BACK AT OUR LOS ANGELES DISTRIBUTION CENTER.
                </p>
            </div>
            <div className="paragraph-8 paragraph">
                <p className="title"><span className="text-hilight">
                    REFUNDS</span></p>
                <p>YOU WILL RECEIVE AN EMAIL NOTIFICATION ONCE WE HAVE ISSUED YOUR REFUND.
                <br /><br />
                ONCE WE ISSUE YOUR REFUND, PLEASE ALLOW 10-14 BUSINESS DAYS FOR THIS TO APPEAR ON YOUR BANK STATEMENT. WE DO NOT OFFER CREDIT NOTES, AND ALL REFUNDS WILL BE RETURNED TO THE ORIGINAL FORM OF PAYMENT. NO EXCEPTIONS. SHIPPING COSTS ARE NON-REFUNDABLE.
                </p>
            </div>
            <div className="paragraph-9 paragraph">
                <p className="title"><span className="text-hilight">
                    EXCHANGES - FOR U.S. ORDERS</span></p>
                <p>IF YOU WOULD LIKE TO EXCHANGE AN ITEM YOU RECEIVED, PLEASE FOLLOW THE RETURN INSTRUCTIONS NOTED ABOVE. WE UTILIZE A THIRD-PARTY SERVICE CALLED RETURNLY TO PROCESS ALL RETURNS AND EXCHANGES.  AS YOU FOLLOW THE INSTRUCTIONS WITHIN RETURNLY, YOU WILL BE OFFERED THE OPPORTUNITY TO EXCHANGE THE ITEM YOU ARE RETURNING FOR A REPLACEMENT ITEM.
                <br /><br />
                IF THE ITEM YOU WOULD LIKE IS NO LONGER AVAILABLE, PLEASE FOLLOW OUR STEPS TO RETURN YOUR ITEM(S) FOR A REFUND, AND PLACE A NEW ORDER. FOR INTERNATIONAL EXCHANGES AND ORDERS BECAUSE OUR ITEMS SELL OUT QUICKLY, WE ARE UNABLE TO OFFER AUTOMATIC EXCHANGES FOR INTERNATIONAL ORDERS AT THIS TIME.  SHOULD YOU REQUIRE A DIFFERENT SIZE OR COLOR OF AN ITEM YOU HAVE RECEIVED, PLEASE RETURN YOUR ORDER FOLLOWING THE INSTRUCTIONS NOTED ABOVE AND PLACE A NEW ORDER FOR YOUR DESIRED ITEM ON FEAROFGOD.COM. 
                </p>
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

export default ReturnPolicy;