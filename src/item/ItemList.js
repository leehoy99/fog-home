import React, { Fragment } from 'react'
import ItemDemo from './ItemDemo'
import Item from './Item'

function ItemList(props) {
    console.log(props.item)
  return (
    <Fragment>
        {/* {props.item ? props.item.map((item) => (<Item key={item.id} title={item.title} images={item.images} price={item.price} brand={item.brand}/>)) : <ItemDemo />} */}
        {props.item ? props.item.map((item) => (<Item key={item.id} title={item.title} image={item.image} price={item.price} brand={item.brand}/>)) : <ItemDemo />}
    </Fragment>
  )
}

export default ItemList