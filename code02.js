
var canvas = document.getElementById('Canvax02');
var ctx = canvas.getContext('2d');

ctx.fillStyle = "red";
ctx.fillRect(0,0 , 480,415);
ctx.beginPath();
ctx.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.setLineDash([5, 5]);
ctx.moveTo(0, 200);
ctx.lineTo(200, 0);
ctx.stroke();
