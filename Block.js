class Block{
    constructor(x, y, width, height) {
        var options = {
            //restitution:0.1,
            friction:1.5,
            density:0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("Blue Block Image.png");
        this.width = width;
        this.height = height;
        this.visibility = 255;

        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;

        if(this.body.speed < 3){
      imageMode(CENTER);
      image(this.image,pos.x, pos.y, this.width, this.height);
    }else {
      World.remove(world, this.body);
      push();

      this.visibility = this.visibility - 5;
      tint(255, this.visibility);
      image(this.image, pos.x, pos.y, this.width, this.height);
      
      pop();
      }
    }
    score(){
      if(this.visibility < 0 && this.visibility > -1005){
        score = score + 2;
      }
    }
}