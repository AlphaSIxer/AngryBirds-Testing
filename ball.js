class ball{
    constructor(x,y){
        var json={
            restitution: 0.9,
            density: 3,
            friction: 0.7
        }
        this.body=Matter.Bodies.circle(x,y,10,json)
        World.add(world,this.body)
    }
    display(){
        var a=this.body.position
        push()
        ellipseMode(RADIUS)
        fill("black")
        ellipse(a.x,a.y,10)
        pop()
    }
}