class paper{
constructor (x,y,r){
this.x=x;
this.y=y;
this.r=r;
this.image=loadImage("paper.png");
var options={
isStatic:false,
restitution:0.3,
density:1.4,
friction:0.5

}
this.body=Bodies.circle(this.x,this.y,(this.r)/2.5,options);

World.add(world,this.body);




}
display(){
var pos=this.body.position;
push();
			translate(pos.x, pos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255,0)
			image(this.image,0,0,this.r, this.r);
			pop()

}

}



















