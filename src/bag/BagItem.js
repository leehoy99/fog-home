import React, { Fragment } from 'react';

const BagItem = () => {
    return (
        <Fragment>
            <div className="bag-item">
                <div className="img-box">
                    <img src="/Images/bag-img.webp" alt='/' />
                </div>
                <div className="info">
                    <p className="item-name">Baseball Tee</p>
                    <p className="sale-info">This item is final sale</p>
                    <p className="item-info">
                    <span className="item-color">
                        Cream Heather/Red 
                    </span>/ 
                    <span className="item-size">
                        XS
                    </span>
                    </p>
                    <p className="qty-text">Qty: <span className="qty">1</span></p>
                </div>
                <div className="price-info">
                        <p>₩<span className="item-price">484,000</span></p>
                        <p className="item-remove">
                        REMOVE
                        </p>
                </div>
            </div>
        </Fragment>
    );
}

export default BagItem;
