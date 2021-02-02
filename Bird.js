class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.trajectory = [];
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    var pos= [this.body.position.x,this.body.position.y]
    if(this.body.velocity.x>1 && this.body.position.x>200) {
    this.trajectory.push(pos);
    }
    for(var i=0; i<this.trajectory.length;i++) {
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }

    super.display();
  }
}
