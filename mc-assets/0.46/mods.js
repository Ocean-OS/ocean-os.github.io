localStorage.clear();
const fs = require('fs');
const path = require('path');
var gameMods = [];
window.gameShaders = [];
function getModFiles() {
    var justCreated;
    if (!fs.existsSync(__dirname + '/mods')){
        fs.mkdirSync(__dirname + '/mods');
        var justCreated = true;
    }
    if(justCreated !== true){
        var modFileDir = fs.readdirSync(path.join(__dirname, 'mods'));
        window.gameModFiles = [];
        for(var modFileGet = 0; modFileGet < modFileDir.length; modFileGet++){
            if(path.extname(path.join(__dirname, 'mods') + modFileDir[modFileGet]) == ".js"){
                window.gameModFiles.push(fs.readFileSync(path.join(__dirname, 'mods') + modFileDir[modFileGet], "utf8"));
                eval(fs.readFileSync(path.join(__dirname, 'mods') + modFileDir[modFileGet], "utf8"));
            }
        }
    }
}

//Mod Checker and Analyzer
/*if(gameMods.length > 0){
    localStorage.getItem("modsActive", "true");
    var modNames = [];
    while(modNames.length < gameMods.length){
        modNames.push(gameMods[modNames.length].name);
    }   
}else{localStorage.setItem("modsActive", "false")}
*/
function runMods(){
    var modsRun = 0;
    var modIds = [];
    if(gameMods.length > 0){
        localStorage.setItem("modsActive", "true");
    }else{
        localStorage.setItem("modsActive", "false");
    }
    while(modsRun !== gameMods.length){
        gameMods[modsRun].id = modsRun.toString();
        if(gameMods[modsRun].version !== version){
            console.log("Error: " + gameMods[modsRun].name + " Mod failed to run, version is not compatible");
        }else{
            const modSafetyCheck = /((window)[\.;])|(atob)|(Buffer(\.from\(|;))|(location(\.|;))|(document(;|\.))/g;
            if(modSafetyCheck.test(gameMods[modsRun].script)){
                console.log(gameMods[modsRun].name + " Mod seems suspicious, skipping mod.");
            }else{
            eval("try{" + gameMods[modsRun].script + "}catch(err){console.log(err);}");
            console.log("Run " + gameMods[modsRun].name + " Mod Successfully.");}
        }
        modIds.push(gameMods[modsRun].id);
        modsRun++;
    }
    console.log("Ran all available mods");
    console.log(modIds);
    const allMods = modIds;
    window.mods = gameMods;
    return modIds;
}
function getModIds() {
    return allMods;
}
