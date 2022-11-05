import React, { Fragment, useEffect, useState } from 'react'
import '../css/blur.css'
function Blur(props) {
    const [style, setStyle] = useState('')
    useEffect(() => {
      setTimeout(() => {
        if(props.style) {
            setStyle('on')
        } else {
            setStyle('')
        }
      }, 5000);
    }, [props]);
  return (
    <Fragment className={style}></Fragment>
  )
}

export default Blur