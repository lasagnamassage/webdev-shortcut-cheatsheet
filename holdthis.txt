const electron = require('electron');
const path = require('path');
const { app, Tray, Menu } = electron;
const { app, globalShortcut } = require('electron');
const { BrowserWindow } = require('electron/main');

app.on('ready', _ => {
    const tray = new Tray(path.join("src","icon.png"));
    const contextMenu = Menu.buildFromTemplate([
        { 
            label: 'Wow',
            click: _ => console.log('wow')
        },
        {
            label:'Awesome',
            click: _ => console.log("awesome")
        }
        {
            label:'Close Shortcut'
            click: _=> BrowserWindow
        }
    ])
    tray.setContextMenu(contextMenu);
});

function createWindow () {

    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    })
  
  
    win.loadFile('src/index.html')
  
  
    win.webContents.openDevTools()
  }

app.whenReady().then(() => {
  // Register a 'CommandOrControl+X' shortcut listener.
  const ret = globalShortcut.register('CommandOrControl+?', () => {
    console.log('CommandOrControl+? is pressed')
  })

  if (!ret) {
    console.log('registration failed')
  }

  // Check whether a shortcut is registered.
  console.log(globalShortcut.isRegistered('CommandOrControl+?'))
})

app.on('will-quit', () => {
  // Unregister a shortcut.
  globalShortcut.unregister('CommandOrControl+?')

  // Unregister all shortcuts.
  globalShortcut.unregisterAll()
})

