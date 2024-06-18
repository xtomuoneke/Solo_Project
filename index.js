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

// Codes for removing image flex.
// 
const transEl = document.querySelectorAll('.trans');
const optionContainerEl = document.querySelector('.option-container');
const navbarEl = document.querySelector('.navbar');
const snavbarEl = document.querySelector('.snavbar');
const mainFlexContainerEl = document.querySelector('.main-flex-container');
const containerBodyEl = document.querySelector('.container-body');


// Convert NodeList to Array
var transArray = Array.from(transEl);

// Iterate over each element in the transArray
transArray.forEach(element => {
    // Add event listener to each element
    var cancelEl;
    element.addEventListener('click', () => {
        optionContainerEl.innerHTML = `<div class="brand-container"> 
        <a class="bran" href="/index.html">doyenTech</a>
        <a href="/index.html"><i class="fa-solid fa-xmark"></i></a> 
      </div>
      <div class="opt-container">
        <h4>Welcome to doyenTech!</h4> 
        <ul> 
          <li>Want Schedule <strong>Personalized Request</strong> to Meet your Needs </li>
          <li>Want to Meet our Team of <strong>Experts</strong> for Expert Advice</li>
          <li>Want to <strong>Check</strong> and <strong>Register</strong> for Classes</li>
          <li>Want to Check our <strong>Available Courses</strong>, including <strong>Summer Programs</strong> to Register</li>
        </ul>
        <p>Please <strong>LOGIN</strong> to your dashboard, <strong>REGISTER</strong> or <strong>INQUIRE</strong> programs suited to you by clicking the appropriate button below</p>
        <div class="losi-container">
          <a href="./login.html">LOGIN</a>
          <a href="./signUp.html">REGISTER</a>
          <a href="./signUp.html">INQUIRE</a>
        </div>
      </div>`;
      navbarEl.classList.add('hide');
      snavbarEl.classList.add('hide');
      // containerBodyEl.classList.add('hide');
      optionContainerEl.style.width = '70%';
      optionContainerEl.style.height = '100vh'
      mainFlexContainerEl.style.background = `linear-gradient(black, darkblue, darkblue)`;
      
        // console.log(mainFlexContainerEl);
    });
});
console.log(containerBodyEl)

