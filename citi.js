
//var x=1;
var i=2;
var pin= [8681,7883,1436];
/*n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("blocked").innerHTML = m + "-" + d + "-" + y;*/
//var x1= document.getElementById('psd').value;

 function bttn2()  {
	 
	document.getElementById('psd').value="";
//location.reload();
	
}
function bttn3()  {
	var block=document.getElementById('blocked');
	
	block.innerHTML="  Thank You Visit Again ";
	
	setTimeout(function() {
    
	window.close();
}, 1300);
	
	
	}


function bttn1()  {
	var pssd = document.getElementById('psd');
	var block=document.getElementById('blocked');
	
var psd = document.getElementById('psd').value;
if(psd.length==0) {
	block.innerHTML="ENTER PIN";
	setTimeout(function (){
	block.innerHTML="";
	},800);
	
}
	
 else if(i>=1)
{
	
	
	 if((pssd.value==pin[0])||(pssd.value==pin[1])||(pssd.value==pin[2]))
	{
		window.location.href="citi.html";
		
	
	
}

else 
{
document.getElementById('audio').setAttribute("src", "beep1.mp3");	

document.getElementById('psd').value="";
setTimeout(function() {
	
alert(" You Have Entered Wrong pin");
}, 500);
i--;

}

}
else if(i<=0)
{
	 if((pssd.value==pin[0])||(pssd.value==pin[1])||(pssd.value==pin[2]))
	{
		window.location.href="citi.html";
		
		
	
	
}
else 
{
pin=123123213434;
document.getElementById('audio').setAttribute("src", "beep1.mp3");

pssd.placeholder="**CARD BLOCKED**";

document.getElementById('psd').value="";
setTimeout(function() {
	alert("Card blocked");
	block.innerHTML="Kindly Contact Your";

}, 500);
//block.innerHTML= Date();
}
	
	
}
	
}

 function bttn4()  {
	
	
var y1= document.getElementById('psd').value;
if(y1.length<4) {
//document.getElementById('psd').value=y1 +"1";
document.getElementById('audio').setAttribute("src", "beep2.mp3");
z=y1 +"1";
document.getElementById('psd').value=z;
}
 }
  function bttn5()  {
	  var y1= document.getElementById('psd').value;
	  if(y1.length<4) {
		  document.getElementById('audio').setAttribute("src", "beep2.mp3");
	  z=y1 +"2";
document.getElementById('psd').value=z;
	  }
  }
  function bttn6()  {
   var y1= document.getElementById('psd').value;
   if(y1.length<4) {
	   document.getElementById('audio').setAttribute("src", "beep2.mp3");
	  z=y1 +"3";
document.getElementById('psd').value=z;
   }
  }
  function bttn7()  {
   var y1= document.getElementById('psd').value;
   if(y1.length<4) {
	   document.getElementById('audio').setAttribute("src", "beep2.mp3");
	  z=y1 +"4";
document.getElementById('psd').value=z;
   }
  }
  function bttn8()  {
   var y1= document.getElementById('psd').value;
   if(y1.length<4) {
	   document.getElementById('audio').setAttribute("src", "beep2.mp3");
	  z=y1 +"5";
document.getElementById('psd').value=z;
   }
  }
   function bttn9()  {
   var y1= document.getElementById('psd').value;
   if(y1.length<4) {
	   document.getElementById('audio').setAttribute("src", "beep2.mp3");
	  z=y1 +"6";
document.getElementById('psd').value=z;
   }
  }
  function bttn10()  {
   var y1= document.getElementById('psd').value;
   if(y1.length<4) {
	   document.getElementById('audio').setAttribute("src", "beep2.mp3");
	  z=y1 +"7";
document.getElementById('psd').value=z;
   }
  }
  function bttn11()  {
   var y1= document.getElementById('psd').value;
   if(y1.length<4) {
	   document.getElementById('audio').setAttribute("src", "beep2.mp3");
	  z=y1 +"8";
document.getElementById('psd').value=z;
   }
  }
  function bttn12()  {
   var y1= document.getElementById('psd').value;
   if(y1.length<4) {
	   document.getElementById('audio').setAttribute("src", "beep2.mp3");
	  z=y1 +"9";
document.getElementById('psd').value=z;
   }
  }
  function bttn13()  {
   var y1= document.getElementById('psd').value;
   if(y1.length<4) {
	   document.getElementById('audio').setAttribute("src", "beep2.mp3");
	  z=y1 +"0";
document.getElementById('psd').value=z;
   }
  }