class suspendorBase {

    constructor(el, x, y, currentLook) {
        this.pos = new p5.Vector(x, y);
        this.vel = new p5.Vector(0, 0);
        this.acc = new p5.Vector(0, 0);
        // this.topSpeed = 20;
        this.topSpeed = 5;
        this.initialPos = new p5.Vector(x, y);
        this.corePosition;
        this.element = el;

        this.mass = 1;
        this.r = 0;
        // this.impactSound= impactSound;
        this.currentLook = currentLook;
        this.element.innerHTML = this.currentLook;

        this.windowOffset = window.innerWidth / 10;
    }

    setCorePosition(core) {
        this.corePosition = core.pos;
    }


    //calculate acc, add acc to vel, limit vel when it's necessary and apply to pos
    update(resetAcc) {

        this.vel.add(this.acc);
        this.vel.limit(this.topSpeed);
        this.pos.add(this.vel);

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

        this.pos.x = (this.corePosition.x - this.element.getBoundingClientRect().width / 2);

    }

    show() {

        this.element.style.left = `${this.pos.x}px`;
        this.element.style.top = `${0}px`;

    }




} //end of class