var counter=1;
setInterval(function(){
	document.getElementById('radio' + counter).checked=true;
	counter++;
	if(counter > 4){
		counter = 1;
	}
},5000);

window.addEventListener("load", function() {
document.getElementById('img1').addEventListener("click", function() {
		alert("dato: se lanzo un filme cinematografico dirigido por  Christopher Nolan y protagonizada por Cillian Murphy ");
	})
})

window.addEventListener("load", function() {
document.getElementById('img2').addEventListener("click", function() {
		alert("dato:Le diagnosticaron esquizofrenia y se curó con un romance");
	})
})



