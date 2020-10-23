"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import necesarios
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var win;
function createWindow() {
    win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            nativeWindowOpen: true,
        },
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, "../../dist/Konex/index.html"),
        protocol: 'file:',
    }));
    win.webContents.session.on('will-download', function (event, item, webContents) {
        // Set the save path, making Electron not to prompt a save dialog.
        //item.setSavePath('/tmp/save.pdf')
        item.on('updated', function (event, state) {
            if (state === 'interrupted') {
                console.log('Download is interrupted but can be resumed');
            }
            else if (state === 'progressing') {
                if (item.isPaused()) {
                    console.log('Download is paused');
                }
                else {
                    console.log("Received bytes: " + item.getReceivedBytes());
                }
            }
        });
        item.once('done', function (event, state) {
            if (state === 'completed') {
                console.log('Download successfully');
            }
            else {
                console.log("Download failed: " + state);
            }
        });
    });
    win.webContents.openDevTools();
    win.removeMenu();
    win.on('closed', function () {
        win = null;
    });
}
// // Para ver el estado de la app
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
//# sourceMappingURL=main.js.map