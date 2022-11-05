import React, { Fragment, useEffect, useState } from 'react';
import '../css/menuExtend.css'

const MenuExtendGnb1 = (props) => {
    const [changeClass, setChangeClass] = useState('');
    console.log(props.class)
    useEffect(() => {
        if(props.class) {
            setChangeClass('on')
        }else {
            setChangeClass('')
        }
    },[props])

    return (
        <Fragment>
            <div className={"extend-box extend-box-1 " + changeClass}>
            <div className="extend">
                <div className="nav-gnb-ex">
                <h4><a href='/'>SHOP</a></h4>
                <ul>
                    <li><a href='/'>NEW RELEASES</a></li>
                    <li><a href='/'>SUITING</a></li>
                    <li><a href='/'>OUTERWEAR</a></li>
                    <li><a href='/'>KNITWEAR</a></li>
                    <li><a href='/'>TOPS</a></li>
                    <li><a href='/'>BOTTOMS</a></li>
                    <li><a href='/'>LOUNGEWEAR</a></li>
                    <li><a href='/'>FOOTWEAR</a></li>
                    <li><a href='/'>ACCESSORIES</a></li>
                    <li>&nbsp;</li>
                    <li><a href='/'>SHOP ALL</a></li>
                </ul>
                </div>
                <div className="nav-gnb-ex">
                <h4><a href='/'>ETERNAL COLLECTION</a></h4>
                <ul>
                    <li><a href='/'>OVERVIEW</a></li>
                    <li><a href='/'>FILM</a></li>
                    <li><a href='/'>LOOKS</a></li>
                </ul>
                <h4><a href='/'>COLLECTION</a></h4>
                <ul>
                    <li><a href='/'>SHOP</a></li>
                    <li><a href='/'>COLLECTION OVERVIEW</a></li>
                    <li><a href='/'>FILM</a></li>
                    <li><a href='/'>CAMPAIGN</a></li>
                    <li><a href='/'>LOOKS</a></li>
                </ul>
                </div>
                <div className="nav-gnb-ex">
                <h4><a href='/'>FEAR OF GOD HOME</a></h4>
                <ul>
                    <li><a href='/'>SHOP LOUNGEWEAR</a></li>
                    <li><a href='/'>FILM</a></li>
                    <li><a href='/'>CAMPAIGN</a></li>
                    <li><a href='/'>LOOKS</a></li>
                </ul>
                </div>
            </div>
            </div>

        </Fragment>
    );
}

export default MenuExtendGnb1;
