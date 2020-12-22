class tree{
    constructor(x,y){
        var json={
            isStatic: true
        }
        this.body=Matter.Bodies.rectangle(x,y,300,300,json)
        this.image=loadImage("tree.png")
 //       World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,400,400)
        pop()
    }
}