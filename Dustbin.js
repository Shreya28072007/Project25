class Dustbin{
    constructor(x,y){


        var options={
            isStatic:true,
            density:0.5
        }
      this.x=x;
      this.y=y;
      this.dustbinWidth=200;
      this.dustbinHeight=213;
      this.wallThickness=20;

      this.image=loadImage("sprites/dustbingreen.png");
        
      this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinThickness,this.wallThickness,options);
      this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});
      this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});

      World.add(world,this.bottomBody);
      World.add(world,this.leftWallBody);
      World.add(world,this.rightWallBody);
    }
    display(){
        var posBottom=this.bottomBody.position;
        var posLeft=this.leftWallBody.position;
        var posRight=this.rightWallBody.position;


        push()
        translate(posLeft.x,posLeft.y);
        rectMode(CENTER);
        angleMode(RADIANS)
        fill(225);
        rotate(this.angle);
        pop();

        push()
        translate(posRight.x,posRight.y);
        rectMode(CENTER);
        angleMode(RADIANS)
        fill(225);
        rotate(-1*this.angle);
        pop();

        push()
        translate(posBottom.x,posBottom.y+10);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(225);
        imageMode(CENTER);
        image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight);
        pop();

    }

}