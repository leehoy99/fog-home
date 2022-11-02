import React, { Fragment } from 'react'
import '../css/navExtend.css'

function NavExtend({props}) {

    console.log(props)

  return (
    <Fragment>
        {/* gnb1(fear of god) 클릭시 확장 */}
        <div class="top-gnb1-extand-box">
            <div class="nav-gnb1_extand nav-ex">
                <div class="nav-gnb1-ex-L">
                    <h4><a href="/">SHOP</a></h4>
                    <ul>
                        <li><a href="/">NEW RELEASES</a></li>
                        <li><a href="/">SUITING</a></li>
                        <li><a href="/">OUTERWEAR</a></li>
                        <li><a href="/">KNITWEAR</a></li>
                        <li><a href="/">TOPS</a></li>
                        <li><a href="/">BOTTOMS</a></li>
                        <li><a href="/">LOUNGEWEAR</a></li>
                        <li><a href="/">FOOTWEAR</a></li>
                        <li><a href="/">ACCESSORIES</a></li>
                        <li>&nbsp;</li>
                        <li><a href="/">SHOP ALL</a></li>
                    </ul>
                </div>
                <div class="nav-gnb1-ex-M">
                    <h4><a href="/">ETERNAL COLLECTION</a></h4>
                    <ul>
                        <li><a href="/">OVERVIEW</a></li>
                        <li><a href="/">FILM</a></li>
                        <li><a href="/">LOOKS</a></li>
                    </ul>
                    <h4><a href="/">COLLECTION</a></h4>
                    <ul>
                        <li><a href="/">SHOP</a></li>
                        <li><a href="/">COLLECTION OVERVIEW</a></li>
                        <li><a href="/">FILM</a></li>
                        <li><a href="/">CAMPAIGN</a></li>
                        <li><a href="/">LOOKS</a></li>
                    </ul>
                </div>
                <div class="nav-gnb1-ex-R">
                    <h4><a href="/">FEAR OF GOD HOME</a></h4>
                    <ul>
                        <li><a href="/">SHOP LOUNGEWEAR</a></li>
                        <li><a href="/">FILM</a></li>
                        <li><a href="/">CAMPAIGN</a></li>
                        <li><a href="/">LOOKS</a></li>
                    </ul>
                </div>
            </div>
        </div>
        {/* gnb3(essentials)클릭시 확장 */}
        <div class="top-gnb3-extand-box">
            <div class="nav-gnb3_extand nav-ex">
                <div class="nav-gnb3-ex-L">
                    <h4><a href="/">SHOP MENS</a></h4>
                    <ul>
                        <li><a href="/">TOPS</a></li>
                        <li><a href="/">BOTTOMS</a></li>
                        <li><a href="/">KNITWEAR</a></li>
                        <li><a href="/">FOOTWEAR</a></li>
                        <li><a href="/">HATS</a></li>
                        <li>&nbsp;</li>
                        <li><a href="/">SHOP ALL</a></li>
                    </ul>
                </div>
                <div class="nav-gnb3-ex-M">
                    <h4 class="nav-ex-M-tit-1"><a href="/">SHOP WOMENS</a></h4>
                    <ul>
                        <li><a href="/">TOPS</a></li>
                        <li><a href="/">BOTTOMS</a></li>
                        <li><a href="/">DRESS & SKIRTS</a></li>
                        <li><a href="/">&nbsp;</a></li>
                        <li><a href="/">SHOP ALL</a></li>
                    </ul>
                    <h4 class="nav-ex-M-tit-2"><a href="/">SHOP KIDS</a></h4>
                    <ul>
                        <li><a href="/">TOPS</a></li>
                        <li><a href="/">BOTTOMS</a></li>
                        <li><a href="/">&nbsp;</a></li>
                        <li><a href="/">SHOP ALL</a></li>
                    </ul>
                </div>
                <div class="nav-gnb3-ex-R">
                    <h4><a href="/">SPRING 2022 COLLECTION</a></h4>
                    <ul>
                        <li><a href="/">OVERVIEW</a></li>
                        <li><a href="/">CAMPAIGN</a></li>
                        <li><a href="/">KIDS CAMPAIGN</a></li>
                        <li><a href="/">SHOP</a></li>
                    </ul>
                    <h4><a href="/">CORE COLLECTION</a></h4>
                    <ul>
                        <li><a href="/">CAMPAIGN</a></li>
                        <li>&nbsp;</li>
                        <li><a href="/">SHOP ALL</a></li>
                        <li><a href="/">SHOP KIDS</a></li>
                    </ul>
                </div>
            </div>
        </div>
        {/* search 확장 */}
        <div class="top-gnb4-extand-react-box">
            <span class="search-box">
                <label for="nav-search">
                    <input type="text" name="nav-search" placeholder="ENTER KEYWORD" id="nav-search" />
                </label>
            </span>
        </div>
        {/* 반응형 search 클릭시 확장 */}
        <div class="top-gnb4-extand-box">
            <div class="nav-gnb4_extand nav-ex">
                <span class="search">
                    <label for="nav-search">
                        <input type="text" name="nav-search" placeholder="ENTER KEYWORD" id="nav-search" />
                    </label>
                </span>
            </div>
        </div>
        {/* 반응형 아래 nav 왼쪽(fear of god) */}
        <div class="bottom-gnb1-extand-box">
            <div class="nav-bottom-gnb1_extand nav-ex">
                <div class="nav-gnb1-ex">
                    <h4><a href="/">SHOP</a></h4>
                    <ul>
                        <li><a href="/">NEW RELEASES</a></li>
                        <li><a href="/">SUITING</a></li>
                        <li><a href="/">OUTERWEAR</a></li>
                        <li><a href="/">KNITWEAR</a></li>
                        <li><a href="/">TOPS</a></li>
                        <li><a href="/">BOTTOMS</a></li>
                        <li><a href="/">LOUNGEWEAR</a></li>
                        <li><a href="/">FOOTWEAR</a></li>
                        <li><a href="/">ACCESSORIES</a></li>
                        <li>&nbsp;</li>
                        <li><a href="/">SHOP ALL</a></li>
                    </ul>
                    <h4><a href="/">ETERNAL COLLECTION</a></h4>
                    <ul>
                        <li><a href="/">OVERVIEW</a></li>
                        <li><a href="/">FILM</a></li>
                        <li><a href="/">LOOKS</a></li>
                    </ul>
                    <h4><a href="/">COLLECTION</a></h4>
                    <ul>
                        <li><a href="/">SHOP</a></li>
                        <li><a href="/">COLLECTION OVERVIEW</a></li>
                        <li><a href="/">FILM</a></li>
                        <li><a href="/">CAMPAIGN</a></li>
                        <li><a href="/">LOOKS</a></li>
                    </ul>
                    <h4><a href="/">FEAR OF GOD HOME</a></h4>
                    <ul>
                        <li><a href="/">SHOP LOUNGEWEAR</a></li>
                        <li><a href="/">FILM</a></li>
                        <li><a href="/">CAMPAIGN</a></li>
                        <li><a href="/">LOOKS</a></li>
                    </ul>
                </div>
            </div>
        </div>
        {/* 반응형 아래 nav 오른쪽 (essentials) */}
        <div class="bottom-gnb3-extand-box">
            <div class="nav-bottom-gnb3_extand nav-ex">
            <div class="nav-gnb3-ex">
                <h4><a href="/">SHOP MENS</a></h4>
                <ul>
                    <li><a href="/">TOPS</a></li>
                    <li><a href="/">BOTTOMS</a></li>
                    <li><a href="/">KNITWEAR</a></li>
                    <li><a href="/">FOOTWEAR</a></li>
                    <li><a href="/">HATS</a></li>
                    <li>&nbsp;</li>
                    <li><a href="/">SHOP ALL</a></li>
                </ul>
                <h4><a href="/">SHOP WOMENS</a></h4>
                <ul>
                    <li><a href="/">TOPS</a></li>
                    <li><a href="/">BOTTOMS</a></li>
                    <li><a href="/">DRESS & SKIRTS</a></li>
                    <li>&nbsp;</li>
                    <li><a href="/">SHOP ALL</a></li>
                </ul>
                <h4><a href="/">SHOP KIDS</a></h4>
                <ul>
                    <li><a href="/">TOPS</a></li>
                    <li><a href="/">BOTTOMS</a></li>
                    <li>&nbsp;</li>
                    <li><a href="/">SHOP ALL</a></li>
                </ul>
                <h4><a href="/">SPRING 2022 COLLECTION</a></h4>
                <ul>
                    <li><a href="/">OVERVIEW</a></li>
                    <li><a href="/">CAMPAIGN</a></li>
                    <li><a href="/">KIDS CAMPAIGN</a></li>
                </ul>
                    <li><a href="/">SHOP</a></li>
                <h4><a href="/">CORE COLLECTION</a></h4>
                <ul>
                    <li><a href="/">CAMPAIGN</a></li>
                    <li>&nbsp;</li>
                    <li><a href="/">SHOP ALL</a></li>
                    <li><a href="/">SHOP KIDS</a></li>
                </ul>
            </div>
        </div>
    </div>
    </Fragment>
  )
}

export default NavExtend