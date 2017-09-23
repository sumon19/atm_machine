var balance=1500;
var i=0
document.getElementById("blocked").innerHTML="CITI BANK";
document.getElementById('audio').setAttribute("src", "welcome.mp3");

setTimeout(function() {
    
	document.getElementById("blocked").innerHTML="WELCOMES";

}, 1000);
	setTimeout(function() {
    
	//document.getElementById("blocked").innerHTML="YOU";
	document.getElementById("blocked").innerHTML="YOU"+'<img src="images/hand.png" />';

}, 2000);
setTimeout(function() {
    
	document.getElementById("blocked").innerHTML="";
	setTimeout(function() {
		if(i==0)
		{
			setTimeout(function() {
document.getElementById('audio').setAttribute("src", "beep1.mp3");
}, 500);
setTimeout(function() {
	document.getElementById('audio').setAttribute("src", "beep1.mp3");

}, 1000);
setTimeout(function() {
	document.getElementById('audio').setAttribute("src", "beep1.mp3");

}, 1500);
setTimeout(function() {
document.getElementById('audio').setAttribute("src", "beep1.mp3");
setTimeout(function (){
	window.location.href="citi_atm.html";
	},1000);
}, 2000);

		
		}
		
		}, 15000);

}, 3000);
function btn5()
{
	document.getElementById('audio').setAttribute("src", "beep1.mp3");
	setTimeout(function (){
	window.location.href="citi_atm.html";
	},500);
}
function btn4()
{
	document.getElementById("num").value="";
	document.getElementById('audio').setAttribute("src", "beep1.mp3");
	i++;
}
function btn1()
{
	i++;
	
	
	var num= document.getElementById('num').value;
	var len=num.length;
	document.getElementById('audio').setAttribute("src", "beep1.mp3");
	 if(num>balance) {
		document.getElementById("blocked").innerHTML="Insufficent Balance";
	setTimeout(function() {
    
	document.getElementById("blocked").innerHTML="";

}, 1500);
		
		document.getElementById("num").value="";
	}
	
	
	else if((num<=balance )&&(len>2)) {
	   
		 balance=balance-num;
		
		document.getElementById("blocked").innerHTML="PROCESSING.";
		setTimeout(function() {
    
	document.getElementById("blocked").innerHTML="PROCESSING..";

}, 1000);
	setTimeout(function() {
    
	//document.getElementById("blocked").innerHTML="YOU";
	document.getElementById("blocked").innerHTML="PROCESSING...";

}, 2000);
setTimeout(function() {
    
	document.getElementById("blocked").innerHTML="PROCESSING....";

}, 3000);
setTimeout(function() {
    
	document.getElementById("blocked").innerHTML="PROCESSING.....";

}, 4000);
setTimeout(function() {
    
	document.getElementById("blocked").innerHTML=" PLEASE COLLECT CASH";
	
	setTimeout(function() {
document.getElementById('audio').setAttribute("src", "beep1.mp3");
}, 500);
setTimeout(function() {
	document.getElementById('audio').setAttribute("src", "beep1.mp3");

}, 1000);
setTimeout(function() {
	document.getElementById('audio').setAttribute("src", "beep1.mp3");

}, 1500);
setTimeout(function() {
document.getElementById('audio').setAttribute("src", "beep1.mp3");
}, 2000);
setTimeout(function() {
document.getElementById('audio').setAttribute("src", "beep1.mp3");
document.getElementById("blocked").innerHTML="";
}, 2500);

}, 4500);
		
		
    
	document.getElementById("num").value="";


	 
	}
	
	else if(len==0)
	{
	document.getElementById("blocked").innerHTML=" Enter Withdraw Amount";
	setTimeout(function() {
    
	document.getElementById("blocked").innerHTML="";

}, 1500);
document.getElementById("num").value="";
	 
	}
	else if(len>=1<=2) {
		
		document.getElementById("blocked").innerHTML="Enter Multiples of 100";
	setTimeout(function() {
    
	document.getElementById("blocked").innerHTML="";

}, 1500);
	
document.getElementById("num").value="";	
	
	}
	

}
function btn2() {
	i++;
	bal=document.getElementById("num").value;
	document.getElementById('audio').setAttribute("src", "beep1.mp3");

if(bal.length==0)
{
document.getElementById("blocked").innerHTML= '<img src="images/rupees.png" />   ' +balance;
		setTimeout(function() {
    
	document.getElementById("blocked").innerHTML="";

}, 2000);
document.getElementById("num").value="";
}
document.getElementById("num").value="";

}	
function btn3() {
	i++;
	
	var num= document.getElementById('num').value;
	var len=num.length;
	document.getElementById('audio').setAttribute("src", "beep1.mp3");
	if(len>2)
	{
		 var temp =balance+ +num;
		balance=temp;
		document.getElementById("blocked").innerHTML="PROCESSING.";
		setTimeout(function() {
    
	document.getElementById("blocked").innerHTML="PROCESSING..";

}, 1000);
	setTimeout(function() {
    
	//document.getElementById("blocked").innerHTML="YOU";
	document.getElementById("blocked").innerHTML="PROCESSING...";

}, 2000);
setTimeout(function() {
    
	document.getElementById("blocked").innerHTML="PROCESSING....";

}, 3000);
setTimeout(function() {
    
	document.getElementById("blocked").innerHTML="PROCESSING.....";

}, 4000);
setTimeout(function() {
    
	document.getElementById("blocked").innerHTML="TRANSACTION SUCCESFULL";
	
	setTimeout(function() {
document.getElementById('audio').setAttribute("src", "beep1.mp3");
}, 500);
setTimeout(function() {
	document.getElementById('audio').setAttribute("src", "beep1.mp3");

}, 1000);
setTimeout(function() {
	document.getElementById('audio').setAttribute("src", "beep1.mp3");

}, 1500);
setTimeout(function() {
document.getElementById('audio').setAttribute("src", "beep1.mp3");
}, 2000);
setTimeout(function() {
document.getElementById('audio').setAttribute("src", "beep1.mp3");
document.getElementById("blocked").innerHTML="";
}, 2500);

}, 4500);
		
	document.getElementById("num").value="";		
	}
	
	else if(len==0)
	{
	document.getElementById("blocked").innerHTML=" Enter Deposit Amount";
	setTimeout(function() {
    
	document.getElementById("blocked").innerHTML="";

}, 1500);
	 
	 document.getElementById("num").value="";
	}
	else if(len>=1<=2){
		document.getElementById("blocked").innerHTML="Enter Multiples of 100";
	setTimeout(function() {
    
	document.getElementById("blocked").innerHTML="";

}, 1500);
	
document.getElementById("num").value="";	
	}
	
	
	
	
}
function bttn4()  {
	
	
var y1= document.getElementById('num').value;

//document.getElementById('psd').value=y1 +"1";
document.getElementById('audio').setAttribute("src", "beep2.mp3");
z=y1 +"1";
document.getElementById('num').value=z;

 }
  function bttn5()  {
	  var y1= document.getElementById('num').value;
	  
		  document.getElementById('audio').setAttribute("src", "beep2.mp3");
	  z=y1 +"2";
document.getElementById('num').value=z;
	  
  }
  function bttn6()  {
   var y1= document.getElementById('num').value;
   
	   document.getElementById('audio').setAttribute("src", "beep2.mp3");
	  z=y1 +"3";
document.getElementById('num').value=z;
   
  }
  function bttn7()  {
   var y1= document.getElementById('num').value;
   
	   document.getElementById('audio').setAttribute("src", "beep2.mp3");
	  z=y1 +"4";
document.getElementById('num').value=z;
   
  }
  function bttn8()  {
   var y1= document.getElementById('num').value;
   
	   document.getElementById('audio').setAttribute("src", "beep2.mp3");
	  z=y1 +"5";
document.getElementById('num').value=z;
   
  }
   function bttn9()  {
   var y1= document.getElementById('num').value;
   
	   document.getElementById('audio').setAttribute("src", "beep2.mp3");
	  z=y1 +"6";
document.getElementById('num').value=z;
   
  }
  function bttn10()  {
   var y1= document.getElementById('num').value;
   
	   document.getElementById('audio').setAttribute("src", "beep2.mp3");
	  z=y1 +"7";
document.getElementById('num').value=z;
   
  }
  function bttn11()  {
   var y1= document.getElementById('num').value;
   
	   document.getElementById('audio').setAttribute("src", "beep2.mp3");
	  z=y1 +"8";
document.getElementById('num').value=z;
   
  }
  function bttn12()  {
   var y1= document.getElementById('num').value;
  
	   document.getElementById('audio').setAttribute("src", "beep2.mp3");
	  z=y1 +"9";
document.getElementById('num').value=z;
   
  }
  function bttn13()  {
   var y1= document.getElementById('num').value;
  
	   document.getElementById('audio').setAttribute("src", "beep2.mp3");
	  z=y1 +"0";
document.getElementById('num').value=z;
   
  }