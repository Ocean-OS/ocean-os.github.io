const fs = require('fs');
const path = require('path');
const {shell} = require('electron');
window.onload = function(){
    const $ = {
        id: function(i){return document.getElementById(i);},
        className: function(c){return document.getElementsByClassName(c);},
    };
    window.newFile = {
        appName: "",
        appIcon: "",
        appAuthor: "",
        appDate: "",
        appFolder: "",
        appResources: {
            win32: {
                arm64: {
                    available: true,
                    fileType: "",
                    resourceUrl: "",
                },
                ia32: {
                    available: true,
                    fileType: "",
                    resourceUrl: "",
                },
                x64: {
                    available: true,
                    fileType: "",
                    resourceUrl: "",
                }
            },
            darwin: {
                arm64: {
                    available: true,
                    fileType: "",
                    resourceUrl: "",
                },
                x64: {
                    available: true,
                    fileType: "",
                    resourceUrl: "",
                }
            },
            linux: {
                arm64: {
                    available: true,
                    fileType: "",
                    resourceUrl: "",
                },
                x64: {
                    available: true,
                    fileType: "",
                    resourceUrl: "",
                }
            }
        },
        appInstallerStyle: {
            bg_color: "",
            color: "",
            font: "",
            button_cc: "",
        }
    };
    $.id("saveAppInfo").onclick = function(){
        window.newFile.appName = $.id('appName').value;
        window.newFile.appAuthor = $.id('appAuthor').value;
        window.newFile.appDate = $.id('appDate').value;
        window.newFile.appFolder = $.id('appFolder').value;
        window.newFile.appIcon = $.id('appIcon').value;
        $.className('resources')[0].hidden = false;
    };
    $.id("saveAppResources").onclick = function(){
        if(!$.id("appResourcesWindowsAvailable").checked){
            window.newFile.appResources.win32.arm64.resourceUrl = $.id('appResourcesWindowsArm64').value;
            window.newFile.appResources.win32.arm64.available = true;
            window.newFile.appResources.win32.arm64.fileType = window.newFile.appResources.win32.arm64.resourceUrl.split(".")[window.newFile.appResources.win32.arm64.resourceUrl.split(".").length-1];
            window.newFile.appResources.win32.x64.resourceUrl = $.id('appResourcesWindowsX64').value;
            window.newFile.appResources.win32.x64.available = true;
            window.newFile.appResources.win32.x64.fileType = window.newFile.appResources.win32.x64.resourceUrl.split(".")[window.newFile.appResources.win32.x64.resourceUrl.split(".").length-1];
            window.newFile.appResources.win32.ia32.resourceUrl = $.id('appResourcesWindowsIa32').value;
            window.newFile.appResources.win32.ia32.available = true;
            window.newFile.appResources.win32.ia32.fileType = window.newFile.appResources.win32.ia32.resourceUrl.split(".")[window.newFile.appResources.win32.ia32.resourceUrl.split(".").length-1];
        };
        if(!$.id("appResourcesLinuxAvailable").checked){
            window.newFile.appResources.linux.arm64.resourceUrl = $.id('appResourcesLinuxArm64').value;
            window.newFile.appResources.linux.arm64.available = true;
            window.newFile.appResources.linux.arm64.fileType = window.newFile.appResources.linux.arm64.resourceUrl.split(".")[window.newFile.appResources.linux.arm64.resourceUrl.split(".").length-1];
            window.newFile.appResources.linux.x64.resourceUrl = $.id('appResourcesLinuxX64').value;
            window.newFile.appResources.linux.x64.available = true;
            window.newFile.appResources.linux.x64.fileType = window.newFile.appResources.linux.x64.resourceUrl.split(".")[window.newFile.appResources.linux.x64.resourceUrl.split(".").length-1];
        };
        if(!$.id("appResourcesMacAvailable").checked){
            window.newFile.appResources.darwin.arm64.resourceUrl = $.id('appResourcesMacArm64').value;
            window.newFile.appResources.darwin.arm64.available = true;
            window.newFile.appResources.darwin.arm64.fileType = window.newFile.appResources.darwin.arm64.resourceUrl.split(".")[window.newFile.appResources.darwin.arm64.resourceUrl.split(".").length-1];
            window.newFile.appResources.darwin.x64.resourceUrl = $.id('appResourcesMacX64').value;
            window.newFile.appResources.darwin.x64.available = true;
            window.newFile.appResources.darwin.x64.fileType = window.newFile.appResources.darwin.x64.resourceUrl.split(".")[window.newFile.appResources.darwin.x64.resourceUrl.split(".").length-1];
        };
        $.className("style")[0].hidden = false;
    }
    $.id('appStylePreview').onclick = function(){
	window.newFile.appName = $.id('appName').value;
        window.newFile.appAuthor = $.id('appAuthor').value;
        window.newFile.appDate = $.id('appDate').value;
        window.newFile.appFolder = $.id('appFolder').value;
        window.newFile.appIcon = $.id('appIcon').value;
        if(!$.id("appResourcesWindowsAvailable").checked){
            window.newFile.appResources.win32.arm64.resourceUrl = $.id('appResourcesWindowsArm64').value;
            window.newFile.appResources.win32.arm64.available = true;
            window.newFile.appResources.win32.arm64.fileType = window.newFile.appResources.win32.arm64.resourceUrl.split(".")[window.newFile.appResources.win32.arm64.resourceUrl.split(".").length-1];
            window.newFile.appResources.win32.x64.resourceUrl = $.id('appResourcesWindowsX64').value;
            window.newFile.appResources.win32.x64.available = true;
            window.newFile.appResources.win32.x64.fileType = window.newFile.appResources.win32.x64.resourceUrl.split(".")[window.newFile.appResources.win32.x64.resourceUrl.split(".").length-1];
            window.newFile.appResources.win32.ia32.resourceUrl = $.id('appResourcesWindowsIa32').value;
            window.newFile.appResources.win32.ia32.available = true;
            window.newFile.appResources.win32.ia32.fileType = window.newFile.appResources.win32.ia32.resourceUrl.split(".")[window.newFile.appResources.win32.ia32.resourceUrl.split(".").length-1];
        };
        if(!$.id("appResourcesLinuxAvailable").checked){
            window.newFile.appResources.linux.arm64.resourceUrl = $.id('appResourcesLinuxArm64').value;
            window.newFile.appResources.linux.arm64.available = true;
            window.newFile.appResources.linux.arm64.fileType = window.newFile.appResources.linux.arm64.resourceUrl.split(".")[window.newFile.appResources.linux.arm64.resourceUrl.split(".").length-1];
            window.newFile.appResources.linux.x64.resourceUrl = $.id('appResourcesLinuxX64').value;
            window.newFile.appResources.linux.x64.available = true;
            window.newFile.appResources.linux.x64.fileType = window.newFile.appResources.linux.x64.resourceUrl.split(".")[window.newFile.appResources.linux.x64.resourceUrl.split(".").length-1];
        };
        if(!$.id("appResourcesMacAvailable").checked){
            window.newFile.appResources.darwin.arm64.resourceUrl = $.id('appResourcesMacArm64').value;
            window.newFile.appResources.darwin.arm64.available = true;
            window.newFile.appResources.darwin.arm64.fileType = window.newFile.appResources.darwin.arm64.resourceUrl.split(".")[window.newFile.appResources.darwin.arm64.resourceUrl.split(".").length-1];
            window.newFile.appResources.darwin.x64.resourceUrl = $.id('appResourcesMacX64').value;
            window.newFile.appResources.darwin.x64.available = true;
            window.newFile.appResources.darwin.x64.fileType = window.newFile.appResources.darwin.x64.resourceUrl.split(".")[window.newFile.appResources.darwin.x64.resourceUrl.split(".").length-1];
        };
        var bg_color = $.id("appStyleBgColor").value;
        var color = $.id("appStyleColor").value;
        var font = $.id("appStyleFont").value;
        var button_cc;
        if($.id("appStyleButton").value == "lighter"){
            button_cc = 20;
        }else{
            button_cc = -20;
        }
        var buttonColor = hexToRgb(bg_color);
        buttonColor.r+=button_cc;
        buttonColor.g+=button_cc;
        buttonColor.b+=button_cc;
        var bC = rgbToHex(buttonColor.r, buttonColor.g, buttonColor.b);
        var bh = rgbToHex(buttonColor.r+5, buttonColor.g+5, buttonColor.b+5);
        var style = `
    body{background-color:${bg_color};color:${color};font-family:'${font}';}
    button{background-color:${bC};color:${color};font-family:'${font}';border:none;outline:none;border-radius:5px;padding:5px;font-size:90%;}
    button:hover{background-color:${bh};outline:none;}
    progress::-webkit-progress-value{
        background-color: rgb(82, 183, 86);
    }
    progress::-webkit-progress-bar{
        background-color: ${bC};
        border-radius: 0px;
    }
    progress{
        width: 100%;
        color: white;
        border-radius: 0px;
    }`;
    var html = `<head><style>${style}</style><title>${window.newFile.appName} Installer</title></head><body><h1><img src="${window.newFile.appIcon}" width="28em" height="28em">Install ${window.newFile.appName}</h1><h3>App Details</h3>Author: ${window.newFile.appAuthor}<br><div id="progress" hidden><progress id="progressbar" max="100" value="0"></progress><br><div id="progressState"></div></div><button onclick="" id='install'>Install</button>&nbsp;&nbsp;&nbsp;<button onclick="window.close()">Cancel</button><script></script></body>`;
    fs.writeFileSync(path.join(__dirname,"temp.html"),html);
    window.open("temp.html");
    }
    $.id('appFileBuild').onclick = function(){
        window.newFile.appName = $.id('appName').value;
        window.newFile.appAuthor = $.id('appAuthor').value;
        window.newFile.appDate = $.id('appDate').value;
        window.newFile.appFolder = $.id('appFolder').value;
        window.newFile.appIcon = $.id('appIcon').value;
        if(!$.id("appResourcesWindowsAvailable").checked){
            window.newFile.appResources.win32.arm64.resourceUrl = $.id('appResourcesWindowsArm64').value;
            window.newFile.appResources.win32.arm64.available = true;
            window.newFile.appResources.win32.arm64.fileType = window.newFile.appResources.win32.arm64.resourceUrl.split(".")[window.newFile.appResources.win32.arm64.resourceUrl.split(".").length-1];
            window.newFile.appResources.win32.x64.resourceUrl = $.id('appResourcesWindowsX64').value;
            window.newFile.appResources.win32.x64.available = true;
            window.newFile.appResources.win32.x64.fileType = window.newFile.appResources.win32.x64.resourceUrl.split(".")[window.newFile.appResources.win32.x64.resourceUrl.split(".").length-1];
            window.newFile.appResources.win32.ia32.resourceUrl = $.id('appResourcesWindowsIa32').value;
            window.newFile.appResources.win32.ia32.available = true;
            window.newFile.appResources.win32.ia32.fileType = window.newFile.appResources.win32.ia32.resourceUrl.split(".")[window.newFile.appResources.win32.ia32.resourceUrl.split(".").length-1];
        };
        if(!$.id("appResourcesLinuxAvailable").checked){
            window.newFile.appResources.linux.arm64.resourceUrl = $.id('appResourcesLinuxArm64').value;
            window.newFile.appResources.linux.arm64.available = true;
            window.newFile.appResources.linux.arm64.fileType = window.newFile.appResources.linux.arm64.resourceUrl.split(".")[window.newFile.appResources.linux.arm64.resourceUrl.split(".").length-1];
            window.newFile.appResources.linux.x64.resourceUrl = $.id('appResourcesLinuxX64').value;
            window.newFile.appResources.linux.x64.available = true;
            window.newFile.appResources.linux.x64.fileType = window.newFile.appResources.linux.x64.resourceUrl.split(".")[window.newFile.appResources.linux.x64.resourceUrl.split(".").length-1];
        };
        if(!$.id("appResourcesMacAvailable").checked){
            window.newFile.appResources.darwin.arm64.resourceUrl = $.id('appResourcesMacArm64').value;
            window.newFile.appResources.darwin.arm64.available = true;
            window.newFile.appResources.darwin.arm64.fileType = window.newFile.appResources.darwin.arm64.resourceUrl.split(".")[window.newFile.appResources.darwin.arm64.resourceUrl.split(".").length-1];
            window.newFile.appResources.darwin.x64.resourceUrl = $.id('appResourcesMacX64').value;
            window.newFile.appResources.darwin.x64.available = true;
            window.newFile.appResources.darwin.x64.fileType = window.newFile.appResources.darwin.x64.resourceUrl.split(".")[window.newFile.appResources.darwin.x64.resourceUrl.split(".").length-1];
        };
        var bg_color = $.id("appStyleBgColor").value;
        var color = $.id("appStyleColor").value;
        var font = $.id("appStyleFont").value;
        window.newFile.appInstallerStyle.bg_color = bg_color;
        window.newFile.appInstallerStyle.color = color;
        window.newFile.appInstallerStyle.font = font;
        window.newFile.appInstallerStyle.button_cc = $.id("appStyleButton").value;
        if(!fs.existsSync(path.join(__dirname, "dist"))) fs.mkdirSync(path.join(__dirname, "dist"));
        fs.writeFileSync(path.join(__dirname, "dist", window.newFile.appName + ".jinst"), JSON.stringify(window.newFile));
        alert("Your JINST file has been generated! It can be found in the folder that will open now.");
        shell.showItemInFolder(path.join(__dirname, "dist",window.newFile.appName+".jinst"));

    }
}
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};