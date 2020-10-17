// Import necesarios
import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';


let win: BrowserWindow;
function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });

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