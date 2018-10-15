window.onload = function() {

    
    const screen = document.getElementById(`screen`);

    let storyCounter = 1;
    window.playerName = ``;
    
    let crew = [];
    let stories = [];
    let roleCount = 0;

    // This is the constructor of the Dialogue Objects
    function Dialogue (name, bg, text, type = `speech`, code = ``){
            this.name = name;
            this.sprite = name;
            this.bg = bg;
            this.text = text;   
            this.type = type;
            this.code = code;
    };

    // This calls the constructor and after that puts them in the Story Array
    function addDialogue (name, bg, text, type, code) {
        var d = new Dialogue(name, bg, text, type, code);
        stories.push(d);
    }

    function refreshDialogue () {
        stories = [];
        for (let i = 0; i < storyTest.length; i++) {
            addDialogue(...storyTest[i]);
        }
    }
    


    // Getting the start button and using it to load the first object in the array
    document.getElementById('startButton').addEventListener(`click`, function (){
        refreshDialogue();
        showDialogue(stories[0]);
        console.log(playerName);
    });

    // The actual function to show the objects on the screen
    function showDialogue (obj) {

            // Defines what background is going to be used.
            if (obj.bg.includes(`Appartment`)) {
                obj.bg = "url('http://fqminor.nl/images/spaceship.png')";
            } else if (obj.bg.includes(`Lab`)) {
                obj.bg = "url('http://fqminor.nl/images/etheria.png')";
            } else if (obj.bg.includes(`Boom`)) {
                obj.bg = "url('http://fqminor.nl/images/2.png')";
            } else if (obj.bg.includes(`Spaceship`)) {
                obj.bg = "url('http://fqminor.nl/images/spacewindow.png')";
            }
        
            // Defines which sprite is going to used for the characters
            if (obj.name.includes(`Joksin`)) {
                obj.sprite = "http://fqminor.nl/images/joksin.png";
            } else if (obj.name.includes(`Slimvolt`)) {
                obj.sprite = "http://fqminor.nl/images/slimvolt.png";
            } else if (obj.name.includes(`none`)) {
                obj.sprite = "";
            }

            // Changes the background to the background of the object
            document.body.style.backgroundImage = obj.bg;

            // Implements the information from the object into the HTML and adds the next button to it
            if (obj.type.includes(`speech`) && obj.name.includes("none") == false) {
                screen.innerHTML = `
                <img src="${obj.sprite}" id="speechsprite"></img>
                <div id='speechname'><p>${obj.name}</p></div>
                <div id='dialogue'><p id="paragraph"></p></div>
                <button id='next'>Next</button>
                    `;
                
                
                
                let nextButton = document.getElementById('next').addEventListener(`click`, function () {
                    nextPage();    
                })


            // This will load the HTML for the missions, mostly the difference is the ID's that are being used in CSS
            } else if (obj.type.includes(`mission`)) {
                screen.innerHTML = `
                <img src="${obj.sprite}" id="missionsprite"></img>
                <div id='missionname'><p>${obj.name}</p></div>
                <div id='mission'><p>${obj.text}</p><div id="codediv">${obj.code}</div></div>
                    `;
                
            // If its a confirm page, there will also be a previous button present
            } else if (obj.type.includes(`confirm`)){
                screen.innerHTML = `
                <img src="${obj.sprite}" id="speechsprite"></img>
                <div id='speechname'><p>${obj.name}</p></div>
                <div id='dialogue'><p id="paragraph"></p></div>
                <button id='next'>Yes</button>
                <button id='prev'>No</button>
                    `;

                let nextButton = document.getElementById('next').addEventListener(`click`, function () {nextPage();})
                let prevButton = document.getElementById('prev').addEventListener(`click`, function () {prevPage();})   
            } else if (obj.type.includes(`speech`) && obj.name.includes("none")) {
                screen.innerHTML = `
                <div id='dialogue'><p id="paragraph"></p></div>
                <button id='next'>Next</button>
                    `;
                
                
                
                let nextButton = document.getElementById('next').addEventListener(`click`, function () {
                    nextPage();    
                })
            }
            // This is for the TypewriterJS, this will make sure that on the speech and confirm pages, the text is typed out
            if (obj.type.includes(`speech`) || obj.type.includes(`confirm`)) {
            const p = document.getElementById(`paragraph`);
                let typewriter = new Typewriter(p, {
                    loop: false,
                    autoStart: true,
                    cursor: `▄`,
                    delay: 35,
                });
                typewriter.options.delay = 35;
                document.getElementById("dialogue").addEventListener(`click`, function () {
                    typewriter.options.delay = 0;
                })
                const text = obj.text;
                typewriter.typeString(text)
                .start();
            }
            

            

            // This is more for debugging, so that you can switch pages with your arrow keys
            document.onkeydown = function(e) {
                switch (e.keyCode) {
                    case 37:
                        prevPage();
                        break;
                    case 39:
                        nextPage();
                        break;
                    case 32:
                        refreshDialogue();
                        break;
                        
                }
            };

            // This function is being called to go to the next page
            function nextPage() {
                refreshDialogue();
                console.log(storyCounter);
                if (storyCounter >= stories.length) {
                } else {
                    storyCounter = storyCounter + 1;
                    showDialogue(stories[storyCounter - 1]);
                }

                if (storyCounter >= 22) {
                    randomCrew = crew[Math.floor(Math.random()*crew.length)];
                    randomName = randomCrew.name;
                    randomRole = randomCrew.role;
                }
            }

            // Same but for previous page
            function prevPage() {
                refreshDialogue();
                console.log(storyCounter);
                if (storyCounter <= 1) {
                } else {
                    storyCounter = storyCounter - 1;
                    showDialogue(stories[storyCounter - 1]);
                }
            }

            // This is a specific if statement for the 3rd page, so that you can input your name
            if (storyCounter === 3) {
                document.getElementById("inputNameButton").addEventListener(`click`, function () {
                    let str = document.getElementById("inputName").value;
                    console.log(str);
                    playerName = str;
                    nextPage();
                    
                })
                
            }

            // This is a specific if statement for the 13th page, so that you can input the code and it checks if its right or wrong
            if (storyCounter === 13) {
                document.getElementById("missiononebutton").addEventListener(`click`, function () {
                    let text = "";
                    let str = document.getElementById("missionone").value;
                    let res = str.toUpperCase();
                    console.log(res);
                    if(res.includes(`SLIMVOLT`)) {
                        nextPage();
                    } else {
                        text = "Input wrong";
                        document.getElementById("wrongInput").innerHTML = text;
                    }    
                })   
            }

            if (storyCounter === 21) {
                document.getElementById("roleInputButton").addEventListener(`click`, function () {
                    let name = document.getElementById("nameRoleInput").value;
                    let role = document.getElementById("roleRoleInput").value;
                    crew.push( {
                        name: name,
                        role: role
                    })
                    text = "Crewmember added";
                    document.getElementById("added").innerHTML = text;
                    array = crew;
                    document.getElementById("showcrew").innerHTML = `${crew[roleCount].name} ${crew[roleCount].role} `;
                    console.log(crew);
                    roleCount++;
                    console.log(roleCount);
            });
                document.getElementById("roleInputDoneButton").addEventListener(`click`, function () {
                    nextPage();

            });

        }
        
    }  

    

    
};