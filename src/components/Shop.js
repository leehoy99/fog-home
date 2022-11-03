import React, { Fragment, useState, useEffect } from 'react'
import Nav from '../ui/Nav'
import '../css/shop.css'
import Bag from '../bag/Bag';
import Bottom from '../ui/Bottom';
import ItemList from '../item/ItemList';

function Shop() {

    // const [items, setItems] = useState();
    // const fetchItemHandler = async () =>  {
    //     const response = await fetch("https://fakestoreapi.com/products");
    //     const data =  await response.json();
    //     if(data !== undefined){
    //         setItems(data)
    //     }

    // }
    
    const [display, setDisplay] = useState('');
    const getDis = (display) => {
        setDisplay(display)
    };
    useEffect(() => {
        getDis();
    },[display])

    const [item, setItem] = useState('')

    useEffect(() => {
        const fetchItemData = async () => {
            const res = await fetch('https://dummyjson.com/products');
            const json = await res.json();
            // if(json !== null){
            //     setItem(json.products)
            // } else {
            //     console.log('no data')
            // }
            const transformedItem = await json.products.map((itemData) => {
                return {
                    id: itemData.id,
                    titel: itemData.title
                }
            });setItem(transformedItem)
        }
        fetchItemData();
    },[])
    
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         const fetchItemData = async () => {
    //             const res = await fetch('https://dummyjson.com/products');
    //             const json = await res.json();
    //             console.log(json);
    //             setData(json)
    //         }
    //         fetchItemData();
    //     }, 100)
    //     return clearInterval(timer)
    // }, [])

    // const [item, setItem] = useState([]);
    // function fetchItemHandler() {

    //     fetch("https://fakestoreapi.com/products").then((response) => {
    //     return response.json();
    //     })
    //     .then((data) => {
    //     const transformedItem = data.results.map((itemData) => {
    //     return {
    //         id: itemData.id,
    //         title: itemData.title,
    //         price: itemData.price,
    //         category: itemData.category,
    //         image: itemData.image,
    //         description: itemData.description,
    //     };
    //     });
    //     setItem(transformedItem)});
    //     console.log(item)
    // };
    // fetchItemHandler();


    // useEffect(() => {
    //     const fetchItemHandler = async () =>  {
    //         const response = await fetch("https://fakestoreapi.com/products");
    //         const data =  await response.json();
    //         console.log(data)
    //     }
    //     fetchItemHandler();
    // },[])
    
    //     fetch("https://fakestoreapi.com/products", {
    // method: "POST",
    // body: JSON.stringify({
    //     title: "test product",
    //     price: 13.5,
    //     description: "lorem ipsum set",
    //     image: "https://i.pravatar.cc",
    //     category: "electronic",
    // }),
    // })
    // .then((res) => res.json())
    // .then((json) => console.log(json));

  return (
    <Fragment>
        <div className="shop-container">
            <Nav value={display} getDis={getDis}/>
            <section className="filter-section">
                <p className="cartegory">ALL<span className="arrow" /></p>
                <p className="filter">FILTER<span className="cross-minus" /></p>
            </section>
            <ItemList item={item}></ItemList>
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
