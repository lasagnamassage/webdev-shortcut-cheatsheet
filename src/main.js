const electron = require('electron');
const path = require('path');
const { app, Tray, Menu, globalShortcut, BrowserWindow } = electron;

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    win.loadFile('src/panel.html')
}

  

app.on('ready', _ => {
    const tray = new Tray(path.join("src","icon.png"));

    globalShortcut.register('CommandOrControl+`', () => {
        console.log('Electron loves global shortcuts!')
        createWindow()
    })

    const contextMenu = Menu.buildFromTemplate([
        { 
            label: 'Wow', 
            click: _ => console.log('wow')
        },
        {
            label:'Awesome',
            click: _ => console.log("awesome")
        }
    ])
    tray.setContextMenu(contextMenu);
});