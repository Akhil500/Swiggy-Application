import React, { Component } from 'react'
import na from '../../Css/Restaurantsdetails/hotelname.module.css'


class HotelName extends Component {
  render() {
    return (
      
      
            <div className={na.heading}>
            <div className={na.headingsub}>
                    <div className={na.imagediv}>
                        <img src={this.props.resturant.image} alt="" className={na.imageheading} />
                    </div>
                    <div className={na.hotelheading}>
                        <p className={na.hotelname}>{this.props.resturant.name}</p>
                        <p className={na.hoteltype}>South Indian, North Indian</p>
                        <p className={na.hoteladdress}>{this.props.resturant.address} </p>
                        
                        <div className={na.duration}>
                            <div className={na.durationsub}>
                                <div className={na.durationrating}>
                                    <span className="far fa-star"> {this.props.resturant.rating}</span>
                                    <span className={na.rating}> {this.props.resturant.ratingCount}</span>
                                </div>
                                <div className={na.durationminutes}>
                                    <span>{this.props.resturant.deliveryTime}</span>
                                    <span className={na.rating}>Delivery Time</span>
                                </div>
                                <div className={na.durationrupee}>
                                    <span>{this.props.resturant.costForTwo}</span>
                                    <span className={na.rating}>Cost for two</span>
                                </div> 
                            </div>                   
                        </div>
                        <div className={na.inputbox}>
                               <span className=""><input type="text" className={na.searchdishes} placeholder="search for dishes" /></span> 
                                <button className={na.vegornonveg}><span className="fas fa-leaf" style={{color:"green"}}></span> Pure Veg</button>
                                <button className={na.favourite}><span className="far fa-heart"></span> Favourite</button>
                                
                        </div>
                    </div>
                
                    <div className={na.offers}>
                        <span className={na.offerstitle}>OFFER</span>
                            <p className={na.hoteloffer}>{this.props.resturant.offer}</p>
                            <p className={na.hoteloffer}>20% off up to ₹125 | Use KOTAK125 Above ₹500</p>
                    </div>
                </div>
        </div>
            
      
      
      
      
    )
  }
}



export default HotelName;
