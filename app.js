var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;
var x = width*1/8;
var y = -1/8*height;
for (var i=0; i<3; i++) {
  context.beginPath();
  context.moveTo(x=width/2-i*(width/8), y+=2/8*height);
  for (var j=0; j<=i; j++) {
    context.moveTo(x+j*(2/8*width), y);
    context.lineTo(x+j*(2/8*width)-1/8*width, y+2/8*height);
    context.lineTo(x+j*(2/8*width)+1/8*width, y+2/8*height);
    context.closePath();
    if (y === 1/8*height) {
      context.fillStyle = '#E36266';
    } else if (y === 3/8*height) {
      context.fillStyle = '#26AD49';
    } else {
      context.fillStyle = '#5C66FF';
    }
    context.fill();
  }
}

/*
var width= canvas.width;
var height=canvas.height;
var x = 0;
var halfWidth = 225;
var halfHeight = 175;
var triangleHeight= 80;
var triangleWidth=100;

function firstRow(row) {
	context.beginPath();
if (row==3)	 {

context.moveTo(x, height);
context.lineTo(triangleWidth/2, height-triangleHeight);
context.lineTo(triangleWidth, height);
context.moveTo(triangleWidth, height);
context.lineTo(triangleWidth+triangleWidth/2, height-triangleHeight);
context.lineTo(triangleWidth*2, height);
context.moveTo(triangleWidth*2, height);
context.lineTo(triangleWidth*2.5, height-triangleHeight);
context.lineTo(triangleWidth*3, height);

context.fillStyle="#5C66FF";
context.fill();
}
}
firstRow(3);

function secondRow(row) {
	context.beginPath();
	if (row==2) {
context.moveTo(triangleWidth/2,height-triangleHeight);
context.lineTo(triangleWidth, height-triangleHeight*2);
context.lineTo(triangleWidth*1.5, height-triangleHeight);
context.moveTo(triangleWidth*1.5, height-triangleHeight);
context.lineTo(triangleWidth*2, height-triangleHeight*2);
context.lineTo(triangleWidth*2.5, height-triangleHeight);
context.fillStyle="#26AD49";
context.fill();
context.closePath();
	}
	}
secondRow(2);


function thirdRow(row) {
	context.beginPath();
	if (row==1) {
context.moveTo(triangleWidth,height-triangleHeight*2);
context.lineTo(triangleWidth*1.5, height-triangleHeight*3);
context.lineTo(triangleWidth*2, height-triangleHeight*2);
context.fillStyle="#E36266";
context.fill();
context.closePath();
	}
	}
thirdRow(1);
*/


