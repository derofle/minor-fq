
window.onload = function() {

    // Getting the screen div from the HTML doc
    const screen = document.getElementById(`screen`);

    // StoryCounter keeps track of the position within the story without grasping into the story array.
    let storyCounter = 1;
    // In the Story Array the pages will be saved and be navigated
    let stories = [];
    // Blank player name to fill in later on, its global so it can be used anywhere
    let playerName = '';
    // Blank role array to fill in alter on, its global so it can be used anywhere
    let crew = [];

    let roleCount = 0;

    let randomRole = {};
    let randomName = '';

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


    
    // This function clears the array and then adds the objects into the array again, can be called during the playthrough, to for example input the playerName
    function refreshDialogue () {
        stories = [];

        // Ordinary world
        addDialogue(`Joksin Schura`, `Appartment`, `Hello?! Hello! Can you hear me? If you can read this message, please hit next in the lower right to let me know if I am not just talking to myself!`);
        addDialogue(`Joksin Schura`, `Appartment`, `Oh, hi there! Good! Someone found my hidden message! I’m Joksin Schura, and I need your help! But first, how can I call you? Please input your name on the next screen, so I know what to call you!`);
        addDialogue(`Joksin Schura`, `Appartment`, `<b>Input your name!</b>`, `mission`, 
                    `<input id="inputName">
                    <button id="inputNameButton" type="button">Submit</button>
                    `);

        addDialogue(`Joksin Schura`, `Appartment`, `Is it true that your name is ${playerName}? Otherwise click on the No button to go back and input your name again!`, `confirm`);
        addDialogue(`Joksin Schura`, `Appartment`, `You were chosen to get this message and save Earth from this unfortunate fate, ${playerName}! You are the hero the universe and Earth needs!`);

        // Call to Adventure
        addDialogue(`Joksin Schura`, `Appartment`, `Listen closely, ${playerName}, cause this message is only for you. You are the only one who can do this. You are the only one who can save Earth!”`);
        addDialogue(`Joksin Schura`, `Boom`, `There are plans from outer space to blow up the Earth to construct a themepark, called Snarfland, on the place that Earth is now! Even though I like themeparks, I don't like blowing up planets for it!`);
        addDialogue(`Joksin Schura`, `Boom`, `The ones behind these plans are called The Combined Supremacy, they convinced the Galactic Senate that Earth is a wasteland and there is no life to be found on it!`);
        addDialogue(`Joksin Schura`, `Appartment`, `But that's absoluteley not true, cause otherwise I would not have been able to communicate with you!`);
        addDialogue(`Joksin Schura`, `Appartment`, `You are the chosen one to save the Earth from this unfortunate faith!, ${playerName}!`);

        // Refusal of the Call
        addDialogue(`Joksin Schura`, `Appartment`, `Sadly my knowledge about Earth also tells me that Earth does not have spaceship capable of going in to deep space just yet.`);
        addDialogue(`Joksin Schura`, `Appartment`, `But wait, someone else is intercepting my signal, maybe he can help you, ${playerName}!`);
        addDialogue(`Joksin Schura`, `Appartment`, `Decrypt coded message!</br> Apply cesarean cypher to the signal and find out who else is intercepting my signal! The signal = PIFJSLIQ`, `mission`, 
                    `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/856px-Caesar3.svg.png" id="cypherimg"></img>
                    <input id="missionone">
                    <button id="missiononebutton" type="button">Submit</button>
                    <p id="wrongInput"></p>
                    `);

        // Meeting the mentor
        addDialogue(`Slimvolt`, `Lab`, `Oh hello there, ${playerName}! I'm Professor Slimvolt! I also retrieved the message from the alien Joksin and I think that I can help you!`);
        addDialogue(`Slimvolt`, `Lab`, `I have a machine right here that can help you, wait let me get it, hold on for a second!`);
        addDialogue(`none`, `Lab`, `Here I got it!`);
        addDialogue(`Slimvolt`, `Lab`, `This here is what I call a Turbo Space Engine, it is one of a kind and it is probably able to bring you guys in to deeper space!`);
        addDialogue(`Slimvolt`, `Lab`, `I just made it yesterday and I could use some guinea pigs, erhh, brave spacefarers to try it out, like you ${playerName}!`);
        addDialogue(`Slimvolt`, `Lab`, `But right now you guys do not seem up to that task, you don’t seem like space farers and you don’t have the resources to go in to space! So there is some stuff to do before I give you guys my Turbo Space Engine!`);
        addDialogue(`Slimvolt`, `Lab`, `You cannot do this alone, ${playerName}, you need people to help you, for in space. So it’s up to you guys to find people who are willing to help you on your journey! Good luck!`);
        addDialogue(`Slimvolt`, `Lab`, `Here will be the mission where they have to gather a crew and give them roles.`, 'mission', 
                    `<label id="labelName">Name: </label><input id="nameRoleInput">
                    <label id="labelRole">Role: </label><input id="roleRoleInput">
                    <button id="roleInputButton" type="button">Add to crew</button>
                    <button id="roleInputDoneButton" type="button">Done making a crew</button>
                    <p id="added"></p>
                    <p id="showcrew"></p>
                    `);

        addDialogue(`Slimvolt`, `Lab`, `Are you sure you got your whole crew, ${playerName}?`, `confirm`);
        addDialogue(`Slimvolt`, `Lab`, `I see, so this is your crew! I really like ${randomName} as the ${randomRole}!`);
        console.log(stories);
    }
    
    // Calling the startup refresh dialogue function
    refreshDialogue();

    // Getting the start button and using it to load the first object in the array
    document.getElementById('startButton').addEventListener(`click`, function (){
        showDialogue(stories[0]);
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
                    cursor: "|",
                    delay: 30,
                });
                typewriter.options.delay = 25;
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