class Hexagon {
	constructor(x,y,radius){
		var options = {
			isStatic : false,
			restitution : 1.0,
			friction : 6.8,
			density : 0.4
		}
	this.body = Bodies.circle(x,y,radius/2,options);
	this.radius = radius;
	this.image = loadImage("Hexagon.png");

	 World.add(world, this.body);
	}

	display(){
		 imageMode(CENTER);
		 var pos = this.body.position;
        image(this.image, pos.x, pos.y ,this.radius,this.radius);
	}
}