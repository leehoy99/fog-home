import React from 'react'
import { Link } from 'react-router-dom'

function RecomendItem(props) {
  
  return (
    <div className="item">
    <div className="img-box">
    <Link to={'/shop/detail/'+ props.id}><img src={props.image} alt='/' /></Link>
    </div>
    <div className="paragraph-box">
    <Link to={'/shop/detail/'+ props.id}>
        <p className="brand">FEAR OF GOD</p>
        <p className="cloth">{props.title}</p>
        <p className="price">{props.price}</p>
    </Link>
    </div>
</div>
  )
}

export default RecomendItem