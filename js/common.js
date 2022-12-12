let burger = document.querySelector('.menu-burger');
let nav = document.querySelector('.nav');
const anchors = document.querySelectorAll('a[href*="#"]')

burger.onclick = () => nav.style.display = (nav.style.display == "none")?"flex":"none";

for (let anchor of anchors) {
	anchor.addEventListener("click", function(event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}
