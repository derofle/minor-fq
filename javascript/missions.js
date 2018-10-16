// module "missions.js"
import { nextPage } from './framework';


function missionOne () {
    document.getElementById("inputNameButton").addEventListener(`click`, function () {
        let str = document.getElementById("inputName").value;
        console.log(str);
        playerName = str;
        nextPage();    
    })
}

function missionTwo () {
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

function missionThree () {
    document.getElementById("roleInputButton").addEventListener(`click`, function () {
        let name = document.getElementById("nameRoleInput").value;
        let role = document.getElementById("roleRoleInput").value;
        crew.push( {
            name: name,
            role: role
        })
        let text = "Crewmember added";
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
export { missionOne, missionTwo, missionThree };