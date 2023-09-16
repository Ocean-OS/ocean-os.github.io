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
"./Beginning.mp3"];
var musicPlaying = new Audio(musicFiles[Math.round(Math.random()*(musicFiles.length-1))]);
musicPlaying.loop = false;
musicPlaying.addEventListener("ended", function(){
    musicPlaying.src = musicFiles[Math.round(Math.random()*(musicFiles.length-1))];
});
musicPlaying.oncanplaythrough = function(){
  if(!musicPause){
    musicPlaying.play();
  }
}
musicPlaying.onpause = function(){
    if(!musicPause && musicPlaying.canplaythrough){
        musicPlaying.play();
    }
}
