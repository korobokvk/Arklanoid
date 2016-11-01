var _renderer = (function() {
	return requestAnimationFrame ||
	webkitRequestAnimationFrame  ||
	mozRequestAnimationFrame     ||
	oRequestAnimationFrame       ||
	msRequestAnimationFrame      ||
	function (callback) {
		window.setTimeout(callback, 1000 / 60);
	};
})();

var _engine = function () {
	console.log('Game cicle do not include');
};

var startGame = function(game) {
	if(typeof game =='function') {
		_engine = game;
	}
	gameLoop();
};

var setGame = function(game) {
	if(typeof game =='function') {
		_engine = game;
	}
}

var gameLoop = function () {
	_engine();
	_renderer(gameLoop)
}