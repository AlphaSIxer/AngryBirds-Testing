class base{
    constructor(x,y,width,height){
        var json={
            restitution: 0.9,
            density: 2,
            friction: 0.9
        }
        this.body=Matter.Bodies.rectangle(x,y,width,height,json)
        this.h=height
        this.w=width
        this.image=loadImage("catapult.png")
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var ang=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(ang)
        imageMode(CENTER)
        image(this.image,0,0,this.h,this.w)
        pop()
    }
}