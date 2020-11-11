document.getElementById("wrapper").onscroll = (event) =>{
	console.clear();
	let pages = Array.from(document.getElementById("wrapper").querySelectorAll(".page"))
	pages.forEach(page => {
		if(page.getAttribute("id") == "portada" && page.offsetTop <= event.target.scrollTop){
			Array.from(document.querySelectorAll(".slides .page")).forEach(element => element.classList.remove("active"));
			Array.from(document.querySelectorAll(".slides .page")).forEach(element => element.classList.add("hide"));
			document.getElementById("slide1").classList.add("active");
			document.getElementById("slide1").classList.remove("hide");
		}
		else if(page.getAttribute("id") == "nosotros" && page.offsetTop <= event.target.scrollTop){
			Array.from(document.querySelectorAll(".slides .page")).forEach(element => element.classList.remove("active"));
			Array.from(document.querySelectorAll(".slides .page")).forEach(element => element.classList.add("hide"));
			document.getElementById("slide2").classList.add("active");
			document.getElementById("slide2").classList.remove("hide");
		}
		else if(page.getAttribute("id") == "beneficios-usuarios" && page.offsetTop <= event.target.scrollTop){
			Array.from(document.querySelectorAll(".slides .page")).forEach(element => element.classList.remove("active"));
			Array.from(document.querySelectorAll(".slides .page")).forEach(element => element.classList.add("hide"));
			document.getElementById("slide3").classList.add("active");
			document.getElementById("slide3").classList.remove("hide");
		}
		else if(page.getAttribute("id") == "beneficios-estasiones" && page.offsetTop <= event.target.scrollTop){
			Array.from(document.querySelectorAll(".slides .page")).forEach(element => element.classList.remove("active"));
			Array.from(document.querySelectorAll(".slides .page")).forEach(element => element.classList.add("hide"));
			document.getElementById("slide4").classList.add("active");
			document.getElementById("slide4").classList.remove("hide");
		}
		else if(page.getAttribute("id") == "invertir" && page.offsetTop <= event.target.scrollTop){
		Array.from(document.querySelectorAll(".slides .page")).forEach(element => element.classList.remove("active"));
			Array.from(document.querySelectorAll(".slides .page")).forEach(element => element.classList.add("hide"));
			document.getElementById("slide5").classList.add("active");
			document.getElementById("slide5").classList.remove("hide");
		}
	});
} 

let arrows = Array.from(document.querySelectorAll("a.down"))

arrows.forEach(element => element.onclick = (event) => {
	 event.preventDefault();
	 let currentElement = event.target;
	 if(currentElement.classList.contains("fas")){
		 currentElement = currentElement.parentElement;
	 }
	 let toElement = currentElement.getAttribute("href");
	 let toScroll = document.getElementById("wrapper").querySelector(toElement);
	toScroll.scrollIntoView({behavior: "smooth" });
})


var swiper = new Swiper('.swiper-container', {
	effect: 'cube',
	grabCursor: true,
	cubeEffect: {
		shadow: true,
		slideShadows: true,
		shadowOffset: 20,
		shadowScale: 0.94,
	},
	pagination: {
		el: '.swiper-pagination',
	},
});