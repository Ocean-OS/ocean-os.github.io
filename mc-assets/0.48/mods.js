localStorage.clear();
const modScript = "}catch(err){console.log(err);};function newBlock(json){if(!window.blockData.includes(json)){window.blockData.push(json);}}; function newTexture(json){if(!window.textures.includes(json)){window.textures.push(json);}};";
const modOtherScript = "function newBlock(json){if(!window.blockData.includes(json)){window.blockData.push(json);}}; function newTexture(json){if(!window.textures.includes(json)){window.textures.push(json);}};";
const fs = require('fs');
const path = require('path');
var gameMods = [];
window.gameMods = [];
window.gameShaders = [];
function getModFiles() {
    var justCreated;
    if (!fs.existsSync(__dirname + '\\mods')){
        fs.mkdirSync(__dirname + '\\mods');
        var justCreated = true;
    }
    if(justCreated !== true){
        var modFileDir = fs.readdirSync(__dirname + "\\mods");
        window.gameModFiles = [];
        window.blockData = [];
        window.textures = [];
        for(var modFileGet = 0; modFileGet < modFileDir.length; modFileGet++){
            if(window.gameModFiles[window.gameModFiles.length-1] !== fs.readFileSync(__dirname + "\\mods\\" + modFileDir[modFileGet], "utf8") || modFileGet == 0||modFileDir[modFileGet-1] !== modFileDir[modFileGet])
            if(path.extname(__dirname + "\\mods\\" + modFileDir[modFileGet]) == ".js"){
                window.gameModFiles.push(fs.readFileSync(__dirname + "\\mods\\" + modFileDir[modFileGet], "utf8"));
                eval(fs.readFileSync(__dirname + "\\mods\\" + modFileDir[modFileGet], "utf8") + modOtherScript);
                window.gameMods[window.gameMods.length-1] = (window.gameMods[window.gameMods.length-1]);
            }
        }
    }
}

function runMods(){
    window.blockData = [];
    window.textures = [];
    var modsRun = 0;
    if(window.gameMods.length > 0){
        localStorage.setItem("modsActive", "true");
    }else{
        localStorage.setItem("modsActive", "false");
    }
    while(modsRun !== window.gameMods.length){
        if(window.gameMods[modsRun].version !== version && (JSON.stringify(window.gameMods[modsRun-1]) !== JSON.stringify(window.gameMods[modsRun])||modsRun == 0)){
            console.log("Error: " + gameMods[modsRun].name + " Mod failed to run, version is not compatible");
        }else{
            const modSafetyCheck = /((window)[\.;])|(atob)|(Buffer(\.from\(|;))|(location(\.|;))|(document(;|\.))/g;
            if(modSafetyCheck.test(window.gameMods[modsRun].script)){
                console.log(window.gameMods[modsRun].name + " Mod seems suspicious, skipping mod.");
            }else{
            eval("try{" + window.gameMods[modsRun].script + modScript);
            console.log("Run " + gameMods[modsRun].name + " Mod Successfully.");}
        }
        modsRun++;
    }
    console.log("Ran all available mods");
    window.mods = window.gameMods;
}
function getModIds() {
    return allMods;
}
//Music
var musicFiles = [
  "Aria Math.mp3",
"Biome Fest.mp3",
"Blind Spots.mp3",
"Clark.mp3",
"Danny.mp3",
"Dreiton.mp3",
"Dry Hands.mp3",
"Haggstrom.mp3",
"Haunt Muskie.mp3",
"Living Mice.mp3",
"Mice On Venus.mp3",
"Minecraft.mp3",
"Moog City 2.mp3",
"Moog City.mp3",
"Shuniji.mp3",
"Subwoofer Lullaby.mp3",
"Wet Hands.mp3",
"Ki.mp3",
"Chris.mp3",
"Beginning.mp3",
"otherside.mp3",
"Taswell.mp3",
"Beginning 2.mp3",
"Mutation.mp3",
"Dead Voxel.mp3"];
var lastMusic;
var musicPlaying = new Audio();
var gettingMusic = true;
var checkingMusic = true;
checkingMusic = false;
musicPlaying.src = musicFiles[Math.round(Math.random()*(musicFiles.length-1))];
lastMusic = musicPlaying.src;
musicPlaying.loop = false;
musicPlaying.play();
musicPlaying.addEventListener("ended", function(){
  var gettingMusic = true;
    musicPlaying.src = musicFiles[Math.round(Math.random()*(musicFiles.length-1))];
    musicPlaying.play();
    gettingMusic = false;
});
musicPlaying.onpause = function(){
    if(!musicPause){
        musicPlaying.play();
    }
}
