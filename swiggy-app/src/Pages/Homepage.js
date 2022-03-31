import React, { Component } from 'react'
import Carousal from '../Component/Homepage/Carousal'
import SecondMenu from '../Component/Homepage/SecondMenu';
import Restaurants from '../Component/Homepage/Restaurants';
import '../Css/Homepage/header-first.module.css';

class Homepage extends Component {
  render() {
    return (
      <>
              
                <Carousal/>
                <SecondMenu/>
                <Restaurants/>
      
      </>
    )
  }
}

export default Homepage;