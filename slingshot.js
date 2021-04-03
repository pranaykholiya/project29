class slingshot {
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            swiftness: 0.05,
            lenght: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world,this.sling)
    }
    //fly(){
       // this.sling.bodyA = null;
    //}
    display(){
        var pointA = this.body.position;
        var pointB = this.pointB;
        strokeweight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}