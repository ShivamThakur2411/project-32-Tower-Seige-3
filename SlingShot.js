class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 40
        }
        this.pointB = pointB;
        this.slingShot = Constraint.create(options);

        World.add(world, this.slingShot);
    }
        fly(){
            this.slingShot.bodyA = null;
        }
        attach(body){
        this.slingShot.bodyA = body;
    }

    display(){
        stroke("red");
        if(this.slingShot.bodyA){
        var pointA = this.slingShot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
    
}