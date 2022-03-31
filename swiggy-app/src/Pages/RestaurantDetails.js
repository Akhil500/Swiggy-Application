import React, { Component, useEffect,useState } from 'react'
import Navigation from '../Component/Homepage/Navigation';
import HotelDetails from '../Component/Restaurantdetails/HotelDetails';
import HotelLocation from '../Component/Restaurantdetails/HotelLocation';
import HotelName from '../Component/Restaurantdetails/HotelName';
import Details from '../Component/Restaurantdetails/Details';
import { useParams } from 'react-router-dom';


const   RestaurantDetails = () => {
  const parms = useParams();
  const [restaurantDetails,setRestaurantDetails] = useState({})
  

  const getRestaurantData = async (id) => {
      const response  = await fetch(`http://training.panorbitprojects.com/api/RestaurantDetails/?id=${id}`)
      const resJson = await response.json()
      // console.log(resJson.data)
      return resJson
  }


  useEffect(() => {
    getRestaurantData(parms.id).then(result => {
     setRestaurantDetails(result.data)
    })
  })
    return (
      <>
    
          <HotelLocation location={restaurantDetails.address}/>
          <HotelName resturant={restaurantDetails}/>
          <HotelDetails/>
          
          

      </>
    )
  
}



export default RestaurantDetails;
