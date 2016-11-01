var canvas, ctx, width, height;

var init = function () {
	canvas = document.getElementById('canvas');
	width = canvas.width;
	height = canvas.height;
	ctx = canvas.getContext('2d');
}

var fillAll = function (color) {
	ctx.fillStyle = color;
	ctx.fillRect(0,0, width, height);

}

var clearAll = function () {
	ctx.clearRect(0,0, width, height);

}

var drawRect = function (x, y, w, h, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, w, h);

}