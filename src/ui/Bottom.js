import React, { Fragment } from 'react'
import '../css/bottom.css'


function Bottom() {
  return (
    <Fragment>
        <div className="bottom-menu">
            <section className="contact-section">
                <div className="contact">
                    <h4 className="join">Join the Conversation</h4>
                    <label htmlFor="email" />
                    <input type="email" className="email" placeholder="EMAIL ADDRESS" onfocus="this.placeholder=''" />
                </div>
            </section>
            <footer className="footer-section">
                <div className="footer">
                    <p><a href="">CONTACT</a></p>
                    <p><a href="">CLIENT SECVICE</a></p>
                    <p><a href="">LEGAL NOTICES</a></p>
                    <p><a href="">SOCIAL</a></p>
                </div>
            </footer>
        </div>
    </Fragment>
  )
}

export default Bottom