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
var lastMusic;
var musicPlaying = new Audio();
var gettingMusic = true;
var musicUnverifiedFiles = [];
var musicVerifiedFiles = [];
var checkingMusic = true;
if(typeof fs !== 'object'){
  const fs = require('fs');
}
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
