var slides;	// this is needed as a global variable
var TimePerSlide = 5000 // the time between each slide in milliseconds

function update_screen() {
	new_slide = slides[ Math.floor(Math.random()*slides.length) ];
	document.getElementById("topic").innerHTML		= new_slide.topic;
	document.getElementById("shortcut").innerHTML		= new_slide.shortcut;
	document.getElementById("description").innerHTML	= new_slide.description;
	document.getElementById("mode").innerHTML		= new_slide.mode;
}

window.addEventListener("load", function() {
	var Req = new XMLHttpRequest();
	Req.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var data = this.responseText;
			slides = JSON.parse(data);
			update_screen();
			window.setInterval(update_screen, TimePerSlide);
		}
	}
	Req.open("GET","content.json", true);
	Req.send();
})
