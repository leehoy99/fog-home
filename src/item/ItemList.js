import React, { Fragment , useEffect} from 'react'
import Item from './Item'

function ItemList(props) {
    console.log(props.item)
  return (
    <div>
        {/* {props.item.map((item) => (<Item key={item.id} title={item} />))} */}
    </div>
  )
}

export default ItemList