// module "framework.js"
import Typewriter from "typewriter-effect/dist/core";
import initializeStory from "./story";
import { missionOne, missionTwo } from "./missions";
import debug from "./debug";

var nextPage;
var prevPage;
var storyCounter = 1;
var stories = [];
window.playerName = ``;
window.crew = [];
window.languageStory = "";


window.onload = function () {
	debug();

	let typewriter;
	let target;
	function createTypewriter() {
		typewriter = new Typewriter(target, {
			loop: false,
			autoStart: true,
			cursor: `▄`,
			delay: 35,
		});
	}

	function Dialogue(name, bg, text, type = `speech`, code = ``) {
		this.name = name;
		this.sprite = name;
		this.bg = bg;
		this.text = text;
		this.type = type;
		this.code = code;
	}

	function addDialogue(name, bg, text, type, code) {
		var d = new Dialogue(name, bg, text, type, code);
		stories.push(d);
	}

	function refreshDialogue() {
		stories = [];
		initializeStory();
		for (let i = 0; i < window.storyParts.length; i++) {
			addDialogue(...window.storyParts[i]);
		}
	}


	function showDialogue(dialogue) {
		const screen = document.getElementById(`screen`);
		const obj = dialogue;

		if (obj.bg.includes(`Appartment`)) {
			obj.bg = "url('http://fqminor.nl/images/spaceship.png')";
		} else if (obj.bg.includes(`Lab`)) {
			obj.bg = "url('http://fqminor.nl/images/etheria.png')";
		} else if (obj.bg.includes(`Boom`)) {
			obj.bg = "url('http://fqminor.nl/images/2.png')";
		} else if (obj.bg.includes(`Spaceship`)) {
			obj.bg = "url('http://fqminor.nl/images/spacewindow.png')";
		}

		if (obj.name.includes(`Joksin`)) {
			obj.sprite = "http://fqminor.nl/images/joksin.png";
		} else if (obj.name.includes(`Slimvolt`)) {
			obj.sprite = "http://fqminor.nl/images/slimvolt.png";
		} else if (obj.name.includes(`none`)) {
			obj.sprite = "";
		}

		document.body.style.backgroundImage = obj.bg;

		if (obj.type.includes(`speech`) && obj.name.includes("none") === false) {
			screen.innerHTML = `
                <img src="${obj.sprite}" id="speechsprite"></img>
                <div id='speechname'><p>${obj.name}</p></div>
                <div id='dialogue'><p id="paragraph"></p></div>
                <button id='next'>Next</button>
                    `;

			document.getElementById("next").addEventListener(`click`, () => { nextPage(); });
		} else if (obj.type.includes(`mission`)) {
			screen.innerHTML = `
                <img src="${obj.sprite}" id="missionsprite"></img>
                <div id='missionname'><p>${obj.name}</p></div>
                <div id='mission'><p>${obj.text}</p><div id="codediv">${obj.code}</div></div>
                    `;
		} else if (obj.type.includes(`confirm`)) {
			screen.innerHTML = `
                <img src="${obj.sprite}" id="speechsprite"></img>
                <div id='speechname'><p>${obj.name}</p></div>
                <div id='dialogue'><p id="paragraph"></p></div>
                <button id='next'>Yes</button>
                <button id='prev'>No</button>
                    `;

			document.getElementById("next").addEventListener(`click`, () => { nextPage(); });
			document.getElementById("prev").addEventListener(`click`, () => { prevPage(); });
		} else if (obj.type.includes(`speech`) && obj.name.includes("none")) {
			screen.innerHTML = `
                <div id='dialogue'><p id="paragraph"></p></div>
                <button id='next'>Next</button>
                    `;


			document.getElementById("next").addEventListener(`click`, () => { nextPage(); });
		}


		if (obj.type.includes(`speech`) || obj.type.includes(`confirm`)) {
			target = document.getElementById(`paragraph`);
			createTypewriter(target);
			typewriter.options.delay = 35;
			document.getElementById("dialogue").addEventListener(`click`, () => {
				typewriter.options.delay = 0;
			});
			const str = obj.text;
			typewriter.typeString(str)
				.start();
		}


		if (obj.type.includes(`missionOne`)) {
			missionOne();
		}
		if (obj.type.includes(`missionTwo`)) {
			missionTwo();
		}
		/*
		if (obj.type.includes(`missionThree`)) {
			missionThree();
        }
        */
	}

	document.getElementById("startButtonEnglish").addEventListener(`click`, () => {
		window.languageStory = "english";
		refreshDialogue();
		showDialogue(stories[0]);
	});

	document.getElementById("startButtonDutch").addEventListener(`click`, () => {
		window.languageStory = "dutch";
		refreshDialogue();
		showDialogue(stories[0]);
	});

	nextPage = function () {
		refreshDialogue();
		if (storyCounter >= stories.length) {
			// empty
		} else {
			storyCounter += 1;
			showDialogue(stories[storyCounter - 1]);
		}
		/*
		if (storyCounter >= 22) {
			randomCrew = crew[Math.floor(Math.random()*crew.length)];
			randomName = randomCrew.name;
			randomRole = randomCrew.role;
        }
        */
	};

	prevPage = function () {
		refreshDialogue();
		if (storyCounter <= 1) {
			// empty
		} else {
			storyCounter -= 1;
			showDialogue(stories[storyCounter - 1]);
		}
	};
};

export { nextPage, prevPage };
