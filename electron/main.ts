// Import necesarios
import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';


let win: BrowserWindow;
function createWindow() {
  win = new BrowserWindow({ 
    width: 800, 
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      nativeWindowOpen: true, //**** add this**
    },
  });

  const { dialog } = require('electron');
  win.webContents.session.on('will-download', (event, downloadItem, webContents) => {

  var fileName = dialog.showSaveDialog({
    defaultPath: "descargas", 
    filters: [
      { name: 'Hoja de cálculo de Microsoft Excel', extensions: ['.xlsx'] },
      { name: 'PDF Document', extensions: ['.pdf'] }]
  });
  
  downloadItem.setSavePath("Propuesta");
  
});

  win.loadURL(
      url.format({
          pathname: path.join(__dirname, `../../dist/Konex/index.html`),
          protocol: 'file:',
          slashes: true
      })
  );
  win.webContents.openDevTools();
  win.removeMenu();
  win.on('closed', () => {
    win = null;
  });
}
// // Para ver el estado de la app
app.on('ready', createWindow)

app.on('activate', () => {
  if (win === null) {
      createWindow()
  }
})

