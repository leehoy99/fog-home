import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../css/detail.css'
import RecomendItem from '../item/RecomendItem';

function Detail(props) {

    const { id } = useParams();
    const [product,setProduct] = useState([])
    const [recomendProduct,setRecomendProduct] = useState('')

    useEffect(() => {
        const getProduct = async () => {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          setProduct(await response.json())
        };
        getProduct();
    }, [id]);
    const category = product.category
    useEffect(() => {
        const getRecomendProduct = async () => {
          const response = await fetch(`https://fakestoreapi.com/products/category/${category}?limit=4`);
          setRecomendProduct(await response.json())
        };
        getRecomendProduct();
    }, [category]);
    


    const addCart = useCallback(
      () => {
        props.getProd(product)
      },
      [props, product],
    )
    

    const [blur, setBlur] = useState('');
    useEffect(() => {
        setBlur(props.blur)
    },[props.blur])
    return (
    <Fragment>
    <div className={'detail-container ' + blur}>
        <section className="section1">
            <div className="item-img">
            <img src={product.image} alt='/' />
            <img src={product.image} alt='/' />
            <img src={product.image} alt='/' />
            <img src={product.image} alt='/' />
            <img src={product.image} alt='/' />
            <img src={product.image} alt='/' />
            {/* <img src="/images/bag-img.webp" alt='/' />
            <img src="/images/bag-img.webp" alt='/' />
            <img src="/images/bag-img.webp" alt='/' />
            <img src="/images/bag-img.webp" alt='/' />
            <img src="/images/bag-img.webp" alt='/' /> */}
            </div>
            <div className="item-info">
            <p className="item-brand">ESSENTIALS</p>
            <p className="item-name">{product.title}</p>
            <p className="item-price">${product.price}</p>
            <p className="item-shipping-info">₩470,200 이상에 해당하는 모든 주문은 KOREA (SOUTH)까지 무료 배송해 드립니다</p>
            <div className="item-size-contents">
                <div className="item-color">
                Default
                </div>
                <div className="item-size">
                Default Size
                <div className="item-size-select">
                    <div className="item-size-select-btn">n</div>
                    <div className="item-size-select-btn">n</div>
                    <div className="item-size-select-btn">n</div>
                    <div className="item-size-select-btn">n</div>
                    <div className="item-size-select-btn">n</div>
                    <div className="item-size-select-btn">n</div>
                    <div className="item-size-select-btn">n</div>
                    <div className="item-size-select-btn">n</div>
                </div>
                </div>
            </div>
            <div className="item-more-info">
                <p className="more-color-btn">MORE COLORS</p>
                <p className="size-chart-btn">SIZE CHART</p>
            </div>
            <div className="item-shipping" onClick={addCart}>
                <p>ADD TO CART</p>
            </div>
            <p className="item-paragraph">
                The Full-Zip Baseball Jersey is a salute to the fit and texture of a vintage baseball jersey. The traditional 100% woolen construction with navy felt lettering provides an authentic vintage look and feel. The bold FG lettering on the front is a nod to the KC Monarchs jersey, and the number 7 on the back acknowledges the Seventh Collection. A hidden front zipper placket is a modern update to the classic.
            </p>
            <p className="item-sale-info">
                ALL SALES OF THIS ITEM ARE FINAL.
            </p>
            <div className="item-details-toggle item-toggle">
                <p>DETAILS<span className="toggle-cross">+</span></p>
                <input type="checkbox" id="detail" />
                <div className="detail-toggle-text toggle-text">
                <ul>
                    <li>RELAXED FIT</li>
                    <li>COVERED PLACKET</li>
                    <li>DEBOSSED BRANDED VELCRO</li>
                    <li>HORN BUTTONS</li>
                    <li>SIDE SEAM POCKETS</li>
                    <li>LEATHER FEAR OF GOD LABEL</li>
                    <li>ITALIAN IRIDESCENT NYLON</li>
                    <li>MADE IN ITALY</li>
                    <li>MODEL IS 6FT 2IN AND WEARING A SIZE 48</li>
                </ul>
                </div>
            </div>
            <div className="item-shippingPolicy-toggle item-toggle">
                <p>SHIPPING POLICY<span className="toggle-cross">+</span></p>
                <input type="checkbox" id="shipping" />
                <div className="shipping-toggle-text toggle-text">
                <ul>
                    <li>FEAR OF GOD OFFERS FREE STANDARD GROUND SHIPPING FOR ALL FULL PRICE MAINLINE ORDERS SHIPPING WITHIN THE UNITED STATES.</li>
                    <li>READ OUR FULL SHIPPING POLICY HERE.</li>
                </ul>
                </div>
            </div>
            <div className="item-share-toggle item-toggle">
                <p>SHARE<span className="toggle-cross">+</span></p>
                <input type="checkbox" id="share" />
                <div className="share-toggle-text toggle-text">
                <ul>
                    <li><a href="https://www.facebook.com/profile.php?id=100044264567702">FACEBOOK</a></li>
                    <li><a href="https://twitter.com/fearofgod">TWITTER</a></li>
                    <li><a href="mailto:?subject=FEAR OF GOD&body=https://fearofgod.com">EMAIL</a></li>
                </ul>
                </div>
            </div>
            </div>
        </section>
        <section className="section2">
            <p>YOU MAY ALSO LIKE</p>
            <div className="items">
                {recomendProduct ? recomendProduct.map((item) => (<RecomendItem key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} brand={item.brand}/>)) : <></>} 
            {/* <div className="item">
                <div className="img-box">
                <Link to='/shop/detail'><img src="/images/bag-img.webp" alt='/' /></Link>
                </div>
                <div className="paragraph-box">
                <Link to='/shop/detail'>
                    <p className="brand">FEAR OF GOD</p>
                    <p className="cloth">Full Zip Baseball Jersey</p>
                    <p className="price">₩976,200</p>
                </Link>
                </div>
            </div>
            <div className="item">
                <div className="img-box">
                <Link to='/shop/detail'><img src="/images/bag-img.webp" alt='/' /></Link>
                </div>
                <div className="paragraph-box">
                <Link to='/shop/detail'>
                    <p className="brand">FEAR OF GOD</p>
                    <p className="cloth">Full Zip Baseball Jersey</p>
                    <p className="price">₩976,200</p>
                </Link>
                </div>
            </div>
            <div className="item">
                <div className="img-box">
                <Link to='/shop/detail'><img src="/images/bag-img.webp" alt='/' /></Link>
                </div>
                <div className="paragraph-box">
                <Link to='/shop/detail'>
                    <p className="brand">FEAR OF GOD</p>
                    <p className="cloth">Full Zip Baseball Jersey</p>
                    <p className="price">₩976,200</p>
                </Link>
                </div>
            </div>
            <div className="item">
                <div className="img-box">
                <Link to='/shop/detail'><img src="/images/bag-img.webp" alt='/' /></Link>
                </div>
                <div className="paragraph-box">
                <Link to='/shop/detail'>
                    <p className="brand">FEAR OF GOD</p>
                    <p className="cloth">Full Zip Baseball Jersey</p>
                    <p className="price">₩976,200</p>
                </Link>
                </div>
            </div> */}
            </div>
        </section>
    </div>
    </Fragment>
  )
}

export default Detail