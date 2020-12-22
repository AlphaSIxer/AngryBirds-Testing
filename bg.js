class backy{
    constructor(x,y){
        var json={
            isStatic: true
        }
        this.body=Matter.Bodies.rectangle(x,y,windowWidth,windowHeight,json)
        this.image=loadImage("bg.png")
 //       World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,windowWidth,windowHeight)
        pop()
    }
}