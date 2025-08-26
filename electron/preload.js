const { contextBridge,ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('api', {
  hello: (str)=> ipcRenderer.invoke('hello')

})
