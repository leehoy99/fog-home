import React, { Fragment } from 'react'
import ItemDemo from './ItemDemo'
import Item from './Item'

function ItemList(props) {
    console.log(props.itemData)
    const filterItem = () => {
      return props.itemData.filter((el) => el.id <= 12)
    }
    if(props.itemData) {
      filterItem()
    } else {
      return
    }
  return (
    <Fragment>
        {/* {props.item ? props.item.map((item) => (<Item key={item.id} title={item.title} images={item.images} price={item.price} brand={item.brand}/>)) : <ItemDemo />} */}
        {props.itemData? props.itemData.map((item) => (<Item key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} brand={item.brand}/>)) : <ItemDemo />}
    </Fragment>
  )
}

export default ItemList