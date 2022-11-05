import React, { Fragment, useState, useEffect } from 'react'
import Nav from '../ui/Nav'
import '../css/shop.css'
import Bag from '../bag/Bag';
import Bottom from '../ui/Bottom';
import ItemList from '../item/ItemList';

function Shop() {

    const [display, setDisplay] = useState('');
    const [item, setItem] = useState('')
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


    useEffect(() => {
        const fetchItemData = async () => {
            const res = await fetch("https://fakestoreapi.com/products");
            const json = await res.json();
            // if(json !== null){
            //     setItem(json.products)
            // } else {
            //     console.log('no data')
            // }
            // const transformedItem = await json.products.map((itemData) => {
            //     return {
            //         id: itemData.id,
            //         titel: itemData.title
            //     }
            const transformedItem = await json;
            setItem(transformedItem)
        }
        // const fetchItemData = async () => {
        //     const res = await fetch('https://dummyjson.com/products');
        //     const json = await res.json();
        //     // if(json !== null){
        //     //     setItem(json.products)
        //     // } else {
        //     //     console.log('no data')
        //     // }
        //     // const transformedItem = await json.products.map((itemData) => {
        //     //     return {
        //     //         id: itemData.id,
        //     //         titel: itemData.title
        //     //     }
        //     const transformedItem = await json.products;
        //     setItem(transformedItem)
        // }
        fetchItemData();
    },[])

  return (
    <Fragment>
        <Nav value={display} getDis={getDis} getBlur={getBlur}/>
        <div className={"shop-container " + blur}>
            <section className="filter-section">
                <p className="cartegory">ALL<span className="arrow" /></p>
                <p className="filter">FILTER<span className="cross-minus" /></p>
            </section>
            <section className='items'>
                <ItemList item={item}></ItemList>
            </section>
            <section className="page">
                <span className="left-arrow">←</span>
                <p>1</p>
                <p>2</p>
                <span className="right-arrow">→</span>
            </section>
        </div>
        <Bag value={display}/>
        <Bottom />
    </Fragment>
  )
}

export default Shop;
