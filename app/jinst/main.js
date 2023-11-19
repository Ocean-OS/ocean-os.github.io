//JINST App Installer v0.8 Alpha
//Created by computerguy. https://github.com/Ocean-OS/jinst
const {
    app,
    BrowserWindow,
    Tray
} = require('electron');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
app.setAsDefaultProtocolClient('jinst', process.execPath);
const nativeImage = require('electron').nativeImage;
let mainWindow;
function createWindow() {
    const icon = nativeImage.createFromDataURL("data:image/png;base64,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bnv2VABK4BMsAIJMc+vH1DMBKMLOtwgBCJHddwmvnglAGVyBABBkllc/xp4IQCEy2+nuWyAApcjsmyB7TwSgEJn9URCLsACKYZU7AEGGfgkLgBBTAQEgRFZ/13bkeQAUI6vf47UJC6AcWW3DmnseAMU4+B4hACFOAgJA8QFZeR4AxTgLCAAhLgICgIAAICAACIiAAAiIgAAgIAAICAACAoCACAiAgAgIAAICgIAAICACAiAgAgIgIAICgIAAICAACIiAAAiIgAAIiIAAICAACAgAAiIgAAIiIAACIiAACAgAAgKAgAgIgIAICICACAgAAgKAgAAgIAICICACAiAgAgKAgAAgIAAIiIAACIiAACAgAAgIAAICgIAICICACAgAAgKAgAAgIAAIiIAACIiAACAgAAgIAAIiIAACIiAAAiIgAAgIAAICgIAICICACAiAgAgIAAICgIAAICACAiAgAgK05fO836wW8/lkOp8v1tvD5S4gAgLwrftpPftygI0W24uACAjAl07Lj++n2HhzFRABAfj3jx6H6XOTbHEWEAEB+J/z7KVhdhMQAQH4j+3L42xyFBABAVp3XwUNtI+9gAgIIB9hDgIiIECzdm8NtWHdv9grIAC/cx29O9YWNX/DUEAAvnZfdjHYKr4KERCAL507mmzjan+nV0AAvrLubrbV+s1CAQH41W3c5XBbC4iAAI04dTzd6vwYS0AAfrbvfr59CoiAAPXbxhhwFX4lREAA/m0VZ8KdBERAgLrNY4246jabCAhAkn4MBrVt6BUQgPifX1X5hRABAfh/m7hTrq4/eCsgAH/bxx5zVf02r4AA/M8p/pyraTuvgAD85ZZgzs0ERECA+oxTDLqdgAgIUJt1mklXz1fSBQTgD6dUo66aaxABAfive7JRNxcQAQFqskw362r5PqGAAPzHNeWwExABAeoxSjnsNgIiIEAtdmmnXR1/oFBAABLeoNf0dUIBAYi7g7farYoCAnBPPu4mAiIggB9Amv0RREAAP4D0MO9quAUREKB52z4GXgV/GURAgOYZeAICEOLcz8QTEAEBSjfrZ+IdBURAgLLde5p4UwEREKBsh75GXvF/F0RAgMZN+hp5ewEREKBovY284r8KIiBA2479zTwBERCgZMv+Zl7pf5lQQIC2DfubeWsBERCgXPceZ17pK3kFBGjaqc+hJyACApRr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");
    const appIcon = new Tray(icon);
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        icon: icon,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    mainWindow.loadFile("index.html");
}

