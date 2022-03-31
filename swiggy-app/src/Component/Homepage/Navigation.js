import React, { Component } from 'react'
import na from '../../Css/Homepage/header-first.module.css'
import { Link }  from 'react-router-dom'
 


class Navigation extends Component {
    
  render() {
      
    return (
        <>
            <div className={na.header} id="header"> 
                    <div className={na.headerleft}>
                         <Link to="/" ><img src="/images/swiggy-1.svg"  alt="swiggy-logo" width="50px" height="50px"/></Link>
                            <p className={na.headerleftname}>Other</p>
                            <p className={na.headerleftplace}>Bengaluru, Karnataka, India</p>
                    </div>
                    <div className={na.headerright}>
                        <nav>
                          
                            <Link to='/' className={na.headerrightnav}><span className="fas fa-search" style={{margin:"0px 10px 0px 20px"}}></span>Search</Link>
                            <Link to='/'className={na.headerrightnav}><span className="fas fa-percent" style={{margin:"0px 10px 0px 20px"}}></span>Offers<sup style={{color: "#ffa700",padding: "0px 0px 0px 4px",size:"10px",weight:"600"}}>NEW</sup></Link>
                            <Link to='/' className={na.headerrightnav}><span className="fas fa-life-ring" style={{margin:"0px 10px 0px 20px"}}></span>Help</Link>
                            <Link to='/' className={na.headerrightnav}><span className="fas fa-user" style={{margin:"0px 10px 0px 20px"}}></span>Signin</Link>
                            <Link to='/' className={na.headerrightnav}><span className="fas fa-cart-arrow-down" style={{margin:"0px 10px 0px 20px"}}></span>Cart</Link>
                        
                        </nav>
                    </div>
            </div>
        </>
    )
  }
}

export default Navigation;