var player = {
	level : 1,
	hp : 5,
	x : 50,
	y : 440,
	width : 100,
	height : 20,
	color : 'yellow',
	speed : 2,

	draw : function () {
		drawRect(this.x, this.y, this.width, this.height, this.color);
	},

move : function () {
	if (isKeyDown('LEFT'))
		this.x -= this.speed;
	if (isKeyDown('RIGHT'))
		this.x += this.speed;
	},

collision: function (){
  	if (this.x >= 540) {
   		this.x = 540; 
   	}
  	if (this.x <= 0) {
   		this.x = 0; 
   }
  },

};
