class suspendorBase {

    constructor(stringChime, el, x, y, currentLook) {
        this.pos = new p5.Vector(x, y);
        this.vel = new p5.Vector(0, 0);
        this.acc = new p5.Vector(0, 0);
        this.topSpeed = 20;
        console.log(y)

        this.initialPos = new p5.Vector(x, y);

        this.element = el;
        this.stringChime = stringChime;
        this.mass = 1;
        this.r = 0;
        // this.impactSound= impactSound;
        this.currentLook = currentLook;
        this.element.innerHTML = this.currentLook;

        this.windowOffset = window.innerWidth / 10;
    }



    //calculate acc, add acc to vel, limit vel when it's necessary and apply to pos
    update(resetAcc) {

        this.vel.add(this.acc);
        this.vel.limit(this.topSpeed);
        this.pos.add(this.vel);
        // console.log(this.pos);

        // represent the origin of the string eventually maybe
        // this.stringChime.style.left= `${this.pos.x}px`;
        // this.stringChime.style.top = `${this.pos.y-100}px`;
        // this.element.style.left = `${this.pos.x}px`;
        // this.element.style.top = `${this.pos.y}px`;

        if (resetAcc === true) {
            this.acc.mult(0);
        }

    }



    applyForce(force) {

        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);

    }

    drag(c) {
        //direction of drag
        let drag = this.vel.copy();
        drag.normalize();
        drag.mult(-1);
        //magnitude
        let speedSq = this.vel.magSq();
        drag.setMag(c * speedSq);

        this.applyForce(drag);
    }




    checkEdges() {

        //left-right
        if (this.pos.x > this.initialPos.x + this.windowOffset) {
            this.pos.x = this.initialPos.x + this.windowOffset;
            this.vel.x *= -1;
            // console.log("test right boundary");

        } else if (this.pos.x < (this.initialPos.x - this.windowOffset)) {
            this.pos.x = this.initialPos.x - this.windowOffset;
            this.vel.x *= -1;
            // console.log("test left boundary");

        }

    }

    show() {

        this.element.style.left = `${this.pos.x}px`;
        this.element.style.top = `${0}px`;

    }




} //end of class
