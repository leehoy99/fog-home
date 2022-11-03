import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../css/bottom.css'


function Bottom() {
  return (
    <Fragment>
        <div className="bottom-menu">
            <section className="contact-box">
                <div className="contact">
                    <h4 className="join">Join the Conversation</h4>
                    <label htmlFor="email" />
                    <input type="email" className="email" placeholder="EMAIL ADDRESS" />
                </div>
            </section>
            <footer className="footer-section">
                <div className="footer">
                    <Link to='/contact'><p>CONTACT</p></Link>
                    <Link to='/shipping-policy'><p>CLIENT SERVICE</p></Link>
                    <Link to='/privacy-policy'><p>LEGAL NOTICES</p></Link>
                    <a href='https://www.instagram.com/fearofgod/'><p>SOCIAL</p></a>
                </div>
            </footer>
        </div>
    </Fragment>
  )
}

export default Bottom