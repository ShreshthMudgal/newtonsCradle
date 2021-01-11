class Bob {
    constructor (x,y,radius) {
    var options = {
        isStatic:false
    }
    this.body = Bodies.circle(x,y,radius/2,options);
    this.radius = radius;
    World.add(world,this.body);
    }


    display () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(255,192,203);
        ellipse(0, 0, this.radius);
        pop();
    }
}