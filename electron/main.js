const {app, BrowserWindow, Menu, ipcMain, dialog} = require('electron')
const path = require('node:path')


Menu.setApplicationMenu(null)
let bootWindow

function bootApp() {
  bootWindow = new BrowserWindow({
    minWidth: 990,
    minHeight: 500,
    height: 800,
    width: 1300,
    webPreferences: {
      preload: path.join(__dirname,'preload.js')
    }
  })

  bootWindow.webContents.openDevTools()
  bootWindow.loadFile(path.join(__dirname, '../dist/treasury_desk_manager/browser/index.html'))
}


app.whenReady()
  .then(bootApp)
  .then(() => {
    ipcMain.handle("invoke-alert", (event, message) => {
      dialog.showMessageBox(bootWindow, {
        buttons: ['OK'],
        type: 'warning',
        title: 'Alerta',
        message: message
      })
    })
  })
