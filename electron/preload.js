const { contextBridge,ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('api', {
  hello: ()=> ipcRenderer.invoke('hello')
})
