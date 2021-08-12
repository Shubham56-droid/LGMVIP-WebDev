// image  slider  script

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;

  if (counter > 5) {
    counter = 1;
  }
}, 5000);

let imgbase = document.querySelector(".img-base");
let videoView = document.querySelector(".video-view");
const videoproject = document.querySelector(".video-project");


videoproject.addEventListener("click", (e) => {
  if (e.target.classList.contains("img-base")) {
   document.getElementById("onckc").click(); 
  }
});






document.querySelectorAll(".video-project video").forEach((vid)=>{

  vid.onclick =() =>{
    videoView.classList.add("active");
    document.querySelector('.video-view video').src = vid.getAttribute(src);
  }
});

function popupproject() {
  videoView.classList.remove("active");
}
