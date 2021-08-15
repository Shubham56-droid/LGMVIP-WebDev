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



var primarySlider = new Splide( '#primary-slider', {
	type       : 'fade',
	heightRatio: 0.5,
	pagination : false,
	arrows     : false,
	cover      : true,
} );

var secondarySlider = new Splide( '#secondary-slider' ).mount();
var primarySlider = new Splide( '#primary-slider' );
primaryslider.sync( secondarySlider ).mount();

document.addEventListener( 'DOMContentLoaded', function () {
	var secondarySlider = new Splide( '#secondary-slider', {
		fixedWidth  : 100,
		height      : 60,
		gap         : 10,
		cover       : true,
		isNavigation: true,
		focus       : 'center',
		breakpoints : {
			'600': {
				fixedWidth: 66,
				height    : 40,
			}
		},
	} ).mount();
	
	var primarySlider = new Splide( '#primary-slider', {
		type       : 'fade',
		heightRatio: 0.5,
		pagination : false,
		arrows     : false,
		cover      : true,
	} ); // do not call mount() here.
	
	primarySlider.sync( secondarySlider ).mount();
} );

var secondarySlider = new Splide( '#secondary-slider', {
	fixedWidth : 100,
	height     : 60,
	gap        : 10,
	rewind     : true,
	cover      : true,
	pagination : false,
	breakpoints : {
		'600': {
			fixedWidth: 66,
			height    : 40,
		}
	}
} ).mount();