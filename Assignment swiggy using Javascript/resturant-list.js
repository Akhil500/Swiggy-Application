const container = document.querySelector('.list-container');
// console.log(container)
const page=1
const limit=4
const URL = `http://training.panorbitprojects.com/api/RestaurantsList/?page=${page}&limit=${limit}`



function loadRestaurant(){

     fetch(`http://training.panorbitprojects.com/api/RestaurantsList/?page=${page}&limit=${limit}`)
    .then(response=>response.json())
    .then(data=>
      {
          //console.log(data.data.restaurants)
          data.data.restaurants.forEach(element => {
              //console.log(element)
              const div =  document.createElement('div');
              div.classList.add('list');
              div.innerHTML = `<img src=${element.image} alt="" class="list-image">
              <p class="title-name">${element.name}</p>
              <p class="sub-title">${element.address}</p>
              <p class="items"> ${element.items}</p>
              <p class="rating"> <span class="far fa-star">  ${element.rating}</span></p>
              <p class="time" >${element.deliveryTime}</p>
              <p class="cost-for">₹${element.costForTwo}</p>
              <p class="offer">${element.offer}</p>
              <p class="quick-view">Quick View</p>`
              // console.log(container)<p class="rating-count">${element.ratingCount}</p>
              container.appendChild(div);
    });
  });
    
}
   

loadRestaurant();

window.addEventListener('scroll',()=>{
    console.log("scrolled", window.scrollY) 
    console.log(window.innerHeight) 
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadRestaurant();
    }
})