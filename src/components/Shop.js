import React, { Fragment, useState, useEffect } from 'react'
import '../css/shop.css'
import ItemList from '../item/ItemList';

function Shop(props) {

    const [blur, setBlur] = useState('');
    useEffect(() => {
        setBlur(props.blur)
    },[props.blur])


  return (
    <Fragment>
        <div className={"shop-container " + blur}>
            <section className="filter-section">
                <p className="cartegory">ALL<span className="arrow" /></p>
                <p className="filter">FILTER<span className="cross-minus" /></p>
            </section>
            <section className='items'>
                <ItemList itemData={props.itemData}></ItemList>
            </section>
            <section className="page">
                <span className="left-arrow">←</span>
                <p>1</p>
                <p>2</p>
                <span className="right-arrow">→</span>
            </section>
        </div>
    </Fragment>
  )
}

export default Shop;
