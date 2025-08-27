const {app, BrowserWindow, Menu, ipcMain} = require('electron')
const path = require('node:path')


Menu.setApplicationMenu(null)

function bootApp() {
  const bootWindow = new BrowserWindow({
    minWidth: 300,
    minHeight: 100,
    height: 800,
    width:1300,
    webPreferences:{
      preload:path.join(__dirname, 'preload.js')
    }
  })

  // bootWindow.webContents.openDevTools()
  bootWindow.loadFile(path.join(__dirname, '../dist/treasury_desk_manager/browser/index.html'))
}


app.whenReady()
  .then(() => {
    ipcMain.handle('hello', (str)=>{
      console.log('Hello Do Electron')
    })
  }).then(bootApp)
