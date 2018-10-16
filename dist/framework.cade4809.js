// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"javascript/story.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeStory = initializeStory;
// module "story.js"
window.randomName = "";
window.randomRole = "";
window.storyTest = [];

function initializeStory() {
  storyTest = [// Ordinary World
  ["Joksin Schura", "Appartment", "Hello?! Hello! Can you hear me? If you can read this message, please hit next in the lower right to let me know if I am not just talking to myself!"], ["Joksin Schura", "Appartment", "Oh, hi there! Good! Someone found my hidden message! I\u2019m Joksin Schura, and I need your help! But first, how can I call you? Please input your name on the next screen, so I know what to call you!"], ["Joksin Schura", "Appartment", "<b>Input your name!</b>", "missionOne", "<input id=\"inputName\">\n        <button id=\"inputNameButton\" type=\"button\">Submit</button>\n        "], ["Joksin Schura", "Appartment", "Is it true that your name is ".concat(playerName, "? Otherwise click on the No button to go back and input your name again!"), "confirm"], ["Joksin Schura", "Appartment", "You were chosen to get this message and save Earth from this unfortunate fate, ".concat(playerName, "! You are the hero the universe and Earth needs!")], // Call to Adventure
  ["Joksin Schura", "Appartment", "Listen closely, ".concat(playerName, ", cause this message is only for you. You are the only one who can do this. You are the only one who can save Earth!\u201D")], ["Joksin Schura", "Boom", "There are plans from outer space to blow up the Earth to construct a themepark, called Snarfland, on the place that Earth is now! Even though I like themeparks, I don't like blowing up planets for it!"], ["Joksin Schura", "Boom", "The ones behind these plans are called The Combined Supremacy, they convinced the Galactic Senate that Earth is a wasteland and there is no life to be found on it!"], ["Joksin Schura", "Appartment", "But that's absoluteley not true, cause otherwise I would not have been able to communicate with you!"], ["Joksin Schura", "Appartment", "You are the chosen one to save the Earth from this unfortunate faith!, ".concat(playerName, "!")], // Refusal of the Call
  ["Joksin Schura", "Appartment", "Sadly my knowledge about Earth also tells me that Earth does not have spaceship capable of going in to deep space just yet."], ["Joksin Schura", "Appartment", "But wait, someone else is intercepting my signal, maybe he can help you, ".concat(playerName, "!")], ["Joksin Schura", "Appartment", "Decrypt coded message!</br> Apply cesarean cypher to the signal and find out who else is intercepting my signal! The signal = PIFJSLIQ", "missionTwo", "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/856px-Caesar3.svg.png\" id=\"cypherimg\"></img>\n        <input id=\"missionone\">\n        <button id=\"missiononebutton\" type=\"button\">Submit</button>\n        <p id=\"wrongInput\"></p>\n        "], // Meeting the mentor
  ["Slimvolt", "Lab", "Oh hello there, ".concat(playerName, "! I'm Professor Slimvolt! I also retrieved the message from the alien Joksin and I think that I can help you!")], ["Slimvolt", "Lab", "I have a machine right here that can help you, wait let me get it, hold on for a second!"], ["none", "Lab", "Here I got it!"], ["Slimvolt", "Lab", "This here is what I call a Turbo Space Engine, it is one of a kind and it is probably able to bring you guys in to deeper space!"], ["Slimvolt", "Lab", "I just made it yesterday and I could use some guinea pigs, erhh, brave spacefarers to try it out, like you ".concat(playerName, "!")], ["Slimvolt", "Lab", "But right now you guys do not seem up to that task, you don\u2019t seem like space farers and you don\u2019t have the resources to go in to space! So there is some stuff to do before I give you guys my Turbo Space Engine!"], ["Slimvolt", "Lab", "You cannot do this alone, ".concat(playerName, ", you need people to help you, for in space. So it\u2019s up to you guys to find people who are willing to help you on your journey! Good luck!")], ["Slimvolt", "Lab", "Here will be the mission where they have to gather a crew and give them roles.", 'missionThree', "<label id=\"labelName\">Name: </label><input id=\"nameRoleInput\">\n        <label id=\"labelRole\">Role: </label><input id=\"roleRoleInput\">\n        <button id=\"roleInputButton\" type=\"button\">Add to crew</button>\n        <button id=\"roleInputDoneButton\" type=\"button\">Done making a crew</button>\n        <p id=\"added\"></p>\n        <p id=\"showcrew\"></p>\n        "], ["Slimvolt", "Lab", "Are you sure you got your whole crew, ".concat(playerName, "?"), "confirm"], ["Slimvolt", "Lab", "I see, so this is your crew! I really like ".concat(randomName, " as the ").concat(randomRole, "!")], ["Slimvolt", "Lab", "So you have your crew now, excellent! Now it is time for the real work!"], ["Slimvolt", "Lab", "It is now time for the most important part, without it you cannot even travel in to deeper space. We are of course talking about a spaceship! Because earth does not have a spaceship right now, you have to make one off your own!"], ["Slimvolt", "Lab", "Make a spaceship!", "mission"], ["Slimvolt", "Lab", "Oh wow, that looks like an amazing space ship, well done! Now you only need to name your space ship!"], ["Slimvolt", "Lab", "Fill in space ship name", "mission"], ["Slimvolt", "Lab", "Alright, the Super Space Ship! That sounds awesome! Now it only needs one thing more! The Turbo Space Engine! Here, attach it to your ship!"], ["Slimvolt", "Lab", "Attach Turbo Space Engine", "mission"], ["Slimvolt", "Lab", "Good work everyone, especially from ".concat(randomName, "! Now the time has come to go into space!")], ["Slimvolt", "Lab", "Everyone, get into the spaceship! Fasten your seatbelts!"], ["Slimvolt", "Lab", "I\u2019m pressing the Launch button now, 3, 2 ,1 ..."], ["Slimvolt", "Lab", "....."], ["Slimvolt", "Lab", "Wait, why is nothing happening?"], ["Slimvolt", "Lab", "Oh, flimsy doodle, I forgot a very important thing! The fuel of the ship!"], ["Slimvolt", "Lab", "Look, the ship cannot fly with a special fuel called Oobleck, without it it won\u2019t do anything! Make some Oobleck and after that report back to me!"], ["Slimvolt", "Lab", "Make Oobleck", "mission"], ["Slimvolt", "Lab", "Fantastic! You did it! Now it really is time to go in to space! I will stay here on Earth, to keep an eye out for any other alien activity! Good luck everyone!"], ["Slimvolt", "Lab", "Time for liftoff! 3, 2, 1 \u2026."], ["none", "Boom", "Space related travel shit here."], ["Joksin Schura", "Spaceship", "Hello space travellers, welcome in to space! Before we go any further, you should rest from your journey!"], ["Joksin Schura", "Spaceship", "It was a long trip and you need your energy for the rest of the adventure! So eat, drink, sleep untill you are rested up good, and after that I will see you!"], ["none", "Spaceship", "Pause related shit here."]];
}
},{}],"javascript/missions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.missionOne = missionOne;
exports.missionTwo = missionTwo;
exports.missionThree = missionThree;

