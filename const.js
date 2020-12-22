class Const{
    constructor(bodyA,pointB){
        var json={
            bodyA: bodyA,
            pointB: pointB,
            length: 20,
            stiffness: 0.9
        }
        this.body=Constraint.create(json)
    }
}