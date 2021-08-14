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


// jquery owl crousel

