import React, { Component } from 'react';
import Homepage from './Pages/Homepage';
import Navigation from './Component/Homepage/Navigation';
import RestaurantDetails from './Pages/RestaurantDetails';
import { Routes ,  Route }  from 'react-router-dom';
import PageNotFound from './Component/PageNotFound';

class App extends Component {
    render() {
        return (
            <>
            <Navigation/>
            <Routes>
                    <Route path="/*" element={<PageNotFound/>} /> 
                    <Route path="/" element={<Homepage />} />
                    <Route path="detail/:id" element={<RestaurantDetails/>} />
                   
                    
            </Routes>

            </>
        );
    }
}

export default App;