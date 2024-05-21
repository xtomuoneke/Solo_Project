const imageContainerEl = document.querySelector('.image-container');

const prevEl = document.getElementById('prev');
const nextEl = document.getElementById('next');

let x = 0;
//create a variable to reset the timeout
let timer;
prevEl.addEventListener('click', () => {
    x = x + 90;
    clearTimeout(timer);
    updateGallery();
  
});
nextEl.addEventListener('click', () => {
    x = x - 90;
    clearTimeout(timer);
    updateGallery();
  
});


function updateGallery(){
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(()=>{
       x = x - 90;
       updateGallery(); 

    }, 2000);
}
updateGallery();
