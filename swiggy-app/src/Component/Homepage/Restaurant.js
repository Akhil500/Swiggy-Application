import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import re from '../../Css/Homepage/restaurants.module.css'

class Restaurant extends Component {

    
  render() {
    // console.log(this.props.hotel.id)
    return (

        
          
              <div className={re.list}>
                 <Link to={`detail/${this.props.hotel.id}`} className={re.classlink}>
                    <img src={this.props.hotel.image} alt="images" className={re.listimage} />
                    <p className={re.titlename}>{this.props.hotel.name}</p>
                    <p className={re.subtitle}>{this.props.hotel.address}</p>
                    <p className={re.items}>{this.props.hotel.items}</p>
                    <p className={re.rating}><span className="far fa-star">  {this.props.hotel.rating}</span></p>
                    <p className={re.time}>{this.props.hotel.deliveryTime}</p>
                    <p className={re.costfor}>{this.props.hotel.costForTwo}</p>
                    <p className={re.offer}>{this.props.hotel.offer}</p>
                    <p className={re.quickview} >Quick View</p>
                  </Link>
              </div>
          
        
       
    //   <div>{this.props.name.name}
    //   {this.props.name.image}
    //   {this.props.name.rating}
    //   {this.props.name.items}
    //   {this.props.name.name}</div>
      
    )
  }
}


export default Restaurant;