import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
function Item(props) {
  return (
    <Fragment>
        <section className="items">
            <div className="item">
            <div className="img-box">
                <Link to="/shop/detail"><img src="Images/02.png" alt='/' /></Link>
            </div>
            <div className="paragraph-box">
                <Link to="/shop/detail">
                <p className="brand">FEAR OF GOD</p>
                <p className="cloth">{props.title}</p>
                <p className="price">₩976,200</p>
                </Link>
            </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Item