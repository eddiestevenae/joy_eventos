function myFunction(){
	var x = document.getElementById("envio");
	x.ClassName = "muestra";
	setTimeout(function(){ x.className = x.className.replace("muestra", ""); },
	3000);
}