import React, { Fragment } from 'react';
import Bottom from '../ui/Bottom';
import Nav from '../ui/Nav';

const MenuExtendTest = () => {
    return (
        <Fragment>
            <Nav />
                <div className='container' style={{'height' : '1000px', 'width' : '100%', 'display' : 'flex', 'alignItems': 'center','backgroundColor': '#ccc'}}>
                    <p style={{'textAlign' : 'center', 'display' : 'block' ,'width': '100%'}}>this is extend test</p>
                </div>
            <Bottom />
        </Fragment>
    );
}

export default MenuExtendTest;
