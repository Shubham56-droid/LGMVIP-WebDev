//  image rendering done

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;

  if (counter > 5) {
    counter = 1;
  }
}, 5000);

// video redendering done


let imgbase = document.querySelector(".img-base");
let videoView = document.querySelector(".video-view");
const videoproject = document.querySelector(".video-project");


document.querySelectorAll(".video-project img").forEach((vid)=>{

  vid.onclick =() =>{
    videoView.classList.add("active");
    document.querySelector('.video-view video').src = vid.getAttribute("data-target") ;
  }
});

function popupproject() {
  videoView.classList.remove("active");
}


// rendering  all  images  in  main-img  div  throught  box-img 
document.querySelectorAll(".box-img img").forEach((img)=>{

  img.onclick =() =>{
    document.querySelector('.main-img img').src = img.getAttribute('src') ;
  }
});



var signup  =  document.querySelector("#signup");
var  signup_page = document.querySelector(".signup-page");
var signup_box = document.querySelector(".signup-box");
var signin  =  document.querySelector("#signin");

signup.addEventListener("click",()=>{
   signup_page.classList.toggle("activated");
   signup_box.classList.toggle("deactivate");
});

signin.addEventListener("click",()=>{
  signup_page.classList.remove("activated");
  signup_box.classList.add("deactivate");
});

