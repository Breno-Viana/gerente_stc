const {contextBridge, ipcRenderer} = require('electron')


contextBridge.exposeInMainWorld('api',{
  showWarning: (message)=> ipcRenderer.invoke('invoke-alert', message)
})
