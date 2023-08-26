localStorage.clear();
var gameMods = [];
window.gameShaders = [];
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
function runShaders() {
    if(window.shaderLoaded){
    if(window.gameShaders !== []){
        var shaderData = [];
        shaderData.push(true);
        var shaderToRun = window.gameShaders[0]; // Runs only one shader to avoid crashes
        if(shaderToRun.blockRender !== ""){
            shaderData.push(eval("JSON.stringify({blockRender: true, script: '" + shaderToRun.blockRender + "'}))"));
        }else{
            shaderData.push(JSON.stringify({blockRender: false}));
        }
        if(shaderToRun.shadowRender !== ""){
            shaderData.push(eval("JSON.stringify({shadowRender: true, script: '" + shaderToRun.shadowRender + "'}))"));
        }else{
            shaderData.push(JSON.stringify({shadowRender: false}));
        }
    }else{
        shaderData.push(false);
    }
    return shaderData;
    }else{
        return [false];
    }
}