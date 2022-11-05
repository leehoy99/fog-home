import React, { Fragment, useEffect, useState } from 'react'

function Search(props) {
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
        <div className={"search-box " + changeClass}>
            <div className='search'>
                <input type="text" name="nav-search" placeholder="ENTER KEYWORD" id="nav-search" />
            </div>
        </div>
    </Fragment>
  )
}

export default Search