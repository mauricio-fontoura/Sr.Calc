const {app, BrowserWindow, Menu} = require('electron');
const path = require('node:path');
// JANELA PRINCIPAL

async function createWindow (){
   const win = new BrowserWindow({
    maxWidth:300,
    maxHeight:420,
    minWidth:300,
    minHeight:420,
    webPreferences:{
      preload: path.join(__dirname, 'preload.js'),
      
    }
  });
  await win.loadFile('src/edit/index.html');
};

// SISTEMAS | LINUX & WINDOWNS 
app.whenReady().then(()=>{
  createWindow();
// SITEMAS MAC
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()});

});
