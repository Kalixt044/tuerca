//esto es  el principio de l proyecto
var canvas = document.getElementById('Canvax');
var ctx = canvas.getContext('2d');

ctx.fillStyle = "orange";
ctx.fillRect(0,0 , 480,415);
 
ctx.beginPath();  
ctx.moveTo(103,180);
ctx.fillStyle = "red";

ctx.fillRect(106,46, 0.8, 32);
ctx.fillRect(121,46, 0.8, 32);
ctx.fillRect(100,98,30,0.8);
ctx.fillRect(98,280,32,0.8);
ctx.fillRect(106,46, 16, 0.8);
ctx.fillRect(104,280, 0.8, 38);
ctx.fillRect(122,280, 0.8, 38);


ctx.fillRect(102,88,0.8,10);
ctx.fillRect(125 ,88,0.8,10);



ctx.fillRect(98,98,1.5,182);
ctx.fillRect(128 ,98,1.5,182);
ctx.fillRect(104,318 ,19 ,0.8);
/*** Ellipse ***/ 
ctx.beginPath();
ctx.ellipse(114, 60, 10,4, Math.PI / 2, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(114, 302,12,4, Math.PI / 2,0,2* Math.PI);

ctx.stroke();

/*** Otro Canvas***/ 