var _framework = require("./framework");

// module "missions.js"
function missionOne() {
  document.getElementById("inputNameButton").addEventListener("click", function () {
    var str = document.getElementById("inputName").value;
    console.log(str);
    playerName = str;
    (0, _framework.nextPage)();
  });
}

function missionTwo() {
  document.getElementById("missiononebutton").addEventListener("click", function () {
    var text = "";
    var str = document.getElementById("missionone").value;
    var res = str.toUpperCase();
    console.log(res);

    if (res.includes("SLIMVOLT")) {
      (0, _framework.nextPage)();
    } else {
      text = "Input wrong";
      document.getElementById("wrongInput").innerHTML = text;
    }
  });
}

function missionThree() {
  document.getElementById("roleInputButton").addEventListener("click", function () {
    var name = document.getElementById("nameRoleInput").value;
    var role = document.getElementById("roleRoleInput").value;
    crew.push({
      name: name,
      role: role
    });
    var text = "Crewmember added";
    document.getElementById("added").innerHTML = text;
    array = crew;
    document.getElementById("showcrew").innerHTML = "".concat(crew[roleCount].name, " ").concat(crew[roleCount].role, " ");
    console.log(crew);
    roleCount++;
    console.log(roleCount);
  });
  document.getElementById("roleInputDoneButton").addEventListener("click", function () {
    (0, _framework.nextPage)();
  });
}
},{"./framework":"javascript/framework.js"}],"javascript/debug.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debug = void 0;

var _framework = require("./framework");

// module "debug.js"
var debug = function debug() {
  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 37:
        (0, _framework.prevPage)();
        break;

      case 39:
        (0, _framework.nextPage)();
        break;

      /*
      case 32:
      refreshDialogue();
      break;
      */
    }
  };
};

exports.debug = debug;
},{"./framework":"javascript/framework.js"}],"javascript/framework.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prevPage = exports.nextPage = void 0;

var _story = require("./story");

var _missions = require("./missions");

var _debug = require("./debug");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var nextPage;
exports.nextPage = nextPage;
var prevPage;
exports.prevPage = prevPage;
var storyCounter = 1;
window.playerName = "";
window.crew = [];
var stories = [];
var roleCount = 0;

