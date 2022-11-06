import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../css/shop.css'
function Item(props) {
  // console.log(props.id)
  return (
    <Fragment>
      <div className="item">
      <div className="img-box">
          <Link to={"/shop/detail/"+props.id}><img src={props.image} alt='/' /></Link>
      </div>
      <div className="paragraph-box">
          <Link to="/shop/detail">
          <p className="brand">{props.brand}</p>
          <p className="cloth">{props.title}</p>
          <p className="price">{props.price}</p>
          </Link>
      </div>
      </div>
    </Fragment>
  )
}

export default Item