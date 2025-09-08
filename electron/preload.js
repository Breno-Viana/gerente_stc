const { contextBridge,ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('api', {
  hello: (str:string)=> ipcRenderer.invoke('hello')

})