app.on('ready', function() {
    createWindow();
    mainWindow.webContents.once('dom-ready', () => {
        if (process.argv.length >= 2 && process.platform == "win32") {
            if (fs.existsSync(process.argv[1])) {
                mainWindow.loadFile(loadInstaller(process.argv[1]));
            } else {
                var q = path.join(app.getPath('temp'), 'jinstFiles', Date.now().toString() + '.jinst');
                async function loadFromWeb(p) {
                    fetch(decodeURIComponent(p.split("?url=")[1]))
                    .then(res=>res.text())
                    .then(text => {
                    fs.writeFileSync(q, text);
                    mainWindow.loadFile(loadInstaller(q));
                })
                }
                loadFromWeb(process.argv[1]);
            }
        } else {
            mainWindow.loadFile("maker.html");
        }
    });
});
app.on('window-all-closed', () => {
    app.quit()
});
app.on('will-finish-launching', () => {
    app.on('open-file', (event, path) => {
        createWindow();
        mainWindow.webContents.once('dom-ready', () => {
            mainWindow.loadFile(loadInstaller(path));
        });
    });
});
const tempPath = path.join(app.getPath('temp').replaceAll("\\", "\\\\"), "jinst");
var loadInstaller = function(filepath) {
    var ready = false;
    if (!fs.existsSync(tempPath)) {
        fs.mkdirSync(tempPath);
    }
    var specs = {
        arch: process.arch,
        os: process.platform
    };
    var fd = JSON.parse(fs.readFileSync(filepath, "utf8"));
    var aR = fd.appResources[specs.os][specs.arch];
    if(path.parse(filepath).dir !== path.join(app.getPath('temp'), 'jinstFiles')){
    var aF = path.join(path.parse(filepath).dir, fd.appFolder).replaceAll("\\", "\\\\");}
    else{
        if(fd.appFolder.includes(":")){
            var aF = fd.appFolder.replaceAll("\\", "\\\\");
        }else{
            var aF = path.join(app.getPath("downloads"), fd.appFolder).replaceAll("\\", "\\\\");
        }
    }
    var s = fd.appInstallerStyle;
    var b = s.bg_color;
    if (b.split("")[0] == "#") {
        b = hexToRgb(b);
    } else if ((b.split("")[0] + b.split("")[1] + b.split("")[2] + b.split("")[3]) == "rgb(") {
        b.split("(")[b.split("(").length - 1].split(")")[0];
        if (b.includes(" ")) b.split(" ").join("");
        b.split(",");
        b = {
            r: b[0],
            g: b[1],
            b: b[2]
        };
    };
    if (s.button_cc == "darker") {
        b.r -= 20;
        b.g -= 20;
        b.b -= 20;
    } else if (s.button_cc == "lighter") {
        b.r += 20;
        b.g += 20;
        b.b += 20;
    }
    bh = rgbToHex(b.r + 5, b.g + 5, b.b + 5);
    b = rgbToHex(b.r, b.g, b.b);
    var style = `
    body{background-color:${s.bg_color};color:${s.color};font-family:'${s.font}';}
    button{background-color:${b};color:${s.color};font-family:'${s.font}';border:none;outline:none;border-radius:5px;padding:5px;font-size:90%;}
    button:hover{background-color:${bh};outline:none;}
    progress::-webkit-progress-value{
        background-color: rgb(82, 183, 86);
    }
    progress::-webkit-progress-bar{
        background-color: ${b};
        border-radius: 0px;
    }
    progress{
        width: 100%;
        color: white;
        border-radius: 0px;
    }`;
    var script = `
    const fs = require('fs');
    const path = require('path');
    var state = "";
    var increase;
    var progress = 0;
    function setProgress(){
        document.getElementById("progressbar").value = progress;
        document.getElementById("progressState").innerText = state;
    }
    const AdmZip = require("${path.join(path.join(__dirname, "adm-zip-0.5.10", "package"),"adm-zip.js").replaceAll("\\", "\\\\")}");
function extractZipFile(zipFilePath, outputDir) {
  var zip = new AdmZip(zipFilePath);
  zip.extractAllTo(outputDir);
}
    async function install(){
        if(${aR.available} == true){
            document.getElementById('install').hidden = true;
        document.getElementById("progress").hidden = false;
        state = "Fetching resources...";
        progress = 10;
        setProgress();
        var res = await fetch('${aR.resourceUrl}');
        var file = await res.arrayBuffer();
        file = Buffer.from(file);
        fs.writeFileSync('${path.join(tempPath, fd.appName,aR.resourceUrl.split("/")[aR.resourceUrl.split("/").length-1]).replaceAll("\\", "\\\\")}',file);
        state = "Saving files to temporary folder...";
        progress = 30;
        setProgress();
        if('${aR.fileType}' == 'jsar'){
            state = "Extracting files...";
            progress = 40;
            setProgress();
            var inpt = JSON.parse(fs.readFileSync('${path.join(tempPath, fd.appFolder,aR.resourceUrl.split("/")[aR.resourceUrl.split("/").length-1]).replaceAll("\\", "\\\\")}', 'utf-8'));
            var fp = '${aF}';
            if(!fs.existsSync('${aF}')){
                fs.mkdirSync('${aF}');
            };
            var files = inpt.files;
            var encoder = inpt.encoder;
            var d = inpt.dirs;
            state = "Making folders...";
            progress = 50;
            setProgress();
            increase = 30/d.length;
            for(var l = 0; l< d.length; l++){
                if(!fs.existsSync(path.join(fp,d[l].name))){
                    fs.mkdirSync(path.join(fp, d[l].name));
                }
            for(var f = 0; f<d[l].files.length;f++){
                fs.writeFileSync(path.join(fp,d[l].name,d[l].files[f].name),d[l].files[f].data, encoder);
            }
            progress+=increase;
            setProgress();
        }
        increase = 20/files.length;
        state = "Saving files to main app folder...";
        setProgress();
        for(var g = 0; g < files.length; g++){
            fs.writeFileSync(path.join(fp, files[g].name), files[g].data, encoder);
            progress+=increase;
            setProgress();
        }
        }else if('${aR.fileType}' == 'zip'){
            progress = 40;
            state = "Extracting files...";
            setProgress();
            if(!fs.existsSync('${aF}')){
                fs.mkdirSync('${aF}');
            }
            extractZipFile('${path.join(tempPath, fd.appName,aR.resourceUrl.split("/")[aR.resourceUrl.split("/").length-1]).replaceAll("\\", "\\\\")}','${aF}');
        }
        if(progress !== 100){
            progress = 100;
            state = "Finishing up...";
            setProgress();
        }
        }else{
            alert('Sorry, but the app you are trying to install is not available for your device.');
        }
        };`;
    var createPage = `<head><style>${style}</style><title>${fd.appName} Installer</title></head><body><h1><img src="${fd.appIcon}">Install ${fd.appName}</h1><h3>App Details</h3>Author: ${fd.appAuthor}<br><div id="progress" hidden><progress id="progressbar" max="100" value="0"></progress><br><div id="progressState"></div></div><button onclick="install()" id='install'>Install</button>&nbsp;&nbsp;&nbsp;<button onclick="window.close()">Cancel</button><script>${script}</script></body>`;
    if (!fs.existsSync(path.join(tempPath, fd.appName).replaceAll("\\", "\\\\"))) {
        fs.mkdirSync(path.join(tempPath, fd.appName).replaceAll("\\", "\\\\"));
    }
    fs.writeFileSync(path.join(tempPath, fd.appName, "index.html"), createPage);
    return ((path.join(tempPath, fd.appName, "index.html")));
};

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
