

a="  AM";

time();

function time() {

n =  new Date();
y = n.getHours();
M = n.getMinutes();
S = n.getSeconds();

if(y>12)
{
	a="   PM";
if(y==13)
{
	
	y=1;
	
}
if(y==14)
{
	
	y=2;
	
}
if(y==15)
{
	
	y=3;
	
}
if(y==16)
{
	
	y=4;
	
}
if(y==17)
{
	
	y=5;
	
}
if(y==18)
{
	
	y=6;
	
}
if(y==19)
{
	
	y=7;
	
}
if(y==20)
{
	
	y=8;
	
}
if(y==21)
{
	
	y=9;
	
}
if(y==22)
{
	
	y=10;
	
}
if(y==23)
{
	
	y=11;
	
}
if(y==24)
{
	
	y=12;
	
}
    }
	
	

document.getElementById("time").innerHTML =  y + ":" + M + ":" +S + a;

setTimeout(function() {
   time(); 
	
}, 1000);
}