// Import necesarios
import { app, BrowserWindow, globalShortcut } from 'electron';
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

  win.loadURL(
      url.format({
          pathname: path.join(__dirname, `../../dist/Konex/index.html`),
          protocol: 'file:',
      })
  );

  win.webContents.session.on('will-download', (event, item, webContents) => {
    // Set the save path, making Electron not to prompt a save dialog.
    //item.setSavePath('/tmp/save.pdf')
  
    item.on('updated', (event, state) => {
      if (state === 'interrupted') {
        console.log('Download is interrupted but can be resumed')
      } else if (state === 'progressing') {
        if (item.isPaused()) {
          console.log('Download is paused')
        } else {
          console.log(`Received bytes: ${item.getReceivedBytes()}`)
        }
      }
    })
    item.once('done', (event, state) => {
      if (state === 'completed') {
        console.log('Download successfully')
      } else {
        console.log(`Download failed: ${state}`)
      }
    })
  })

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

