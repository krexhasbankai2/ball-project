class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        //Create the Bodies Here.
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.w=w;
        this.h=h;
    World.add(world,this.body)
    }
    display(){
       push()
       translate(this.body.position.x,this.body.position.y)
        rect(0,0,this.w,this.h)
        pop()
    }
}