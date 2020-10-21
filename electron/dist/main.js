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
    var dialog = require('electron').dialog;
    win.webContents.session.on('will-download', function (event, downloadItem, webContents) {
        var fileName = dialog.showSaveDialog({
            defaultPath: "PROPUESTA",
            filters: [
                { name: 'Hoja de cálculo de Microsoft Excel', extensions: ['.xlsx'] },
                { name: 'PDF Document', extensions: ['.pdf'] }
            ]
        });
        downloadItem.setSavePath("No se donde va esto");
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, "../../dist/Konex/index.html"),
        protocol: 'file:',
        slashes: true
    }));
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