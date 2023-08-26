//Music
var musicFiles = [
  "./Aria%20Math.mp3",
"./Biome%20Fest.mp3",
"./Blind%20Spots.mp3",
"./Clark.mp3",
"./Danny.mp3",
"./Dreiton.mp3",
"./Dry%20Hands.mp3",
"./Haggstrom.mp3",
"./Haunt%20Muskie.mp3",
"./Living%20Mice.mp3",
"./Mice%20On%20Venus.mp3",
"./Minecraft.mp3",
"./Moog%20City%202.mp3",
"./Moog%20City.mp3",
"./Shuniji.mp3",
"./Subwoofer%20Lullaby.mp3",
"./Wet%20Hands.mp3",
"./Ki.mp3"];
var musicPlaying = new Audio(musicFiles[Math.round(Math.random()*(musicFiles.length-1))]);
musicPlaying.loop = false;
musicPlaying.play();
musicPlaying.addEventListener("ended", function(){
    musicPlaying.src = musicFiles[Math.round(Math.random()*(musicFiles.length-1))];
    musicPlaying.play();
});
musicPlaying.onpause = function(){
    if(!musicPause){
        musicPlaying.play();
    }
}
