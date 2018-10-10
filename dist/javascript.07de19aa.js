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
})({"javascript/javascript.js":[function(require,module,exports) {
window.onload = function () {
  // Getting the screen div from the HTML doc
  var screen = document.getElementById("screen"); // StoryCounter keeps track of the position within the story without grasping into the story array.

  var storyCounter = 1; // In the Story Array the pages will be saved and be navigated

  var storyArray = []; // Blank player name to fill in later on, its global so it can be used anywhere

  var playerName = ''; // Blank role array to fill in alter on, its global so it can be used anywhere

  var roleArray = [];
  var roleCount = 0;
  var randomRole = {};
  var randomName = ''; // This is the constructor of the Dialogue Objects

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

  ; // This calls the constructor and after that puts them in the Story Array

  function addDialogue(name, bg, text, type, code) {
    var d = new Dialogue(name, bg, text, type, code);
    storyArray.push(d);
  } // This function clears the array and then adds the objects into the array again, can be called during the playthrough, to for example input the playerName


  function refreshDialogue() {
    storyArray = [];
    addDialogue("Joksin Schura", "Appartment", "Hello?! Hello! Can you hear me? If you can read this message, please hit next in the lower right to let me know if I am not just talking to myself!");
    addDialogue("Joksin Schura", "Appartment", "Oh, hi there! Good! Someone found my hidden message! I\u2019m Joksin Schura, and I need your help! But first, how can I call you? Please input your name on the next screen, so I know what to call you!");
    addDialogue("Joksin Schura", "Appartment", "<b>Input your name!</b>", "mission", "<input id=\"inputName\">\n        <button id=\"inputNameButton\" type=\"button\">Submit</button>");
    addDialogue("Joksin Schura", "Appartment", "Is it true that your name is ".concat(playerName, "? Otherwise click on the No button to go back and input your name again!"), "confirm");
    addDialogue("Joksin Schura", "Appartment", "You were chosen to get this message and save Earth from this unfortunate fate, ".concat(playerName, "! You are the hero the universe and Earth needs!"));
    addDialogue("Joksin Schura", "Appartment", "Listen closely, ".concat(playerName, ", cause this message is only for you. You are the only one who can do this. You are the only one who can save Earth!\u201D"));
    addDialogue("Joksin Schura", "Boom", "There are plans from outer space to blow up the Earth to construct a themepark, called Snarfland, on the place that Earth is now! Even though I like themeparks, I don't like blowing up planets for it!");
    addDialogue("Joksin Schura", "Boom", "The ones behind these plans are called The Combined Supremacy, they convinced the Galactic Senate that Earth is a wasteland and there is no life to be found on it!");
    addDialogue("Joksin Schura", "Appartment", "But that's absoluteley not true, cause otherwise I would not have been able to communicate with you!");
    addDialogue("Joksin Schura", "Appartment", "You are the chosen one to save the Earth from this unfortunate faith!, ".concat(playerName, "!"));
    addDialogue("Joksin Schura", "Appartment", "Sadly my knowledge about Earth also tells me that Earth does not have spaceship capable of going in to deep space just yet.");
    addDialogue("Joksin Schura", "Appartment", "But wait, someone else is intercepting my signal, maybe he can help you, ".concat(playerName, "!"));
    addDialogue("Joksin Schura", "Appartment", "Decrypt coded message!</br> Apply cesarean cypher to the signal and find out who else is intercepting my signal! The signal = PIFJSLIQ", "mission", "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/856px-Caesar3.svg.png\" id=\"cypherimg\"></img>\n             <input id=\"missionone\">\n            <button id=\"missiononebutton\" type=\"button\">Submit</button>\n             <p id=\"wrongInput\"></p>\n         ");
    addDialogue("Slimvolt", "Lab", "Oh hello there, ".concat(playerName, "! I'm Professor Slimvolt! I also retrieved the message from the alien Joksin and I think that I can help you!"));
    addDialogue("Slimvolt", "Lab", "I have a machine right here that can help you, wait let me get it, hold on for a second!");
    addDialogue("none", "Lab", "Here I got it!");
    addDialogue("Slimvolt", "Lab", "This here is what I call a Turbo Space Engine, it is one of a kind and it is probably able to bring you guys in to deeper space!");
    addDialogue("Slimvolt", "Lab", "I just made it yesterday and I could use some guinea pigs, erhh, brave spacefarers to try it out, like you ".concat(playerName, "!"));
    addDialogue("Slimvolt", "Lab", "But right now you guys do not seem up to that task, you don\u2019t seem like space farers and you don\u2019t have the resources to go in to space! So there is some stuff to do before I give you guys my Turbo Space Engine!");
    addDialogue("Slimvolt", "Lab", "You cannot do this alone, ".concat(playerName, ", you need people to help you, for in space. So it\u2019s up to you guys to find people who are willing to help you on your journey! Good luck!"));
    addDialogue("Slimvolt", "Lab", "Here will be the mission where they have to gather a crew and give them roles.", 'mission', "<label id=\"labelName\">Name: </label><input id=\"nameRoleInput\">\n        <label id=\"labelRole\">Role: </label><input id=\"roleRoleInput\">\n        <button id=\"roleInputButton\" type=\"button\">Add to crew</button>\n        <button id=\"roleInputDoneButton\" type=\"button\">Done making a crew</button>\n         <p id=\"added\"></p>\n         <p id=\"showcrew\"></p>\n         ");
    addDialogue("Slimvolt", "Lab", "Are you sure you got your whole crew, ".concat(playerName, "?"), "confirm");
    addDialogue("Slimvolt", "Lab", "I see, so this is your crew! I really like ".concat(randomName, " as the ").concat(randomRole, "!"));
    console.log(storyArray);
  } // Calling the startup refresh dialogue function


  refreshDialogue(); // Getting the start button and using it to load the first object in the array

  document.getElementById('startButton').addEventListener("click", function () {
    showDialogue(storyArray[0]);
  }); // The actual function to show the objects on the screen

  function showDialogue(obj) {
    // Defines what background is going to be used.
    if (obj.bg.includes("Appartment")) {
      obj.bg = "url('http://fqminor.nl/images/spaceship.png')";
    } else if (obj.bg.includes("Lab")) {
      obj.bg = "url('http://fqminor.nl/images/etheria.png')";
    } else if (obj.bg.includes("Boom")) {
      obj.bg = "url('http://fqminor.nl/images/2.png')";
    } // Defines which sprite is going to used for the characters


    if (obj.name.includes("Joksin")) {
      obj.sprite = "http://fqminor.nl/images/joksin.png";
    } else if (obj.name.includes("Slimvolt")) {
      obj.sprite = "http://fqminor.nl/images/slimvolt.png";
    } else if (obj.name.includes("none")) {
      obj.sprite = "";
    } // Changes the background to the background of the object


    document.body.style.backgroundImage = obj.bg; // Implements the information from the object into the HTML and adds the next button to it

    if (obj.type.includes("speech") && obj.name.includes("none") == false) {
      screen.innerHTML = "\n                <img src=\"".concat(obj.sprite, "\" id=\"speechsprite\"></img>\n                <div id='speechname'><p>").concat(obj.name, "</p></div>\n                <div id='dialogue'><p id=\"paragraph\"></p></div>\n                <button id='next'>Next</button>\n                    ");
      var nextButton = document.getElementById('next').addEventListener("click", function () {
        nextPage();
      }); // This will load the HTML for the missions, mostly the difference is the ID's that are being used in CSS
    } else if (obj.type.includes("mission")) {
      screen.innerHTML = "\n                <img src=\"".concat(obj.sprite, "\" id=\"missionsprite\"></img>\n                <div id='missionname'><p>").concat(obj.name, "</p></div>\n                <div id='mission'><p>").concat(obj.text, "</p><div id=\"codediv\">").concat(obj.code, "</div></div>\n                    "); // If its a confirm page, there will also be a previous button present
    } else if (obj.type.includes("confirm")) {
      screen.innerHTML = "\n                <img src=\"".concat(obj.sprite, "\" id=\"speechsprite\"></img>\n                <div id='speechname'><p>").concat(obj.name, "</p></div>\n                <div id='dialogue'><p id=\"paragraph\"></p></div>\n                <button id='next'>Yes</button>\n                <button id='prev'>No</button>\n                    ");

      var _nextButton = document.getElementById('next').addEventListener("click", function () {
        nextPage();
      });

      var prevButton = document.getElementById('prev').addEventListener("click", function () {
        prevPage();
      });
    } else if (obj.type.includes("speech") && obj.name.includes("none")) {
      screen.innerHTML = "\n                <div id='dialogue'><p id=\"paragraph\"></p></div>\n                <button id='next'>Next</button>\n                    ";

      var _nextButton2 = document.getElementById('next').addEventListener("click", function () {
        nextPage();
      });
    } // This is for the TypewriterJS, this will make sure that on the speech and confirm pages, the text is typed out


    if (obj.type.includes("speech") || obj.type.includes("confirm")) {
      var p = document.getElementById("paragraph");
      var typewriter = new Typewriter(p, {
        loop: false,
        autoStart: true,
        cursor: "|",
        delay: 30
      });
      typewriter.options.delay = 25;
      document.getElementById("dialogue").addEventListener("click", function () {
        typewriter.options.delay = 0;
      });
      var _text = obj.text;
      typewriter.typeString(_text).start();
    } // This is more for debugging, so that you can switch pages with your arrow keys


    document.onkeydown = function (e) {
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
    }; // This function is being called to go to the next page


    function nextPage() {
      console.log(storyCounter);

      if (storyCounter >= storyArray.length) {} else {
        storyCounter = storyCounter + 1;
        showDialogue(storyArray[storyCounter - 1]);
      }

      if (storyCounter >= 22) {
        randomCrew = roleArray[Math.floor(Math.random() * roleArray.length)];
        randomName = randomCrew.name;
        randomRole = randomCrew.role;
        refreshDialogue();
        console.log(randomCrew);
        console.log(randomName);
      }
    } // Same but for previous page


    function prevPage() {
      console.log(storyCounter);

      if (storyCounter <= 1) {} else {
        storyCounter = storyCounter - 1;
        showDialogue(storyArray[storyCounter - 1]);
      }
    } // This is a specific if statement for the 3rd page, so that you can input your name


    if (storyCounter === 3) {
      document.getElementById("inputNameButton").addEventListener("click", function () {
        var str = document.getElementById("inputName").value;
        console.log(str);
        playerName = str;
        refreshDialogue();
        storyCounter = storyCounter + 1;
        showDialogue(storyArray[storyCounter - 1]);
      });
    } // This is a specific if statement for the 13th page, so that you can input the code and it checks if its right or wrong


    if (storyCounter === 13) {
      document.getElementById("missiononebutton").addEventListener("click", function () {
        var text = "";
        var str = document.getElementById("missionone").value;
        var res = str.toUpperCase();
        console.log(res);

        if (res.includes("SLIMVOLT")) {
          nextPage();
        } else {
          text = "Input wrong";
          document.getElementById("wrongInput").innerHTML = text;
        }
      });
    }

    if (storyCounter === 21) {
      document.getElementById("roleInputButton").addEventListener("click", function () {
        var name = document.getElementById("nameRoleInput").value;
        var role = document.getElementById("roleRoleInput").value;
        roleArray.push({
          name: name,
          role: role
        });
        text = "Crewmember added";
        document.getElementById("added").innerHTML = text;
        array = roleArray;
        document.getElementById("showcrew").innerHTML = "".concat(roleArray[roleCount].name, " ").concat(roleArray[roleCount].role, " ");
        console.log(roleArray);
        roleCount++;
        console.log(roleCount);
      });
      document.getElementById("roleInputDoneButton").addEventListener("click", function () {
        nextPage();
      });
    }
  }
};
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49783" + '/');

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
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","javascript/javascript.js"], null)
//# sourceMappingURL=/javascript.07de19aa.map