localStorage.clear();
var gameMods = [];
const fs = require('fs');
window.fs = fs;
const path = require('path');
window.path = path;
window.gameShaders = [];
function getModFiles() {
    var justCreated;
    if (!fs.existsSync(__dirname + '/mods')){
        fs.mkdirSync(__dirname + '/mods');
        var justCreated = true;
    }
    if(justCreated !== true){
        var modFileDir = fs.readdirSync(__dirname + "\\mods");
        window.gameModFiles = [];
        for(var modFileGet = 0; modFileGet < modFileDir.length; modFileGet++){
            if(path.extname(__dirname + "\\mods\\" + modFileDir[modFileGet]) == ".js"){
                window.gameModFiles.push(fs.readFileSync(__dirname + "\\mods\\" + modFileDir[modFileGet], "utf8"));
                eval(fs.readFileSync(__dirname + "\\mods\\" + modFileDir[modFileGet], "utf8"));
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
//Music
var musicFiles = [
  "./Aria Math.mp3",
"./Biome Fest.mp3",
"./Blind Spots.mp3",
"./Clark.mp3",
"./Danny.mp3",
"./Dreiton.mp3",
"./Dry Hands.mp3",
"./Haggstrom.mp3",
"./Haunt Muskie.mp3",
"./Living Mice.mp3",
"./Mice On Venus.mp3",
"./Minecraft.mp3",
"./Moog City 2.mp3",
"./Moog City.mp3",
"./Shuniji.mp3",
"./Subwoofer Lullaby.mp3",
"./Wet Hands.mp3",
"./Ki.mp3",
"./Chris.mp3",
"./Beginning.mp3",
"./otherside.mp3"];
window.onload = function(){
var lastMusic;
var musicPlaying = new Audio();
var gettingMusic = true;
var musicUnverifiedFiles = [];
var musicVerifiedFiles = [];
var checkingMusic = true;
for(var musicCheck = 0; musicCheck < musicFiles.length; musicCheck++){
  if(!fs.existsSync(musicFiles[musicCheck])){
    musicUnverifiedFiles.push(musicFiles[musicCheck]);
  }
}
for(var musicAdd = 0; musicAdd < musicFiles.length; musicAdd++){
  if(!musicFiles.includes(musicUnverifiedFiles[musicAdd])){
    musicVerifiedFiles.push(musicFiles[musicAdd]);
  }
}
musicFiles = musicVerifiedFiles;
checkingMusic = false;
musicPlaying.src = musicFiles[Math.round(Math.random()*(musicFiles.length-1))];
lastMusic = musicPlaying.src;
musicPlaying.loop = false;
musicPlaying.play();
musicPlaying.addEventListener("ended", function(){
  var gettingMusic = true;
  while(gettingMusic && lastMusic !== musicPlaying.src){
    musicPlaying.src = musicFiles[Math.round(Math.random()*(musicFiles.length-1))];
    if(musicPlaying.src !== lastMusic){
      lastMusic = musicPlaying.src;
      musicPlaying.play();
      gettingMusic = false;
    }else{
      gettingMusic = true;
    }
  }
});
musicPlaying.onpause = function(){
    if(!musicPause){
        musicPlaying.play();
    }
}
}
