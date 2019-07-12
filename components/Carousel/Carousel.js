/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(createCarousel());


function createCarousel() {
  // create elements
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const rightButton = document.createElement('div');

  // set classes
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');
  img1.classList.add('current-index');

  // create structure
  carousel.appendChild(leftButton);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightButton);

  // set content
  img1.setAttribute('src','./assets/carousel/mountains.jpeg');
  img2.setAttribute('src','./assets/carousel/computer.jpeg');
  img3.setAttribute('src','./assets/carousel/trees.jpeg');
  img4.setAttribute('src','./assets/carousel/turntable.jpeg');


  
  let currentSlide = 0;
  // add event listeners
  rightButton.addEventListener('click', images => {
    let imgArray = [];
    imgArray.push(img1,img2,img3,img4);
    for (let i = 0; i < imgArray.length; i++) {
      imgArray[i].classList.remove('current-index');
    }
    if (currentSlide < imgArray.length-1) {
      currentSlide += 1;
    }
    else {
      currentSlide = 0;
    }
    
    imgArray[currentSlide].classList.add('current-index');

  })
  
  return carousel;

}