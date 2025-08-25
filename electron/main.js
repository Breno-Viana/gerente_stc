const {app, BrowserWindow, Menu, ipcMain} = require('electron')
const path = require('node:path')


Menu.setApplicationMenu(null)

function bootApp() {
  const bootWindow = new BrowserWindow({
    width: 1300,
    height: 800,
    webPreferences:{
      preload:path.join(__dirname, 'preload.js')
    }
  })

  console.log(__dirname)
  // bootWindow.webContents.openDevTools()
  bootWindow.loadFile(path.join(__dirname, '../dist/treasury_desk_manager/browser/index.html'))
}


app.whenReady()
  .then(() => {
    ipcMain.handle('hello', ()=>{
      console.log('Hello Do Electron')
    })
  }).then(bootApp)
