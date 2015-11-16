var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('window-all-closed', function(){
    if (process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('ready', function () {
    mainWindow = new BrowserWindow({width:400, height:300});
    mainWindow.loadUrl("file://" + __dirname + "/app/index.html");

    mainWindow.on('closed', function () {
        mainWindow =  null;
    });
})