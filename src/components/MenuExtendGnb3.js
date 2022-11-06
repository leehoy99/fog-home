import React, { Fragment, useEffect, useState,} from 'react';
import '../css/menuExtend.css'

const MenuExtendGnb3 = (props) => {
    const [changeClass, setChangeClass] = useState('');
    useEffect(() => {
        if(props.class) {
            setChangeClass('on')
        }else {
            setChangeClass('')
        }
    },[props.class])

    return (
        <Fragment>
            <div className={"extend-box extend-box-3 " + changeClass}>
            <div className="extend">
                <div className="nav-gnb-ex">
                <h4><a href ='/'>SHOP MENS</a></h4>
                <ul>
                    <li><a href ='/'>TOPS</a></li>
                    <li><a href ='/'>BOTTOMS</a></li>
                    <li><a href ='/'>KNITWEAR</a></li>
                    <li><a href ='/'>FOOTWEAR</a></li>
                    <li><a href ='/'>HATS</a></li>
                    <li>&nbsp;</li>
                    <li><a href ='/'>SHOP ALL</a></li>
                </ul>
                </div>
                <div className="nav-gnb-ex">
                <h4 className="nav-ex-M-tit-1"><a href ='/'>SHOP WOMENS</a></h4>
                <ul>
                    <li><a href ='/'>TOPS</a></li>
                    <li><a href ='/'>BOTTOMS</a></li>
                    <li><a href ='/'>DRESS &amp; SKIRTS</a></li>
                    <li><a href ='/'>&nbsp;</a></li>
                    <li><a href ='/'>SHOP ALL</a></li>
                </ul>
                <h4 className="nav-ex-M-tit-2"><a href ='/'>SHOP KIDS</a></h4>
                <ul>
                    <li><a href ='/'>TOPS</a></li>
                    <li><a href ='/'>BOTTOMS</a></li>
                    <li><a href ='/'>&nbsp;</a></li>
                    <li><a href ='/'>SHOP ALL</a></li>
                </ul>
                </div>
                <div className="nav-gnb-ex">
                <h4><a href ='/'>SPRING 2022 COLLECTION</a></h4>
                <ul>
                    <li><a href ='/'>OVERVIEW</a></li>
                    <li><a href ='/'>CAMPAIGN</a></li>
                    <li><a href ='/'>KIDS CAMPAIGN</a></li>
                    <li><a href ='/'>SHOP</a></li>
                </ul>
                <h4><a href ='/'>CORE COLLECTION</a></h4>
                <ul>
                    <li><a href ='/'>CAMPAIGN</a></li>
                    <li>&nbsp;</li>
                    <li><a href ='/'>SHOP ALL</a></li>
                    <li><a href ='/'>SHOP KIDS</a></li>
                </ul>
                </div>
            </div>
            </div>
        </Fragment>
    );
}

export default MenuExtendGnb3;