window.onload = function () {
  (0, _debug.debug)();
  document.getElementById('startButton').addEventListener("click", function () {
    refreshDialogue();
    showDialogue(stories[0]);
  });
  var typewriter;
  var target;

  function createTypewriter() {
    typewriter = new Typewriter(target, {
      loop: false,
      autoStart: true,
      cursor: "\u2584",
      delay: 35
    });
  }

  function Dialogue(name, bg, text) {
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "speech";
    var code = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
    this.name = name;
    this.sprite = name;
    this.bg = bg;
    this.text = text;
    this.type = type;
    this.code = code;
  }

  ;

  function addDialogue(name, bg, text, type, code) {
    var d = new Dialogue(name, bg, text, type, code);
    stories.push(d);
  }

  function refreshDialogue() {
    stories = [];
    (0, _story.initializeStory)();

    for (var i = 0; i < storyTest.length; i++) {
      addDialogue.apply(void 0, _toConsumableArray(storyTest[i]));
    }
  }

  function showDialogue(obj) {
    var screen = document.getElementById("screen");

    if (obj.bg.includes("Appartment")) {
      obj.bg = "url('http://fqminor.nl/images/spaceship.png')";
    } else if (obj.bg.includes("Lab")) {
      obj.bg = "url('http://fqminor.nl/images/etheria.png')";
    } else if (obj.bg.includes("Boom")) {
      obj.bg = "url('http://fqminor.nl/images/2.png')";
    } else if (obj.bg.includes("Spaceship")) {
      obj.bg = "url('http://fqminor.nl/images/spacewindow.png')";
    }

    if (obj.name.includes("Joksin")) {
      obj.sprite = "http://fqminor.nl/images/joksin.png";
    } else if (obj.name.includes("Slimvolt")) {
      obj.sprite = "http://fqminor.nl/images/slimvolt.png";
    } else if (obj.name.includes("none")) {
      obj.sprite = "";
    }

    document.body.style.backgroundImage = obj.bg;

    if (obj.type.includes("speech") && obj.name.includes("none") == false) {
      screen.innerHTML = "\n                <img src=\"".concat(obj.sprite, "\" id=\"speechsprite\"></img>\n                <div id='speechname'><p>").concat(obj.name, "</p></div>\n                <div id='dialogue'><p id=\"paragraph\"></p></div>\n                <button id='next'>Next</button>\n                    ");
      document.getElementById('next').addEventListener("click", function () {
        nextPage();
      });
    } else if (obj.type.includes("mission")) {
      screen.innerHTML = "\n                <img src=\"".concat(obj.sprite, "\" id=\"missionsprite\"></img>\n                <div id='missionname'><p>").concat(obj.name, "</p></div>\n                <div id='mission'><p>").concat(obj.text, "</p><div id=\"codediv\">").concat(obj.code, "</div></div>\n                    ");
    } else if (obj.type.includes("confirm")) {
      screen.innerHTML = "\n                <img src=\"".concat(obj.sprite, "\" id=\"speechsprite\"></img>\n                <div id='speechname'><p>").concat(obj.name, "</p></div>\n                <div id='dialogue'><p id=\"paragraph\"></p></div>\n                <button id='next'>Yes</button>\n                <button id='prev'>No</button>\n                    ");
      document.getElementById('next').addEventListener("click", function () {
        nextPage();
      });
      document.getElementById('prev').addEventListener("click", function () {
        prevPage();
      });
    } else if (obj.type.includes("speech") && obj.name.includes("none")) {
      screen.innerHTML = "\n                <div id='dialogue'><p id=\"paragraph\"></p></div>\n                <button id='next'>Next</button>\n                    ";
      var nextButton = document.getElementById('next').addEventListener("click", function () {
        nextPage();
      });
    }

    if (obj.type.includes("speech") || obj.type.includes("confirm")) {
      target = document.getElementById("paragraph");
      createTypewriter(target);
      typewriter.options.delay = 35;
      document.getElementById("dialogue").addEventListener("click", function () {
        typewriter.options.delay = 0;
      });
      var text = obj.text;
      typewriter.typeString(text).start();
    }

    if (obj.type.includes("missionOne")) {
      (0, _missions.missionOne)();
    }

    if (obj.type.includes("missionTwo")) {
      (0, _missions.missionTwo)();
    }

    if (obj.type.includes("missionThree")) {
      (0, _missions.missionThree)();
    }
  }

  exports.nextPage = nextPage = function nextPage() {
    refreshDialogue();

    if (storyCounter >= stories.length) {} else {
      storyCounter = storyCounter + 1;
      showDialogue(stories[storyCounter - 1]);
    }

    if (storyCounter >= 22) {
      randomCrew = crew[Math.floor(Math.random() * crew.length)];
      randomName = randomCrew.name;
      randomRole = randomCrew.role;
    }
  };

  exports.prevPage = prevPage = function prevPage() {
    refreshDialogue();

    if (storyCounter <= 1) {} else {
      storyCounter = storyCounter - 1;
      showDialogue(stories[storyCounter - 1]);
    }
  };
};
},{"./story":"javascript/story.js","./missions":"javascript/missions.js","./debug":"javascript/debug.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50967" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","javascript/framework.js"], null)
//# sourceMappingURL=/framework.cade4809.map