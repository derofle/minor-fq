// module "debug.js"
import { nextPage, prevPage } from "./framework";

export default function debug() {
	document.onkeydown = function (e) {
		switch (e.keyCode) {
		case 37:
			prevPage();
			break;
		case 39:
			nextPage();
			break;
		default:
			// do nothing
        /*
        case 32:
        refreshDialogue();
    	break;
        */
		}
	};
}
