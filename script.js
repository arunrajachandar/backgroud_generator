
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button2 = document.querySelector(".button2");
// var button2 = document.querySelector(".button2");



function setGradient(){
	body.style.background ="linear-gradient(to right,"
	+color1.value  
	+","
	+color2.value
	+")";
	css.textContent = body.style.background+";";
}



function getRandomColor(){
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i=0;i<6;i++){
			color+=letters[Math.floor(Math.random()*16)];
	}
	return color;
}

// button1.addEventListener("click",function(){
// body.style.background ="linear-gradient(to right,"
// 	+getRandomColor()  
// 	+","
// 	+button2.value
// 	+")";
// 	css.textContent = body.style.background+";"


// });
button2.addEventListener("click",function(){
body.style.background ="linear-gradient(to right,"
	+getRandomColor()  
	+","
	+getRandomColor()
	+")";
	css.textContent = body.style.background+";"
 });
// function changeColor(){
//     Array.from(document.querySelectorAll('button')).map(function(button) {
//                button.style.backgroundColor=getRandomColor();
//     })
// }
// button2.addEventListener("click",function(){
// 	 return button2.classList.setAttribute("value",getRandomColor());
// });


// console.log(button2.value);

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)