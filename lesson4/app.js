var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


potato.src = "potato.png";

okpotato.src = "okpotato.png";

pixelpotato.src = "pixelpotato.png";

wallnut.src = "wallnut.png";

wowpotato.src = "wowpotato.src";

potato.onload = function(){
ctx.drawImage(potato,650,200,150,200);
}

okpotato.onload = function(){
ctx.drawImage(okpotato,470,110,200,200);
}




ctx.font = "60px Trebuchet MS"
ctx.fillStyle = "white";
ctx.fillText("potatoes", 40,125);


ctx.fillStyle = "blue";
ctx.fillRect(0,0,800,500);

ctx.fillStyle = "green";
ctx.fillRect(0,500,800,500);

ctx.beginPath();
ctx.arc(150,150,50,0,6.9);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "yellow"
ctx.fill();



