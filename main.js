let electron, {app, BrowserWindow} = require('electron')

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 700
  })
  mainWindow.setTitle('Electron Whatsapp')
  mainWindow.loadURL('https://web.whatsapp.com/')
  mainWindow.on('closed', () => {
    mainWindow = null
  })
})
