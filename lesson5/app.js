var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var WIDTH = 600;
var HEIGHT = 400;

var x,y;
var mx, my;

function circle (x, y, radius){
ctx.beginPath();
ctx.arc(x, y, radius, 0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill();
}

function clear(){
ctx.clearRect(0,0, WIDTH, HEIGHT);
}

function draw(){
clear();
circle (x, y,30);

if(x+mx <0 || x+mx>WIDTH){
 mx = -mx;
}

if (y+my <0 || y+my>HEIGHT){
	my = -my;
}
x += mx;
y += my;

}

function init() {
	x = 300;
	y = 200;
	mx = 5;
	my = 4;
	return setInterval(draw, 10);
}

init();