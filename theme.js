 //document.getElementById('body2').style.backgroundImage= "url(images/citi1.jpg)";
 //alert("hello")
 var i=0;
 var k=0;
 
 
 
 repeat();
  
 
 function repeat() {
	 document.getElementById("body2").style.transition = "all 1s";
	 

if(k<5)
{
	
	  if(i<2) {
	  var v ="url(images/citi"+i+".jpg)";
 
document.getElementById('body2').style.backgroundImage= v;


	i++;
setTimeout(repeat, 5000);
	 }
	 
	 
	 else {
		// document.getElementById('body2').style.backgroundImage= "url(images/citi0.jpg)";
		 i=0;
		 repeat();
	 }
	 k++;
 }
 else 
	 
 
 document.getElementById('body2').style.backgroundImage= "url(images/citi0.jpg)";
 
 
 }
 
 
 