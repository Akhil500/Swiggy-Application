import React, { Component } from 'react'
import de from'../../Css/Restaurantsdetails/hoteldetails.module.css'
import Details from './Details'



class HotelDetails extends Component {

   constructor(props){
       super(props)

       this.state = {
           hotel :[],
           varieties:[],
           count :0,
       }

       this.getDetailsHotel = this.getDetailsHotel.bind(this)
   }

   async getDetailsHotel(){
       const detail = await fetch(`http://training.panorbitprojects.com/api/Menu/`)
       const resdetail = await detail.json()
    //    console.log(resdetail)
       return resdetail
   }


   async componentDidMount(){
       const hotel = await this.getDetailsHotel()
       this.setState({hotel:hotel.data.menu,
                      varieties:hotel.data.varieties,
                      count:hotel.data.count})
   }
  render() {
    //   console.log(this.state.hotel.length)
    return (
            <div className={de.deatils}>
                  <div className={de.deatilssub}>

                        <div className={de.menu}>
                          <div className={de.submenulist}> 
                            <p>Menu List</p>
                               {this.state.varieties.length ? this.state.varieties.map((data) => <div  className={de.menulist}><a href={`#${data} `} className={de.hreflink} >{data}</a></div>) : null}
                                 
                          </div>
                        </div>
                
                        <div className={de.itemslist}>
                          <div className={de.itemlistdiv}>
                                <div className={de.itemslistsub}>
                                    <p className={de.Recommended}>Recommended</p>
                                    <p className={de.Recommendeditem}>
                                      {this.state.hotel.length ? this.state.count :null}                                 
                                    </p>
                                </div>
                
                                  {this.state.hotel.length ? this.state.hotel.map((data)=> <Details det={data} />) : null} 
                          </div>
                        </div>   
                  
                      <div className={de.cartorder}>
                        <div className={de.subcartorder}>
                          <p className={de.cartheading}>Cart Empty</p>
                          <img src="/images/Cart_empty_-_menu_2x_ejjkf2.jpg" alt="cart-image" className={de.cartimage}/>
                          <p className={de.carttext}>Good food is always cooking! Go ahead, order some yummy items from the menu.</p>
                        </div>
                      </div>
                  </div>
          </div>
    )
  }
}


export default HotelDetails;