import React, { Component } from 'react'
import lo from '../../Css/Restaurantsdetails/hotellocation.module.css'


class HotelLocation extends Component {
  render() {
    return (
      
        <div className={lo.subheaderlocation}>
            <div>
            <p className={lo.location}>Home/Bangalore/Residency Road/{this.props.location}</p>
            </div>
        </div>
    
    )
  }
}


export default HotelLocation;