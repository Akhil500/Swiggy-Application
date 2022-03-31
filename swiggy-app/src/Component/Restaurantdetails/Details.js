import React, { Component } from 'react'
import de from'../../Css/Restaurantsdetails/hoteldetails.module.css'



 class Details extends Component {
  render() {
    //   console.log(this.props.det)
    return (
        


                    <div className={de.itemdetails} id={this.props.det.Type}>
                        <div className={de.singleitem}>
                            <p className={de.foodtype}>{this.props.det.Type}</p>
                            {/* <img src="/images/veg-img.png" alt="veg-logo" className={de.veglogo}/> */}
                            <p className={de.foodname}>{this.props.det.name}</p>
                            <p className={de.foodprice}>₹ {this.props.det.price}</p>
                            <p className={de.foodtext}>{this.props.det.details}</p>
                            <img src={this.props.det.image} alt="food-image" className={de.foodimage} />
                            <button className={de.addtocartbtn}> <span className="fas fa-plus"></span> ADD  <span className="fas fa-minus"></span> </button>   
                            </div>      <hr className={de.linehr}></hr>          
                    </div>
           
 
    
    )
  }
}


export default Details;
