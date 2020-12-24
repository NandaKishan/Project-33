class Ground{
    constructor(x,y,w,h){
        this.w = w;
        this.h = h;
        var options = {
            isStatic : true,
            friction : 0
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world, this.body);
    }

    display (){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}