import React, { Component } from 'react'
import Restaurant from '../Homepage/Restaurant'
import res from '../../Css/Homepage/restaurants.module.css'


class Restaurants extends Component {

  constructor(props){
    super(props)

    this.state = {
      list : [],
      page : 1,

    }

    this.getRestaurantList = this.getRestaurantList.bind(this)
  }

  async getRestaurantList(){
    const result = await fetch(`http://training.panorbitprojects.com/api/RestaurantsList/?page=${this.state.page}`)
    const data = await result.json()
    // console.log(data)
    return data
  }

    loop = async () => {
      const list = await this.getRestaurantList()
      this.setState( (prevstate) => ({list:prevstate.list.concat(...list.data.restaurants),page:prevstate.page+1}))
    }
     la = ()=>{
      if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
         this.loop()
      }}

  componentDidMount = () => {
    // const list = await this.getRestaurantList()
    // console.log(this.state.list)
    // this.setState({list:list.data.restaurants})
    this.loop()
    window.addEventListener('scroll',this.la)
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll',this.la)
  }

  render() {
    // console.log(this.state.list.data.id)
    return (
      <div className={res.listcontainer}>
          {this.state.list.length ? this.state.list.map( (data)=> <Restaurant hotel={data}/>) : null }
      </div>
    )
  }
}




export default Restaurants;

