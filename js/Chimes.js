class Chimes {
    //https://www.youtube.com/watch?v=NBWMtlbbOag


    constructor(stringChime, el, x, y, selfSound, impactSound, currentLook, chimeText, delayInterval, stringLength) {

        //needs to be in vector, not a unidimensional parameter
        this.pos = new p5.Vector(x, y);
        this.vel = 0;
        this.acc = 0;
        this.minSpeed = -0.1;
        this.maxSpeed = 0.1;
        this.windX = 0;
        this.frequencyX = 0;

        this.velVec = new p5.Vector(0, 0);
        this.accVec = new p5.Vector(0, 0);

        this.movingPos = new p5.Vector(x, y);
        this.initialPos = new p5.Vector(x, y);

        this.angle = Math.PI / 4;
        this.angleVel = 0;
        this.angleAcc = 0.001;
        this.currentAngleVel = 120;

        this.element = el;
        this.stringLength = stringLength;
        this.stringChime = stringChime;
        this.mass = 5;
        this.r = 90;

        this.gravity = 0.01;
        this.impact = false;
        this.impactSound = impactSound;
        this.selfSound = selfSound;
        this.isColliding = false;
        this.delayInterval = delayInterval;

        this.chimeText = chimeText;
        this.currentLook = currentLook;
        this.element.classList.add(this.currentLook);
        this.element.textContent = this.chimeText;
        this.element.style.display = "block";
        this.stringChime.style.display = "block";

        //vector force
        this.vel = new p5.Vector(0, 0);
        this.acc = new p5.Vector(0, 0);
        this.topSpeed = 20;

        this.windowOffset = window.innerWidth / 10;
        // this.windowOffsetL = window.innerWidth-this.initialPos;

    }



    //element remains in the canvas
    checkEdges() {
        if (this.movingPos.x > this.initialPos.x + this.windowOffset) {
            this.movingPos.x = this.initialPos.x + this.windowOffset;
            this.vel.x *= -1;

        } else if (this.movingPos.x < (this.initialPos.x - this.windowOffset)) {
            this.movingPos.x = this.initialPos.x - this.windowOffset;
            this.vel.x *= -1;

        }
    }

    update(resetAcc) {

        //variation of the force regarding lenght of string
        let force = this.gravity * Math.sin(this.angle);

        this.angleAcc = (-1 * force);
        //relative to mass
        this.angleAcc += (this.windX / 100);
        this.angleVel += this.angleAcc;
<<<<<<< HEAD
        // console.log(this.angleAcc);
        // console.log(this.angle);
=======
>>>>>>> wawa-design

        this.angle += this.angleVel;

        if (this.angle > this.currentAngleVel / 100) {
            this.angle = this.currentAngleVel / 100;

        }


        this.angleVel *= 0.99;
        this.pos.x = this.stringLength * Math.sin(this.angle);
        this.pos.y = this.stringLength * Math.cos(this.angle);
        //position as an offset from movingPos (center)
        this.pos.add(this.movingPos);


    }

    updateVectors(resetAcc) {
        this.vel.add(this.acc);
        this.vel.limit(this.topSpeed);
        this.movingPos.add(this.vel);

        if (resetAcc === true) {
            this.acc.mult(0);
        }

    };

    applyForce(force) {

        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);

    }


    drag(constForce) {

<<<<<<< HEAD

=======
>>>>>>> wawa-design
        let drag = this.vel.copy();
        drag.normalize();
        drag.mult(-1);
        //magnitude
        let speedSq = this.vel.magSq();
        drag.setMag(constForce * speedSq);
        this.applyForce(drag);

    }


    show() {

<<<<<<< HEAD
        // let stringHeight = this.stringChime.getBoundingClientRect().height;
=======
>>>>>>> wawa-design
        this.element.style.display = "block";
        this.stringChime.style.display = "block";
        this.stringChime.style.left = `${this.pos.x}px`;
        this.stringChime.style.top = `${50}px`;
        let width = this.element.getBoundingClientRect().width;
        this.element.style.left = `${this.pos.x - width / 2}px`;
        this.element.style.top = `${this.pos.y}px`;

    }

    isChiming() {

        let self = this;
        setTimeout(function() {
<<<<<<< HEAD
            self.selfSound.play();
=======

            self.selfSound.play()
        
>>>>>>> wawa-design
        }, self.delayInterval);

        // this.selfSound.play();

    }

    inCollision() {

        this.impactSound.play();

    }


    //colors on the chimes
    setChimeLook(form) {

        this.chimeText = form;
        console.log(form, this.element.innerText);
        this.element.textContent = form;

    }

//nécessaire ou non?
    setStringLook(stringForm) {

        console.log(stringForm, this.element.innerText);
        this.element.textContent = stringForm;

    }

} //end of class
