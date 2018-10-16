// module "story.js"

window.randomName = ``;
window.randomRole = ``;
window.storyTest = [];

function initializeStory () {
     storyTest = [
        // Ordinary World
        [`Joksin Schura`, `Appartment`, `Hello?! Hello! Can you hear me? If you can read this message, please hit next in the lower right to let me know if I am not just talking to myself!`],
        [`Joksin Schura`, `Appartment`, `Oh, hi there! Good! Someone found my hidden message! I’m Joksin Schura, and I need your help! But first, how can I call you? Please input your name on the next screen, so I know what to call you!`],
        [`Joksin Schura`, `Appartment`, `<b>Input your name!</b>`, `missionOne`, 
        `<input id="inputName">
        <button id="inputNameButton" type="button">Submit</button>
        `],

        [`Joksin Schura`, `Appartment`, `Is it true that your name is ${playerName}? Otherwise click on the No button to go back and input your name again!`, `confirm`],
        [`Joksin Schura`, `Appartment`, `You were chosen to get this message and save Earth from this unfortunate fate, ${playerName}! You are the hero the universe and Earth needs!`],

        // Call to Adventure
        [`Joksin Schura`, `Appartment`, `Listen closely, ${playerName}, cause this message is only for you. You are the only one who can do this. You are the only one who can save Earth!”`],
        [`Joksin Schura`, `Boom`, `There are plans from outer space to blow up the Earth to construct a themepark, called Snarfland, on the place that Earth is now! Even though I like themeparks, I don't like blowing up planets for it!`],
        [`Joksin Schura`, `Boom`, `The ones behind these plans are called The Combined Supremacy, they convinced the Galactic Senate that Earth is a wasteland and there is no life to be found on it!`],
        [`Joksin Schura`, `Appartment`, `But that's absoluteley not true, cause otherwise I would not have been able to communicate with you!`],
        [`Joksin Schura`, `Appartment`, `You are the chosen one to save the Earth from this unfortunate faith!, ${playerName}!`],

        // Refusal of the Call
        [`Joksin Schura`, `Appartment`, `Sadly my knowledge about Earth also tells me that Earth does not have spaceship capable of going in to deep space just yet.`],
        [`Joksin Schura`, `Appartment`, `But wait, someone else is intercepting my signal, maybe he can help you, ${playerName}!`],
        [`Joksin Schura`, `Appartment`, `Decrypt coded message!</br> Apply cesarean cypher to the signal and find out who else is intercepting my signal! The signal = PIFJSLIQ`, `missionTwo`, 
        `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/856px-Caesar3.svg.png" id="cypherimg"></img>
        <input id="missionone">
        <button id="missiononebutton" type="button">Submit</button>
        <p id="wrongInput"></p>
        `],

        // Meeting the mentor
        [`Slimvolt`, `Lab`, `Oh hello there, ${playerName}! I'm Professor Slimvolt! I also retrieved the message from the alien Joksin and I think that I can help you!`],
        [`Slimvolt`, `Lab`, `I have a machine right here that can help you, wait let me get it, hold on for a second!`],
        [`none`, `Lab`, `Here I got it!`],
        [`Slimvolt`, `Lab`, `This here is what I call a Turbo Space Engine, it is one of a kind and it is probably able to bring you guys in to deeper space!`],
        [`Slimvolt`, `Lab`, `I just made it yesterday and I could use some guinea pigs, erhh, brave spacefarers to try it out, like you ${playerName}!`],
        [`Slimvolt`, `Lab`, `But right now you guys do not seem up to that task, you don’t seem like space farers and you don’t have the resources to go in to space! So there is some stuff to do before I give you guys my Turbo Space Engine!`],
        [`Slimvolt`, `Lab`, `You cannot do this alone, ${playerName}, you need people to help you, for in space. So it’s up to you guys to find people who are willing to help you on your journey! Good luck!`],
        [`Slimvolt`, `Lab`, `Here will be the mission where they have to gather a crew and give them roles.`, 'missionThree', 
        `<label id="labelName">Name: </label><input id="nameRoleInput">
        <label id="labelRole">Role: </label><input id="roleRoleInput">
        <button id="roleInputButton" type="button">Add to crew</button>
        <button id="roleInputDoneButton" type="button">Done making a crew</button>
        <p id="added"></p>
        <p id="showcrew"></p>
        `],
        [`Slimvolt`, `Lab`, `Are you sure you got your whole crew, ${playerName}?`, `confirm`],
        [`Slimvolt`, `Lab`, `I see, so this is your crew! I really like ${randomName} as the ${randomRole}!`],
        [`Slimvolt`, `Lab`, `So you have your crew now, excellent! Now it is time for the real work!`],
        [`Slimvolt`, `Lab`, `It is now time for the most important part, without it you cannot even travel in to deeper space. We are of course talking about a spaceship! Because earth does not have a spaceship right now, you have to make one off your own!`],
        [`Slimvolt`, `Lab`, `Make a spaceship!`, `mission`],
        [`Slimvolt`, `Lab`, `Oh wow, that looks like an amazing space ship, well done! Now you only need to name your space ship!`],
        [`Slimvolt`, `Lab`, `Fill in space ship name`, `mission`],
        [`Slimvolt`, `Lab`, `Alright, the Super Space Ship! That sounds awesome! Now it only needs one thing more! The Turbo Space Engine! Here, attach it to your ship!`],
        [`Slimvolt`, `Lab`, `Attach Turbo Space Engine`, `mission`],
        [`Slimvolt`, `Lab`, `Good work everyone, especially from ${randomName}! Now the time has come to go into space!`],
        [`Slimvolt`, `Lab`, `Everyone, get into the spaceship! Fasten your seatbelts!`],
        [`Slimvolt`, `Lab`, `I’m pressing the Launch button now, 3, 2 ,1 ...`],
        [`Slimvolt`, `Lab`, `.....`],
        [`Slimvolt`, `Lab`, `Wait, why is nothing happening?`],
        [`Slimvolt`, `Lab`, `Oh, flimsy doodle, I forgot a very important thing! The fuel of the ship!`],
        [`Slimvolt`, `Lab`, `Look, the ship cannot fly with a special fuel called Oobleck, without it it won’t do anything! Make some Oobleck and after that report back to me!`],
        [`Slimvolt`, `Lab`, `Make Oobleck`, `mission`],
        [`Slimvolt`, `Lab`, `Fantastic! You did it! Now it really is time to go in to space! I will stay here on Earth, to keep an eye out for any other alien activity! Good luck everyone!`],
        [`Slimvolt`, `Lab`, `Time for liftoff! 3, 2, 1 ….`],
        [`none`, `Boom`, `Space related travel shit here.`],
        [`Joksin Schura`, `Spaceship`, `Hello space travellers, welcome in to space! Before we go any further, you should rest from your journey!`],
        [`Joksin Schura`, `Spaceship`, `It was a long trip and you need your energy for the rest of the adventure! So eat, drink, sleep untill you are rested up good, and after that I will see you!`],
        [`none`, `Spaceship`, `Pause related shit here.`],
        // Crossing the Treshold
        

];
}

export { initializeStory };

    