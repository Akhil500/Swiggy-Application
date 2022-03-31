let promotions = []

async function GetCarousalData(){

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const response = await fetch("http://training.panorbitprojects.com/api/GetCarousalData/", requestOptions);
    const responseJson = await response.json()

return responseJson.data

}  

GetCarousalData().then((data) =>{
    promotions.push(...data)
    displayPromotions()
})

function displayPromotions(){
  const flexContainer = document.querySelector('.slides')
  for(promotion of promotions){
      const div = document.createElement('div')
      const image= document.createElement('img')
      const text=document.createElement('p')
      text.classList.add('image-title')
      text.textContent=promotion.title
      image.classList.add('top-image')
      image.setAttribute('src',promotion.backgroundImage)
      div.appendChild(image)
      div.appendChild(text)
      flexContainer.appendChild(div)
      // console.log(promotion.title)
  }

  
}
let slide_image =0
let move =0

function moveimage(way){
  if(way === 'left'){
    slidess.style.transform = `translateX(${slide_image}px)`
    slidess.style.marginLeft = `${move}px`
    slidess.insertBeefore(slidess.lastElementChild , slidess.firstElementChild)

  }
  else{
    slidess.style.transform = `translateX(${slide_image}px)`
    setTimeout(() => {slidess.style.marginLeft = `${move}px`
    slidess.insertBeefore(slidess.lastElementChild , slidess.firstElementChild)
  },2000);

  }
}

leftscroll.onclick = () => {
  slidess.style.transition = 'transform .3s'
  slide_image += width
 move -= width
  moveimage('left')
}


rightscroll.onclick = () => {
  slidess.style.transition = 'transform .3s'
  slide_image -= width
  move += width
  moveimage('right')
}

// document.getElementById('buttonRight').addEventListener('click',()=>{
//   document.getElementById('slides').scrollBy({
//     // top:100,
//     left:350,
//     behavior:'smooth'    
//   })
// })
// document.getElementById('buttonLeft').addEventListener('click',()=>{
//   document.getElementById('slides').scrollBy({
//     // top:10,
//     left:-350,
//     behavior:'smooth'    
//   })
// })

