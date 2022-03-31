import React,{Component}from 'react'
import Slides from '../Homepage/Slides'
import ca from '../../Css/Homepage/carousal.module.css'
class Carousal extends Component {
  constructor(props){
    super(props)

    this.myRef = React.createRef();
    this.scrollleft =   this.scrollleft.bind(this)
    this.scrollright = this.scrollright.bind(this)
    
    this.state = {
      slides : [],
      
    }

    this.getSlidesImages = this.getSlidesImages.bind(this)
  }

  async getSlidesImages(){
    const image = await fetch(`http://training.panorbitprojects.com/api/GetCarousalData/`)
    const resimage =await image.json()
    // console.log(resimage)
    return resimage
  }

  async componentDidMount(){
    const slides = await this.getSlidesImages()
    this.setState({slides:slides.data , name:'sdfds'})
  }
  
   scrollleft =  () =>{
    window.scrollBy({left:450,behavior:'smooth'})
      // console.log(this.myRef)

   }

   scrollright = () => {
    window.scrollBy({left:-350,behavior:'smooth'})
   }




  render() {
    // console.log(this.state.slides.length)
    return (
        <div className={ca.flexcontainer}>
          <div className={ca.slideContainer}>
            <div className={ca.slides} >
                {this.state.slides.length ? this.state.slides.map((data)=> <Slides img={data} ref={this.myRef} />) : null} 
            </div>
           <button onClick={this.scrollleft}   className={ca.left} ><span className="fa fa-arrow-left"></span></button>
           <button onClick={this.scrollright}  className={ca.right} ><span className="fas fa-arrow-right"></span></button>   
           </div>
        </div>
      
    )
  }
}


export default Carousal;



