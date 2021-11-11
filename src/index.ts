import { app, BrowserWindow } from 'electron';
import * as path from 'path';

// function createWindow () {
//   const win = new BrowserWindow({
//     width: 800,
//     height: 600
//   })
//
//   win.loadFile('./index.html')
// }
//
// app.whenReady().then(() => {
//   console.log('app starting')
//   createWindow()
// })

app.on('ready', () => {
  console.log('App is ready');
});

const win = new BrowserWindow({
  width: 600,
  height: 400
});

const indexHTML = path.join(__dirname + '/index.html');
  win.loadFile(indexHTML).then(() => {
    // IMPLEMENT FANCY STUFF HERE
});
