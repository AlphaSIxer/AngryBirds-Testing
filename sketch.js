const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ww,wh
var m1,m2,m3,m4
var bg
var tre
var c1,c2,c3,c4
var g,baller
var cat

function preload(){
    bg=loadImage("bg.png")
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    ww=windowWidth
    wh=windowHeight
    
 //   bg=new backy(ww/2,wh/2,ww,wh)

    m1=new mango(ww-ww/4,wh/2)
    m2=new mango(ww-ww/4,wh/2-wh/5)
    m3=new mango(ww-ww/3,wh/2)
    m4=new mango(ww-ww/6,wh/2)
    m5=new mango(ww-ww/4-ww/9,wh/2-wh/10)

    tre=new tree(ww-ww/4,wh/2)

    baller=new ball(ww/4,wh/2)

    cat=new base(ww/4,wh/2+wh/4,200,60)

    c1=new Chain(m1.body,{x:ww-ww/4, y:wh/2})
    c2=new Chain(m2.body,{x:ww-ww/4, y:wh/2-wh/5})
    c3=new Chain(m3.body,{x:ww-ww/3, y:wh/2})
    c4=new Chain(m4.body,{x:ww-ww/7, y:wh/2})
    c5=new Chain(m5.body,{x:ww-ww/4-ww/9, y:wh/2-wh/10})
    c6=new Chain(baller.body,{x:ww/4-ww/60,y:wh/1.5})
    c7=new Chain(baller.body,{x:ww/4+ww/60,y:wh/1.5})

}

function draw(){
    background(bg);
    Engine.update(engine)
    
 //   bg.display()
    
    tre.display()

    baller.display()

    m1.display()
    m2.display()
    m3.display()
    m4.display()
    m5.display()
    c6.display()
    c7.display()
    cat.display()

 //   g.display()
    Matter.Body.setStatic(cat.body,true)

    if(baller.body.x-m1.body.x<50){
        c1.fly()
    }
    if(baller.body.x-m2.body.x<50){
        c2.fly()
    }
    if(baller.body.x-m3.body.x<50){
        c3.fly()
    }
    if(baller.body.x-m4.body.x<50){
        c4.fly()
    }
    if(baller.body.x-m5.body.x<50){
        c5.fly()
    }

    // collide(baller.body,m1.body)
    // collide(baller.body,m2.body)
    // collide(baller.body,m3.body)
    // collide(baller.body,m4.body)
    // collide(baller.body,m5.body)

    
}

function mouseDragged(){
    Matter.Body.setPosition(baller.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
        c6.fly()
        c7.fly()
}

function keyPressed(){
    if(keyCode == UP_ARROW){
        Matter.Body.setPosition(baller.body,{x:windowWidth/4,y:windowHeight/2})
        c6=new Chain(baller.body,{x:ww/4-ww/60,y:wh/1.5})
        c7=new Chain(baller.body,{x:ww/4+ww/60,y:wh/1.5})
    }
}

function collide(bodyA,bodyB){
    if(bodyA.x-bodyB.x<50){
        Matter.Body.setStatic(bodyB,false)
    }
}

