class Paper {
  constructor(x, y) {
    var options = {
        'restitution':0.5,
        'friction':5,
        'density':1.0
        
    }
    this.body = Bodies.circle(x, y, 26, options);
   this.image = loadImage("paper.png")
    
    World.add(world, this.body);
  }
  display(){

    
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    ellipse(80, 80, 26);
    fill(230)
    image(this.image,26,20)
    pop();

    
    
    
  
  }
};