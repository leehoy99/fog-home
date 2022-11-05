import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Bag from '../../bag/Bag';
import Bottom from '../../ui/Bottom';
import Nav from '../../ui/Nav'
import './css/legal-notice.css'

function PrivacyPolicy() {

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
                PRIVACY POLICY</span></p>
            <p className="sub-title"><span className="text-hilight">
                SHIPPING AND DELIVERY INFORMATION</span></p>
            <p>
                LAST MODIFIED: <span className="text-hilight">[NOVEMBER 1 , 2020]</span></p>
            <p>
                CLICK HERE TO GET A PRINTABLE VERSION HERE
            </p>
            </div>
            <div className="paragraph-2 paragraph">
            <p className="title"><span className="text-hilight">
                INTRODUCTION</span></p>
            <p>
                THIS POLICY DESCRIBES THE TYPES OF INFORMATION FEAR OF GOD ("COMPANY" OR "WE") MAY COLLECT FROM YOU OR THAT YOU MAY PROVIDE WHEN YOU VISIT THE WEBSITE WWW.FEAROFGOD.COM (OUR "WEBSITE" OR “SITE”) AND OUR PRACTICES FOR COLLECTING, USING, MAINTAINING, PROTECTING, PROCESSING, AND DISCLOSING THAT INFORMATION.
                <span className="text-hilight"> BY ACCESSING OR USING THIS SITE, YOU AGREE TO THIS PRIVACY POLICY.</span>
            </p>
            <p><span className="text-hilight ul">
                CHANGES AND UPDATES</span>
                OUR PRIVACY POLICY MAY HAVE CHANGED SINCE YOUR LAST VISIT. YOU SHOULD REVIEW OUR PRIVACY POLICY AND TERMS OF USE EACH TIME YOU VISIT OUR SITE.  EACH TIME YOU USE OUR SITE YOU HAVE AGREED TO THE CURRENT PRIVACY POLICY AND LATEST TERMS OF USE POSTED ON OUR SITE.
            </p>
            </div>
            <div className="paragraph-3 paragraph">
            <p className="title"><span className="text-hilight ul">
                THIS POLICY APPLIES TO INFORMATION WE COLLECT:</span></p>
            <p>ON THIS SITE;
                <br /><br />
                WHEN YOU PURCHASE PRODUCTS THROUGH THIS SITE;
                <br /><br />
                IN EMAIL AND OTHER ELECTRONIC MESSAGES BETWEEN YOU AND THIS WEBSITE;
                <br /><br />
                WHEN YOU SIGN UP FOR OUR NEWSLETTERS;
                <br /><br />
                WHEN YOU CHOOSE TO REGISTER AND CREATE AN ACCOUNT WITH US; AND/OR
                <br /><br />
                WHEN YOU INTERACT WITH OUR ADVERTISING ON THIRD-PARTY WEBSITES (FOR EXAMPLE, FACEBOOK, LINKEDIN, TWITTER AND OTHER SOCIAL MEDIA SITES AND THIRD PARTY SITES THAT MAY ADVERTISE OUR PRODUCTS AND WHICH MAY INCLUDE A LINK TO THIS SITE).
                <br /><br />
            </p>
            </div>
            <div className="paragraph-4 paragraph">
            <p className="title"><span className="text-hilight ul">
                IT DOES NOT APPLY TO INFORMATION COLLECTED BY:</span></p>
            <p>BY US OFFLINE OR THROUGH ANY OTHER MEANS, INCLUDING ON ANY OTHER WEBSITE OPERATED BY COMPANY OR ANY THIRD PARTY (INCLUDING OUR AFFILIATES AND SUBSIDIARIES); OR
                <br /><br />
                ANY THIRD PARTY (INCLUDING OUR AFFILIATES AND SUBSIDIARIES), EXCEPT AS EXPRESSLY STATED IN THIS PRIVACY POLICY.
                <br /><br />
                _
                <br /><br />
                <span className="text-hilight">CHILDREN</span>
                <br /><br />
                <span className="text-hilight">IF YOU ARE NOT AT LEAST 13 YEARS OLD PLEASE DO NOT USE THIS SITE.</span>
                <br /><br />
                IF YOU ARE IN CERTAIN COUNTRIES IN THE EU, EVEN IF YOU ARE AT LEAST 13, BUT NOT YET 16, YOU MAY NEED YOUR PARENT’S OR GUARDIAN’S APPROVAL.  CHECK HERE TO CONFIRM WHAT YOUR EU MEMBER STATE REQUIRES:
                <br /><br />
                HTTPS://EDPB.EUROPA.EU/ABOUT-EDPB/BOARD/MEMBERS_LV
                <br /><br />
                ONLY IF REQUIRED BY LAW WILL WE ASK FOR YOUR ACTUAL DATE OF BIRTH AND EXCEPT AS REQUIRED BY LAW, YOU ARE NOT OBLIGATED TO PROVIDE THIS INFORMATION.  IF YOU ARE UNDER 18 YOU NEED YOUR PARENT OR GUARDIAN TO CONSENT TO REGISTER AN ACCOUNT WITH US.  
                <br /><br />
                <span className="text-hilight">PARENT/GUARDIAN RIGHT OF ACCESS:</span> YOUR PARENT AND/OR YOUR LEGAL GUARDIAN HAS THE RIGHT TO ASK ABOUT THE INFORMATION WE HAVE COLLECTED ABOUT YOU.  WE WILL ASK THAT PERSON MAKING THE REQUEST TO VERIFY THAT THEY ARE IN FACT YOUR PARENT OR LEGAL GUARDIAN BEFORE WE PROVIDE THEM YOUR INFORMATION.  WE WILL ALSO COLLECT THE CONTACT INFORMATION FOR THE PERSON REQUESTING THIS INFORMATION SO WE CAN RESPOND TO THE REQUEST.
                <br /><br />
                FOR MORE INFORMATION ABOUT CHILDREN’S ONLINE PRIVACY, PLEASE VISIT (FOR CHILDREN IN THE U.S.), THE FEDERAL TRADE COMMISSION’S RESOURCE PAGE:  HTTPS://WWW.CONSUMER.FTC.GOV/ARTICLES/0031-PROTECTING-YOUR-CHILDS-PRIVACY-ONLINE.
                <br /><br />
                WE DO NOT KNOWINGLY COLLECT INFORMATION ABOUT CHILDREN UNDER THAT AGE OF 13.  IF A PARENT OR LEGAL GUARDIAN BELIEVES THAT WE HAVE BEEN PROVIDED WITH INFORMATION ABOUT THEIR CHILD UNDER THE AGE OF 13, PLEASE CONTACT US AT:  SHOP@FEAROFGOD.COM. 
                <br /><br />
            </p>
            </div>
            <div className="paragraph-5 paragraph">
            <p className="title"><span className="text-hilight">
                INFORMATION COLLECTED WHEN YOU VISIT OR PURCHASE FROM THIS SITE:
                </span></p>
            <p className="title"><span className="text-hilight ul">
                CATEGORIES OF INFORMATION AND SOURCES OF THAT INFORMATION
                </span></p>
            <div className="category-box">
                <div className="grid grid-1">
                <span className="text-hilight">
                    CATEGORY
                </span>
                </div>
                <div className="grid grid-2">
                <span className="text-hilight">
                    EXAMPLES
                </span>
                </div>
                <div className="grid grid-3">
                <span className="text-hilight">
                    SOURCE
                </span>
                </div>
                <div className="grid grid-4">
                <span className="text-hilight">
                    IDENTIFIERS AND OTHER PERSONAL INFORMATION
                </span>
                </div>
                <div className="grid grid-5 grid-text">
                NAME, ALIAS, MAILING ADDRESS, IP ADDRESS, EMAIL ADDRESS, ACCOUNT NAME, PASSWORD, PHONE NUMBER, SIGNATURE, CREDIT CARD OR OTHER PAYMENT INFORMATION (PAYMENT INFORMATION IS STORED ONLY BY OUR PAYMENT PROCESSOR AND OUR THIRD PARTY FRAUD DETECTION SERVICE PROVIDER)
                </div>
                <div className="grid grid-6 grid-text">
                YOU WHEN YOU VISIT, CREATE AN ACCOUNT OR MAKE A PURCHASE; OR THE PERSON THAT SENT YOU A GIFT FROM OUR SITE
                </div>
                <div className="grid grid-7">
                <span className="text-hilight">
                    OTHER PERSONAL INFORMATION
                </span>
                </div>
                <div className="grid grid-8 grid-text">
                PHONE NUMBER, SIGNATURE, CREDIT CARD OR OTHER PAYMENT INFORMATION (PAYMENT INFORMATION IS STORED ONLY BY OUR PAYMENT PROCESSOR AND OUR THIRD PARTY FRAUD DETECTION SERVICE PROVIDER)
                </div>
                <div className="grid grid-9 grid-text">
                YOU OR THE PERSON THAT SENT YOU A GIFT FROM THIS SITE
                </div>
                <div className="grid grid-10">
                <span className="text-hilight">
                    INTERNET AND OTHER NETWORK ACTIVITY
                </span>
                </div>
                <div className="grid grid-11 grid-text">
                BROWSING HISTORY, BROWSER TYPE, IP ADDRESS, DEVICE USED TO CONNECT TO THIS SITE, SEARCH HISTORY, YOUR INTERACTION WITH THE WEBSITE, INCLUDING DATES AND TIMES, WHICH ADVERTISEMENTS YOU CLICKED ON, THE SITE YOU MAY HAVE USED TO LINK HERE
                </div>
                <div className="grid grid-12 grid-text">
                AUTOMATED TECHNOLOGY SUCH AS COOKIES, GOOGLE ANALYTICS AND WEB BEACONS
                </div>
                <div className="grid grid-13">
                <span className="text-hilight">
                    YOUR CONSENT, SELECTIONS AND ELECTIONS
                </span>
                </div>
                <div className="grid grid-14 grid-text">
                YOUR OPT-OUT SELECTIONS REGARDING ADVERTISING AND YOUR OPT-IN AND OPT-OUT REGARDING NEWSLETTERS
                </div>
                <div className="grid grid-15 grid-text">
                YOU
                </div>
            </div>
            <p>
                SEE ALSO OUR SECTION FOR CALIFORNIA AND EU RESIDENTS REGARDING INFORMATION COLLECTED AND RETAINED WHEN YOU EXERCISE CERTAIN RIGHTS.
            </p>
            </div>
            <div className="parageaph-6 paragraph">
            <p><span className="text-hilight ul">
                GIFTS:
                </span>
                IF YOU ARE PURCHASING A GIFT FOR SOMEONE, AND YOU GIVE US THAT PERSON’S INFORMATION FOR SHIPPING, WE ARE RELYING ON YOU TO MAKE SURE YOU HAVE THE RIGHT (AND CONSENT IF NEEDED) TO PROVIDE TO US THE RECIPIENT’S INFORMATION.
            </p>
            <p className="sub-title"><span className="text-hilight ul">
                THIRD PARTY SERVICE PROVIDERS AND YOUR PURCHASING/RETURN ACTIVITIES:
                </span>
                WE DO NOT COLLECT OR STORE YOUR CREDIT CARD NUMBER, YOUR GIFT CARD INFORMATION OR YOUR DEBIT CARD INFORMATION (OR OTHER PAYMENT METHOD).  WE USE THIRD PARTY PROVIDERS TO DO THIS FOR US.  AT PRESENT, WE USE SHOPIFY TO PROCESS PAYMENTS FOR US.  WE ALSO USE THIRD PARTY PROVIDERS TO PREVENT FRAUD IN OUR TRANSACTIONS.  IF YOU USE A PARTICULAR SOURCE OF FUNDS (FOR EXAMPLE YOUR APPLEPAY OR PAYPAL ACCOUNT), THOSE SITES AND APPLICATIONS WILL COLLECT YOUR TRANSACTION INFORMATION.  THESE ARE ACCOUNTS YOU CREATED, AND YOU SHOULD REVIEW THE TERMS OF USE AND PRIVACY POLICIES OF THOSE PROVIDERS THAT YOU CHOOSE.  WHEN YOU: PROCEED TO CHECK OUT, OR ASK US TO CREDIT A RETURN, YOUR TRANSACTION INFORMATION, INCLUDING YOUR NAME, PASSWORD, EMAIL OR OTHER POINTS OF CONTACT, AND PAYMENT INFORMATION IS STORED BY OUR THIRD PARTY PROVIDER(S).  YOU CAN CHECK OUT AS A “GUEST” WITHOUT CREATING AN ACCOUNT.  OUR SERVICE PROVIDERS THAT PROCESS PAYMENTS AND MONITOR AND DETECT FRAUD HAVE CERTIFIED THAT THEY ARE PCI (PAYMENT CARD INDUSTRY) COMPLIANT, AND THEY HAVE CONTRACTUALLY COMMITTED TO MAINTAIN YOUR INFORMATION IN ACCORDANCE WITH APPLICABLE LAWS (FOR EXAMPLE, CCPA AND GDPR). 
                <br /><br />
                THESE THIRD PARTY PROVIDERS ARE NOT AUTHORIZED BY US TO USE THE INFORMATION YOU PROVIDE FOR YOUR PURCHASES, CREDITS, RETURNS, AND ACCOUNT INFORMATION EXCEPT TO HELP US DO OUR BUSINESS WITH YOU, OR AS REQUIRED BY LAW (FOR EXAMPLE, TO CONFIRM THERE IS NO FRAUDULENT TRANSACTION).  THESE PROVIDERS HAVE ALSO COMMITTED TO COOPERATE WITH US WHEN YOU EXERCISE CERTAIN CHOICES (FOR EXAMPLE, OF YOU WANT TO BE FORGOTTEN IF YOU ARE IN THE EU OR CALIFORNIA).
            </p>
            <p className="sub-title"><span className="text-hilight ul">
                COOKIES, BEACONS AND OTHER AUTOMATED DATA COLLECTION TECHNOLOGIES; DO NOT TRACK SIGNALS:
                </span>
                SOME WEB BROWSERS MAY TRANSMIT "DO NOT TRACK" SIGNALS TO THE WEBSITES AND OTHER ONLINE SERVICES WITH WHICH THE BROWSER COMMUNICATES. THERE IS NO STANDARD THAT GOVERNS WHAT, IF ANYTHING, WEBSITES AND ONLINE SERVICES SHOULD DO WHEN THEY RECEIVE THESE SIGNALS. WE CURRENTLY DO NOT TAKE ACTION IN RESPONSE TO THESE SIGNALS. IF AND WHEN A STANDARD FOR RESPONDING IS ESTABLISHED, WE MAY REVISIT OUR POLICY ACCORDINGLY.
            </p>
            </div>
        </div>
        <div className="side-menu">
                <ul>
                    <li><Link to='/privacy-policy'>TERMS OF USE</Link></li>
                    <li><Link to='/privacy-policy'>PRIVACY POLICY</Link></li>
                    <li><Link to='/privacy-policy'>ACCESSIBILITY STATEMENT</Link></li>
                </ul>
            </div>
        </section>
        <Bottom />
        <Bag value={display}/>
    </Fragment>
  )
}

export default PrivacyPolicy