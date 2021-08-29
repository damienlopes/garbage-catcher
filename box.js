class Box {
    constructor(x,y,w,h){
        var gp = { isStatic: true };
        this.box = Bodies.rectangle(x, y, w, h, gp);
        World.add(myWorld, this.box);
       this.w = w
       this.h = h
    }
    display() {
        rectMode (CENTER)
        rect(this.box.position.x, this.box.position.y, this.w, this.h);     
    }
    }

    //crh