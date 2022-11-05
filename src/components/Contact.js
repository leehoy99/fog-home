import React, { Fragment, useEffect, useState } from 'react'
import '../css/contact.css'
import Bag from '../bag/Bag';
import Bottom from '../ui/Bottom';
import Nav from '../ui/Nav'

function Contact() {

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
        <section className={'contact-section ' + blur}>
            <div className="contact-contents">
                <h1 className="contact-title">CONTACT</h1>
                <div className="contact-info-1">
                    <p>GENERAL INQUIRIES</p>
                    <p><a href="mailto:shop@fearofgod.com">SHOP@FEAROFGOD.COM</a></p>
                </div>
                <div className="contact-info-2">
                    <p>RETURNS</p>
                    <p><a href="returns.fearofgod.com">RETURNS.FEAROFGOD.COM</a></p>
                </div>
                <p>SEND US A MESSAGE</p>
                <form action className="contact-form">
                    <div className="contact-name">
                        <label htmlFor="contactName" />
                        <input id="contactName" type="text" placeholder="NAME" />
                    </div>
                    <div className="contact-general">
                        <label htmlFor="contactGenetal" />
                        <select id="contactGeneral">
                            <option value="generalInquiry">GENERAL INQUIRY</option>
                            <option value="orderStatus">ORDER STATUS</option>
                            <option value="returnsExchanges">RETURNS  &amp; EXCHANGES</option>
                            <option value="internationalReturns">INTERNATIONAL RETURNS</option>
                            <option value="damages">DAMAGES</option>
                            <option value="myAccount">MY ACCOUNT</option>
                            <option value="cancelationRequest">CANCELATION REQUEST</option>
                            <option value="other">OTHER</option>
                        </select>
                    </div>
                    <div className="contact-email">
                        <label htmlFor="contactEmail" />
                        <input id="contactEmail" type="email" placeholder="EMAIL" />
                    </div>
                    <div className="contact-message">
                        <label htmlFor="contactMessage" />
                        <textarea id="contactMessage" placeholder="MESSAGE" defaultValue={""} />
                    </div>
                    <div className="contact-send">
                        <input type="submit" defaultValue="SEND" />
                    </div>
                </form>
            </div>
        </section>
        <Bottom />
        <Bag value={display}/>
    </Fragment>
  )
}

export default Contact