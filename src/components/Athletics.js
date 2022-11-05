import React, { Fragment, useState, useEffect } from 'react'
import Bag from '../bag/Bag'
import Nav from '../ui/Nav'
import Bottom from '../ui/Bottom'
import '../css/athletics.css'



function Athletics() {
    const [display, setDisplay] = useState('');
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



  return (
    <Fragment>
        <Nav value={display} getDis={getDis} getBlur={getBlur}/>
        <div class={"ath-container " + blur}>
            <section className="athletics">
                <div className="athletics-text">
                <p>Adidas officially announces its long-term partnership with Fear of God, led by owner and founder Jerry Lorenzo. With this groundbreaking partnership, Lorenzo will drive the creative and business strategy for adidas basketball globally. The alliance challenges and exists beyond traditional collaboration –– and is the truest and most honest form of both personal and business relationship. The partnership will also solidify the establishment and formation of the third pillar of the Fear of God house, Fear of God Athletics. The new pillar will focus on performance basketball and active lifestyle products that complete Fear of God’s triune nature and compliments the brand's other two pillars, Essentials and Fear of God’s luxury mainline.<br /><br />
                    “This is a role that is unprecedented in its very nature and nuanced attribution that it defies all titles and traditional definitions. This is a fearless move where shared vision and conviction are at the heart of the accretion of two brands shaping sports and culture, with the purpose to truly multiply our nuanced strengths to revolutionize the performance basketball industry forever.” says Jerry Lorenzo of Fear of God. “adidas and Fear of God share the same dream for the future of basketball, on and beyond the court, and we look forward to changing the face of the industry through a new model that will unfold before us in the coming years.”<br /><br />
                    “The global impact that Jerry Lorenzo and Fear of God has had on culture and the industry is undeniable. Jerry is a creative visionary and embodies a true expression of the entrepreneurial spirit today.” says Brian Grevy, adidas Executive Board Member responsible for Global Brands. “Jerry’s authentic connection to sport, deep understanding of the past and ability to reinterpret heritage excites us. We look forward to working with him to inspire the next generation of basketball creatives, athletes and communities.”<br /><br />
                    Jerry Lorenzo is synonymous with Los Angeles, where the game of basketball intersects with the culture that surrounds it. Together the partnership will celebrate collaboration, creativity, and legacy in sport.</p>
                </div>
                <div className="athletics-img">
                    <img src="/images/05.jpg" alt='/' />
                </div>
            </section>
        </div>
        <Bottom />
        <Bag value={display}/>
    </Fragment>
  )
}

export default Athletics