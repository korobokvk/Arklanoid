var grid = {
	nodes : [],

	add : function (x, y, w, h, c) {
		var tmp = new _Enemy(x, y, w, h, c);
		this.nodes.push(tmp);
	},

	generate : function (count, w, h, color) {
		var dW = 5,
		dX = dW, dY = dW,
		dCountX = Math.ceil(width / (w + dW)) - 1,
		dAllW = Math.ceil((width - (w + dW) * dCountX) / 2);	
		dY = dAllW;	
		for ( var i = 0; i < count; i++) {
			for ( var j = 0; j < dCountX; j++) {
				if ( j == 0) {
					dX += Math.ceil(dAllW - dW / 2);
				}
				this.add(dX, dY, w, h, color);
				dX += w + dW;
			}
			dY += h + dW;
			dX = dW;
		}
	},

	destroy : function (id) {
		this.nodes.splice(id, 1);

	},

	draw : function () {
		for (en in this.nodes) {
			this.nodes[en].draw();
		}
	}
};

var _Enemy = function (x, y, w, h, color) {
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.color = color;
};

_Enemy.prototype.draw = function () {
	drawRect(this.x, this.y, this.width, this.height, this.color)	
};