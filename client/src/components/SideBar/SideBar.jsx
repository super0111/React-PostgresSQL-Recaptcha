import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import "./style.css";

const SideBarComponent = (props) => {
    // const [sideBarStatus, setSideBarStatus] = useState(false)

    // const openMenu = () => {
    //     setSideBarStatus(false)
    // }

    // const closeMenu = () => {
    //     setSideBarStatus(true)
    // }

    // return (
    //     <>
    //         <div className={sideBarStatus ? "left-hand-bar no-menu" : "left-hand-bar"}>
    //             <div className="menu-control">
    //                 <div className="square-menu" onClick={closeMenu}></div>
    //             </div>
    //             <div>
    //                 <div className="closed-menu" onClick={openMenu}>
    //                     <div className="vertical-text"> Menu </div>
    //                 </div>
    //                 <div className="left-hand-nav">
    //                     <div className="left-hand-nav-inner">
    //                         <ul>
    //                             <li>
    //                                 <h4>quotes</h4>
    //                                 <ul>
    //                                     <li>   <a target="_self" href="/futures/quotes/ZO*0/overview">Price Overview</a>   </li>
    //                                     <li>   <a target="_self" href="/futures/quotes/ZO*0/performance">Performance Report</a>   </li>
    //                                 </ul>
    //                             </li>
    //                             <li>
    //                                 <h4>charts</h4>
    //                                 <ul>
    //                                     <li>   <a target="_self" href="/futures/quotes/ZO*0/interactive-chart">Interactive Chart</a>   </li>
    //                                     <li>   <a target="_self" href="/futures/quotes/ZO*0/technical-chart">Snapshot Chart</a>   </li>
    //                                 </ul>
    //                             </li>

    //                             <li>
    //                                 <h4>technicals</h4>
    //                                 <ul>
    //                                     <li>   <a target="_self" href="">Trading Guide</a>   </li>
    //                                     <li>   <a target="_self" href="">Barchart Opinion</a>   </li>
    //                                     <li>   <a target="_self" href="">Trading Strategies</a></li>
    //                                     <li>   <a target="_self" href="">Technical Analysis</a>   </li>
    //                                     <li>   <a target="_self" href="">Trader's Cheat Sheet</a>   </li>
    //                                     <li>   <a target="_self" href="/historical">Price History</a>   </li>
    //                                     <li>   <a target="_self" href="">Historical Data</a>   </li>
    //                                 </ul>
    //                             </li>
    //                             <li>
    //                                 <h4>options</h4>
    //                                 <ul>
    //                                     <li>   <a target="_self" href="/">Options Prices</a>   </li>
    //                                     <li>   <a target="_self" href="">Volatility &amp; Greeks</a>   </li>
    //                                     <li> <Link to="/options/highvolume">High Volume Options</Link> </li>
    //                                     <li> <Link to="/options/marketoverview">Options Market Overview</Link> </li>
    //                                 </ul>
    //                             </li>
    //                             <li>
    //                                 <h4>spreads</h4>
    //                                 <ul>
    //                                     <li>   <a target="_self" href="">Futures Spreads</a>   </li>
    //                                     <li>   <a target="_self" href="">Synthetic Spreads</a>   </li>
    //                                 </ul>
    //                             </li>
    //                             <li>
    //                                 <h4>commodity info</h4>
    //                                 <ul>
    //                                     <li>   <a target="_self" href="">News &amp; Headlines</a>   </li>
    //                                     <li>   <a target="_self" href="">Comparison</a>   </li>
    //                                     <li>   <a target="_self" href="">Contract Specifications</a>   </li>
    //                                     <li>   <a target="_self" href="">Futures Prices</a>   </li>
    //                                     <li>   <a target="_self" href="">Historical Prices</a>   </li>
    //                                 </ul>
    //                             </li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div >
    //     </>
    // )

}

export default SideBarComponent;