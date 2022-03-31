import React, { Component } from 'react'
import sl from "../../Css/Homepage/carousal.module.css"

class Slides extends Component {
  render() {
    //   console.log(this.props.img.title)
    return (
    
            <div>
                        <img className={sl.topimage} src={this.props.img.backgroundImage} alt="images"/>
                        <p className={sl.imagetitle}>{this.props.img.title}</p>
                 
             </div>
    )
  }
}


export default Slides;