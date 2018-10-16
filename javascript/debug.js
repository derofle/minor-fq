// module "debug.js"
import { nextPage, prevPage } from './framework';

const debug = function() {
            document.onkeydown = function(e) {
                switch (e.keyCode) {
                    case 37:
                        prevPage();
                        break;
                    case 39:
                        nextPage();
                        break;
                        /*
                    case 32:
                        refreshDialogue();
                        break;
                    */ 
                }   
            };
}

export { debug };
