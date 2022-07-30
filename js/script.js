/*
    Digital Wind Chime 
*/

"use strict";
window.onload = function() {
        micInput();
        let media = new MediaController(medias);
        let windchimeBox = document.getElementById(`windchimeBox`);
        let clicks = 0;
        let windForce = 0;

        //to control the mic event
        let timeoutWind = false;
        let stringChimeArray = [];
        let chimesArray = [];
        let userForce = 0;

        //el is the getElementbyId thing visual
        let userModeSwitch = document.getElementById(`triggerButton`);

        //buttons
        let toggle = true;
        let currentForceModeTextZone = document.getElementById(`currentForceMode`);
        let forceMode = `Click/Tap Input`;

        //variable data
        let forceLevelTextZone = document.getElementById(`forceLevelBox`);
        let currentForceLevelText = ``;

        //calling a list of chime looks
        // let chimeLookArray = [];
        let currentLookIndex = 0;
        let currentLook = "chimeLook1";
        // chimeLookArray.push("chimeLook1");
        // chimeLookArray.push("chimeLook2");
        // chimeLookArray.push("chimeLook3");
        // chimeLookArray.push("chimeLook4");

        // let changeChimesFormButton = document.getElementById(`formButton`);

        //implementation of look variations
        //   (chime elements)
        let changeLookButton = document.getElementById('lookButton');
        let chimeFormArray = [];
        let chimeFormIndex = 0;
        //change to chimeLook wtv
        let currentChimeForm = `✿`
        chimeFormArray.push(`✧`);
        chimeFormArray.push(`❀`);
        chimeFormArray.push(`♡`);
        chimeFormArray.push(`chime`);
        chimeFormArray.push(`♫`);

        let modeButton = document.getElementById(`modeButton`);

        // let changeChimesFormButton = document.getElementById(`formButton`);

        //implementation of look variations
        //   (string elements)
        let changeStringButton = document.getElementById('stringButton');
        let stringFormArray = [];
        let stringFormIndex = 0;
        stringFormArray.push(`|<br>|`);
        stringFormArray.push(`string`);


        //   (plate look)
        let changePlateLookButton = document.getElementById(`plateButton`);
        let currentPlateLook = `----------------------top-frame ----------------------`;
        let plateLookArray = [];
        let plateLookIndex = 0;
        plateLookArray.push(`━━━━━━━━━━━━━༺✧༻━━━━━━━━━━━━━`);
        plateLookArray.push(`━━━━━━━━━━━━━꧁ ♡ ꧂━━━━━━━━━━━━━`);
        plateLookArray.push(`━━━━━━━⭑*•̩̩͙♩⊱bling•✧•bling••̩̩͙⊰•♪*⭑━━━━━━━`)
        plateLookArray.push(`━━━━━⋆┈┈｡ﾟ❃ུ۪ ❀ུ۪ ❁ུ۪ ❃ུ۪ ❀ུ۪ ﾟ｡┈┈⋆━━━━━`)
        plateLookArray.push(`━━━━━━━━━━━━━༺❀༻━━━━━━━━━━━━━`);
        plateLookArray.push(`·*̩̩͙˚̩̥̩̥*̩̩̥͙　✩　z*̩̩̥͙zZ*̩̩͙‧͙.·͙*̩̩͙Zz*̩̩̥͙z ✩　*̩̩̥͙˚̩̥̩̥*̩̩͙‧.`);
        plateLookArray.push(`----------------- top-frame -----------------`);


        let stringchime0 = document.getElementById(`string0`);
        let stringBase = document.getElementById(`stringBase`);
        let stringchime1 = document.getElementById(`string1`);
        let stringchime2 = document.getElementById(`string2`);
        let stringchime3 = document.getElementById(`string3`);
        let stringchime4 = document.getElementById(`string4`);
        let stringchime5 = document.getElementById(`string5`);
        let stringchime6 = document.getElementById(`string6`);
        let stringchime7 = document.getElementById(`string7`);
        let stringchime8 = document.getElementById(`string8`);
        let stringchime9 = document.getElementById(`string9`);
        let stringchime10 = document.getElementById(`string10`);
        let stringchime11 = document.getElementById(`string11`);
        let stringchime12 = document.getElementById(`string12`);
        let stringchime13 = document.getElementById(`string13`);
        let stringchime14 = document.getElementById(`string14`);
        let stringchime15 = document.getElementById(`string15`);
        let stringchime16 = document.getElementById(`string16`);
        let stringchime17 = document.getElementById(`string17`);
        let stringchime18 = document.getElementById(`string18`);
        let stringchime19 = document.getElementById(`string19`);
        let stringchime20 = document.getElementById(`string20`);
        let stringchime21 = document.getElementById(`string21`);
        let stringchime22 = document.getElementById(`string22`);
        let stringchime23 = document.getElementById(`string23`);

        let stringElements = document.getElementsByClassName("strings");
        let chimesElements = document.getElementsByClassName("mass");
        let cssBodyColor = document.getElementsByClassName("body");
        assignStringPattern();




        //window resizing - responsive design
        let stringUnit = window.innerHeight / 25;
        let topY = window.innerHeight / 70;
        let windchimeBoxM = windchimeBox.getBoundingClientRect();
        let windchimeWidth = windchimeBoxM.width;

        let topPlate = new suspendorBase(stringBase, document.getElementById(`plate`), 0, topY + 10, currentPlateLook);

        // pattern 1 setups
        let windBoxRatio5th = windchimeWidth / 2.5;
        let windBoxRatio7th = windchimeWidth / 3.5;
        let windBoxRatio12th = windchimeWidth / 7.5;


        let chime0 = new Chimes(stringchime0, document.getElementById(`chime0`), window.innerWidth / 2, topY + stringUnit *0.3, document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 0, stringUnit * 6);
        let chime1 = new Chimes(stringchime1, document.getElementById(`chime1`), window.innerWidth / 2 - windBoxRatio5th, topY + stringUnit * 4.3, document.getElementById(`dustSound`), document.getElementById(`dustSound`), currentLook, currentChimeForm, 1000, stringUnit * 4);
        let chime2 = new Chimes(stringchime2, document.getElementById(`chime2`), window.innerWidth / 2 + windBoxRatio12th, topY + stringUnit * 2.3, document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 500, stringUnit * 2.5);
        let chime3 = new Chimes(stringchime3, document.getElementById(`chime3`), window.innerWidth / 2 - windBoxRatio12th, topY + stringUnit * 2.3, document.getElementById(`dustSound`), document.getElementById(`dustSound`), currentLook, currentChimeForm, 500, stringUnit * 2.5);
        let chime4 = new Chimes(stringchime4, document.getElementById(`chime4`), window.innerWidth / 2 + windBoxRatio5th, topY + stringUnit * 4.3, document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 1000, stringUnit * 4);
        let chime5 = new Chimes(stringchime5, document.getElementById(`chime5`), window.innerWidth / 2 + windBoxRatio7th, topY + stringUnit * 3.3, document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 1000, stringUnit * 3);
        let chime6 = new Chimes(stringchime6, document.getElementById(`chime6`), window.innerWidth / 2 - windBoxRatio7th, topY + stringUnit * 3.3, document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 1000, stringUnit * 3);

        // pattern 2 setups
        let start2X = window.innerWidth / 4;
        let start2Y = topY + stringUnit * 5;
        let offset2X = window.innerWidth / 10;
        let chime7 = new Chimes(stringchime7, document.getElementById(`chime7`), start2X, start2Y, document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 0, stringUnit);

        let chime8 = new Chimes(stringchime8, document.getElementById(`chime8`), start2X + offset2X, start2Y + stringUnit, document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 1000, stringUnit);
        let chime9 = new Chimes(stringchime9, document.getElementById(`chime9`), start2X + offset2X, start2Y - stringUnit, document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 1000, stringUnit);
        let chime10 = new Chimes(stringchime10, document.getElementById(`chime10`), start2X + (2 * offset2X + 20), start2Y + (1.5 * stringUnit + 15), document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 500, stringUnit);
        let chime11 = new Chimes(stringchime11, document.getElementById(`chime11`), start2X + (2 * offset2X + 20), start2Y - (1.5 * stringUnit + 15), document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 500, stringUnit);
        let chime12 = new Chimes(stringchime11, document.getElementById(`chime12`), start2X + (3 * offset2X + 30), start2Y + (2 * stringUnit + 20), document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 1000, stringUnit);
        let chime13 = new Chimes(stringchime11, document.getElementById(`chime13`), start2X + (3 * offset2X + 30), start2Y - (2 * stringUnit + 20), document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 1000, stringUnit);
        let chime14 = new Chimes(stringchime14, document.getElementById(`chime14`), start2X + (4 * offset2X + 40), start2Y + (2.5 * stringUnit + 25), document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 500, stringUnit);
        let chime15 = new Chimes(stringchime15, document.getElementById(`chime15`), start2X + (4 * offset2X + 40), start2Y - (2.5 * stringUnit + 25), document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 500, stringUnit);
        let chime16 = new Chimes(stringchime16, document.getElementById(`chime16`), start2X + (2.5 * offset2X + 25), start2Y + (40 + stringUnit), document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 1000, stringUnit);

        //pattern 3
        let start3X = window.innerWidth / 2;
        let start3Y = topY + stringUnit * 4;
        let chime17 = new Chimes(stringchime17, document.getElementById(`chime17`), start3X, start3Y + 300 / 2, document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 1000, stringUnit - 70);

        let chime18 = new Chimes(stringchime18, document.getElementById(`chime18`), start3X - 100 / 2, start3Y, document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 1000, stringUnit + 70);
        let chime19 = new Chimes(stringchime19, document.getElementById(`chime19`), start3X + 100 / 2, start3Y, document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 1000, stringUnit + 70);
        let chime20 = new Chimes(stringchime18, document.getElementById(`chime20`), start3X - 200 / 2, start3Y - 100 / 2, document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 1000, stringUnit + 70);
        let chime21 = new Chimes(stringchime21, document.getElementById(`chime21`), start3X + 200 / 2, start3Y - 100 / 2, document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 1000, stringUnit + 70);
        let chime22 = new Chimes(stringchime22, document.getElementById(`chime22`), start3X - 300 / 2, start3Y, document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 1000, stringUnit + 70);
        let chime23 = new Chimes(stringchime23, document.getElementById(`chime23`), start3X + 300 / 2, start3Y, document.getElementById(`dustSound`), document.getElementById(`dustSound2`), currentLook, currentChimeForm, 1000, stringUnit + 70);


        function pattern1() {
            for (let i = 0; i < stringElements.length; i++) {
                stringElements[i].style.display = "none";
            }
            for (let i = 0; i < chimesElements.length; i++) {
                chimesElements[i].style.display = "none";
            }

            stringChimeArray = []
            stringChimeArray.push(stringchime0);
            stringChimeArray.push(stringchime1);
            stringChimeArray.push(stringchime2);
            stringChimeArray.push(stringchime3);
            stringChimeArray.push(stringchime4);
            stringChimeArray.push(stringchime5);
            stringChimeArray.push(stringchime6);

            chimesArray = [];

            chimesArray.push(chime0);
            chimesArray.push(chime1);
            chimesArray.push(chime2);
            chimesArray.push(chime3);
            chimesArray.push(chime4);
            chimesArray.push(chime5);
            chimesArray.push(chime6);
        }

        function pattern2() {
            for (let i = 0; i < stringElements.length; i++) {
                stringElements[i].style.display = "none";
            }
            for (let i = 0; i < chimesElements.length; i++) {
                chimesElements[i].style.display = "none";
            }
            stringChimeArray = [];
            stringChimeArray.push(stringchime7);
            stringChimeArray.push(stringchime8);
            stringChimeArray.push(stringchime9);
            stringChimeArray.push(stringchime10);
            stringChimeArray.push(stringchime11);
            stringChimeArray.push(stringchime12);
            stringChimeArray.push(stringchime13);
            stringChimeArray.push(stringchime14);
            stringChimeArray.push(stringchime15);
            stringChimeArray.push(stringchime16);

            chimesArray = [];
            chimesArray.push(chime7);
            chimesArray.push(chime8);
            chimesArray.push(chime9);
            chimesArray.push(chime10);
            chimesArray.push(chime11);
            chimesArray.push(chime12);
            chimesArray.push(chime13);
            chimesArray.push(chime14);
            chimesArray.push(chime15);
            chimesArray.push(chime16);
        }

        function pattern3() {
            for (let i = 0; i < stringElements.length; i++) {
                stringElements[i].style.display = "none";
            }
            for (let i = 0; i < chimesElements.length; i++) {
                chimesElements[i].style.display = "none";
            }
            stringChimeArray = [];
            stringChimeArray.push(stringchime17);
            stringChimeArray.push(stringchime18);
            stringChimeArray.push(stringchime19);
            stringChimeArray.push(stringchime20);
            stringChimeArray.push(stringchime21);
            stringChimeArray.push(stringchime22);
            stringChimeArray.push(stringchime23);

            chimesArray = [];
            chimesArray.push(chime17);
            chimesArray.push(chime18);
            chimesArray.push(chime19);
            chimesArray.push(chime20);
            chimesArray.push(chime21);
            chimesArray.push(chime22);
            chimesArray.push(chime23);
        }

        //pattern mode setup
        // let currentPattern = `mountain`;
        let patternArray = [pattern1, pattern2, pattern3];
        let patternCurrentIndex = 0;
        let patternChangeButton = document.getElementById(`patternButton`);
        //

        //setup variables for interactivity
        let startDrag = false;
        let mx = 0;
        let my = 0;

        //only use Vector from p5 librairies
        let wind = new p5.Vector(0, 0);
        let repelWindForce = 0.01;
        let windButton;

        //chime sound button
        let selfSoundArray = [];
        let impactSoundArray = [];

        let currentSelfSoundMode = `dustSound`;
        let currentImpactSoundMode = `dustSound`;
        let changeSoundButton = document.getElementById(`soundButton`);
        let soundModeText = document.getElementById(`currentSound`);

        let dustSound = document.getElementById(`dustSound`);
        let dustSound2 = document.getElementById(`dustSound2`);
        let bambooSound = document.getElementById(`bambooSound`);
        let bambooSound2 = document.getElementById(`bambooSound2`);
        let thunderSound = document.getElementById(`thunderSound`);
        let thunderSound2 = document.getElementById(`thunderSound2`);
        let coinSound = document.getElementById(`coinSound`);
        let coinSound2 = document.getElementById(`coinSound2`);

        let packImage = document.querySelector('.pack__image');

        packImage.addEventListener('click', (event) => {
            console.log(packImage);
            packImage.parentNode.style.display = 'none';
        });

        selfSoundArray.push(dustSound);
        impactSoundArray.push(dustSound2);
        selfSoundArray.push(bambooSound);
        impactSoundArray.push(bambooSound2);
        selfSoundArray.push(thunderSound);
        impactSoundArray.push(thunderSound2);
        selfSoundArray.push(coinSound);
        impactSoundArray.push(coinSound2);
        let currentSoundModeIndex = 0;

        // let mainTitleNode = document.querySelector('.main-title');
        // let dataBoxNode = document.querySelector('.databox');
        // console.log(dataBoxNode)
        // mainTitleNode.addEventListener('click', () => {
        //     dataBoxNode.classList.toggle('--open');
        // })

        //mute sound button
        let muteButton = document.getElementById(`muteButton`);
        let mute = false;

        window.requestAnimationFrame(animate);
        //new properties adapted to diff events and contexts.


        window.addEventListener("mousemove", function(event) {
            mx = event.clientX;
        });

        function applyMouseWindOnWingchime() {
            let windisActive = false;
            //windForce set here :
            // clicks++;
            windForce = clicks * 0.3;
            console.log(windForce)
            if (windForce > 0.7) {
                windForce = 0;
                clicks = 0;
            }
            let newWindForce = new p5.Vector(.9, 0);
            for (let i = 0; i < chimesArray.length; i++) {
                mx = event.clientX;
                let chimeX = chimesArray[i].pos.x;
                let difference = mx - chimeX;

                if (difference > 0) {
                    wind = new p5.Vector(-windForce, 0);
                    chimesArray[i].windX = wind.x;
                    chimesArray[i].applyForce(newWindForce);


                    if (i === 0) {
                        topPlate.applyForce(newWindForce);
                        //sabine set
                        windisActive = true;
                    }
                } else if (difference < 0) {
                    wind = new p5.Vector(windForce, 0);
                    chimesArray[i].windX = wind.x;
                    chimesArray[i].applyForce(newWindForce);

                    if (i === 0) {
                        topPlate.applyForce(newWindForce);
                        //sabine set
                        windisActive = true;
                    }
                }
            } //end for loop
            //drag force applying on the entirety of the chimes
            if (windisActive) {
                setTimeout(function() {
                    startDrag = true;
                }, 2000);
            }
        }

        window.addEventListener("mousedown", function(event) {
            console.log(clicks);
            if (toggle && clicks > 0) {
                let dataBox = document.getElementById(`instructionDiv`).getBoundingClientRect();
                if (media.__isDesktop()) {
                    let xPos = dataBox.x + dataBox.width;
                    if (event.x > xPos) {
                        applyMouseWindOnWingchime();
                    }
                } else {
                    let yPos = dataBox.height + dataBox.y;
                    if (event.clientY > yPos) {
                        applyMouseWindOnWingchime();
                    }
                }
            }
            clicks += 1;
        });


        //feature that changes the sound of the chimes
        changeSoundButton.addEventListener("click", function(event) {
            currentSoundModeIndex++;
            if (currentSoundModeIndex === selfSoundArray.length) {
                currentSoundModeIndex = 0;
            }
            for (let i = 0; i < chimesArray.length; i++) {
                chimesArray[i].selfSound = selfSoundArray[currentSoundModeIndex];
                chimesArray[i].impactSound = impactSoundArray[currentSoundModeIndex];
            }
            currentSelfSoundMode = selfSoundArray[currentSoundModeIndex].id;
            print();
        });
        //feature that goes through the look/characters of the chimes
        changeLookButton.addEventListener("click", function(event) {
            chimeFormIndex++;
            if (chimeFormIndex === chimeFormArray.length) {
                chimeFormIndex = 0;
            }
            for (let j = 0; j < chimesArray.length; j++) {
                chimesArray[j].setChimeLook(chimeFormArray[chimeFormIndex]);
            };
            print();
        });

        //feature that mutes the chimes
        muteButton.addEventListener("click", function(event) {
            mute = !mute;
            if (mute === true) {
                for (let i = 0; i < chimesArray.length; i++) {
                    chimesArray[i].selfSound.pause();
                    chimesArray[i].impactSound.pause();
                }
            }
        }); //end mute button

        window.requestAnimationFrame(animate);
        //new properties adapted to diff events and contexts.

        //feature that goes thru the plate style options
        changePlateLookButton.addEventListener("click", function(event) {
            plateLookIndex++;
            if (plateLookIndex === plateLookArray.length) {
                plateLookIndex = 0;
            };
            topPlate.currentLook = plateLookArray[plateLookIndex];
            topPlate.element.innerHTML = topPlate.currentLook;
        }); //end change border button


        //feature that goes through the pattern
        patternChangeButton.addEventListener("click", function(event) {
            patternCurrentIndex++;
            if (patternCurrentIndex === patternArray.length) {
                patternCurrentIndex = 0;
            }
        });

        print();

        function assignStringPattern() {
            let newStringLook = stringFormArray[stringFormIndex];
            stringElements.forEach(string => {
                string.innerHTML = newStringLook;
            });
        }

        changeStringButton.addEventListener("click", function(event) {
            stringFormIndex++;
            if (stringFormIndex === stringFormArray.length) {
                stringFormIndex = 0;
            }
            assignStringPattern();
            print();

        });
        //can change the background color 
        modeButton.addEventListener("click", function(event) {
            let windChimeElements = [];
            windChimeElements = windChimeElements.concat(document.querySelectorAll('body'), document.querySelectorAll('button'));
            windChimeElements.forEach(elements => {
                elements.forEach(element => {
                    element.classList.toggle('--dark');
                });
            });
        });

        function animate() {
            //applications of the properties adapted to diff events and contexts
            patternArray[patternCurrentIndex]();
            //a vertical vectorial force
            let gravity = new p5.Vector(0, 0.009);
            //activation of constructor's functions
            for (let i = 0; i < chimesArray.length; i++) {
                chimesArray[i].updateVectors(true);
                chimesArray[i].show();
                chimesArray[i].update(true);
                chimesArray[i].checkEdges();
            }

            topPlate.update(true);
            topPlate.show();
            topPlate.checkEdges();

            //toggling between the "mode" button (user force mode)
            if (toggle === false) {
                //maps userforce to mic input data
                windForce = userForce;
                let windisActive = false;
                let newWindForce = new p5.Vector(.9, 0);

                //user input force becomes the wind
                for (let i = 0; i < chimesArray.length; i++) {
                    let chimeX = chimesArray[i].pos.x;
                    let difference = mx - chimeX;

                    if (difference > 0) {
                        wind = new p5.Vector(-windForce, 0);
                        chimesArray[i].windX = wind.x;
                        chimesArray[i].applyForce(newWindForce);

                        if (i === 0) {
                            topPlate.applyForce(newWindForce);
                            windisActive = true;
                        }
                    } else if (difference < 0) {
                        wind = new p5.Vector(windForce, 0);
                        chimesArray[i].windX = wind.x;

                        if (timeoutWind === false) {
                            chimesArray[i].applyForce(newWindForce);
                        }
                        if (i === 0 && timeoutWind === false) {
                            topPlate.applyForce(newWindForce);
                            windisActive = true;
                        }
                    } //diff
                } //end of for loop

                if (windisActive === true && timeoutWind === false) {
                    setTimeout(function() {
                        startDrag = true;
                    }, 2000);
                    setTimeout(function() {
                        timeoutWind = false;
                        console.log("time out wind");
                    }, 5000);
                    timeoutWind = true;
                }
            } //end of if Toggle
            bang();
            window.requestAnimationFrame(animate)
        }

        function print() {
            console.log(currentSelfSoundMode)
            currentForceModeTextZone.innerHTML = forceMode;
            soundModeText.innerHTML = currentSelfSoundMode;
        }

        function micInput() {
            //https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API and Sabine's help
            //librairy web audio
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            let audioContext = new AudioContext();
            navigator.mediaDevices.getUserMedia({
                audio: true
            }).then(
                //stream is what is returned
                (stream) => {
                    //returns a MediaStreamAudioSourceNode.
                    const microphoneIn = audioContext.createMediaStreamSource(stream);
                    const filter = audioContext.createBiquadFilter();
                    const analyser = audioContext.createAnalyser();
                    // microphone -> filter ->  analyzer->destination
                    microphoneIn.connect(filter);
                    //use the analyzer object to get some properties ....
                    filter.connect(analyser);
                    console.log(`micInput`);

                    //we do not need a destination (out)
                    //analyser.connect(audioContext.destination); is the translation of waves into pixel
                    //fast furior transform is the type of analysis to be done on the data (32 is the size)
                    analyser.fftSize = 32;
                    let frequencyData = new Uint8Array(analyser.frequencyBinCount);

                    //call loop ...
                    requestAnimationFrame(callBackLoop);

                    /****our looping callback function */
                    function callBackLoop() {
                        analyser.getByteFrequencyData(frequencyData);
                        //takes the average of the collection
                        //  let average =0;
                        let sum = 0;
                        for (let i = 0; i < frequencyData.length; i++) {
                            sum += frequencyData[i];
                        }
                        userForce = (sum / frequencyData.length) / 100;
                        // console.log(userForce)


                        requestAnimationFrame(callBackLoop);
                    }
                })

            .catch(function(err) {
                /* handle the error */
                console.log("NO SOUND DETECTED");
            });
        }

        //sound of chimes triggered by movement or collision of 2 chimes obj
        function bang() {
            //activation of selfSound by movement (calculated w velocity)
            if (!mute) {
                for (let i = 0; i < chimesArray.length; i++) {
                    if (chimesArray[i].angleVel > Math.abs(0.003)) {
                        chimesArray[i].isChiming();
                    }
                }
                //activation of impactSound by detection of collision between 2 chimes
                for (let i = 0; i < chimesArray.length; i++) {
                    // chimesArray[i].impact= false;
                    if (chimesArray[i].isColliding === true) {
                        if (chimesArray[i].impactSound.paused) {
                            // console.log(`DONE`);
                            chimesArray[i].isColliding = false;
                        }
                    }
                }

                // calculating collision thru difference
                for (let i = 0; i < chimesArray.length; i++) {
                    for (let j = 0; j < chimesArray.length; j++) {
                        let chimeX = chimesArray[i].pos.x;
                        if (chimesArray[i] !== chimesArray[j]) {
                            let otherChimeX = (chimesArray[j].pos.x);
                            let difference = Math.sqrt(Math.pow((chimesArray[j].pos.x - chimesArray[i].pos.x), 2) + Math.pow((chimesArray[j].pos.y - chimesArray[i].pos.y), 2));

                            //determines if there is collision or not between 2 chimes objs
                            if (difference < 100) {
                                chimesArray[i].impact = true;
                                chimesArray[j].impact = true;
                                if (chimesArray[j].isColliding === false) {
                                    chimesArray[j].inCollision();
                                    chimesArray[j].isColliding = true;
                                }
                                if (chimesArray[i].isColliding === false) {
                                    chimesArray[i].inCollision();
                                    chimesArray[i].isColliding = true;
                                }
                            }
                        }
                    }
                }
            }
        }
    } //end window on load
