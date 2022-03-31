import React, { Component } from 'react'
// import '../Homepage/'
import sh from '../../Css/Homepage/second-header.module.css';

class SecondMenu extends Component {
  render() {
    return (
        <>
           <div className={sh.subheader} id="sub-header">
                <div className={sh.subheaderleft}>
                    <p>1588 Restaurants</p>
                </div>
                <div className={sh.subheaderright}>
                    <span href="/" className={sh.navigaotr}>Relevance</span>
                    <span href="/" className={sh.navigaotr}>Delivery Time</span>
                    <span href="/" className={sh.navigaotr}>Rating</span>
                    <span href="/" className={sh.navigaotr}>Cost:Low To High</span>
                    <span href="/" className={sh.navigaotr}>Cost:High To Low</span>
                    <span href="/" className={sh.navigaotr}><span className="fas fa-filter" ></span>  Filters</span>
                </div>
            </div>  <hr className={sh.line}></hr>
        </>
    )
  }
}

export default SecondMenu;
