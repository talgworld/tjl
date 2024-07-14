const { app, BrowserWindow } = require('electron');
const { exec } = require('child_process');
const express = require('express');
const aplication = express();
const port = 5000;
let path = require('path')
let win;
let dir = path.resolve(__dirname, 'script')
// Serve static files from the 'public' directory
aplication.use(express.static(path.join(__dirname, 'public')));
aplication.use(express.json());
let mousepos;
let movewin = false;
let command

function createWindow() {
  win = new BrowserWindow({
    width: 200,
    height: 200,
    frame: false,
    resizable: false,
    transparent: true,
    alwaysOnTop:true,
    autoHideMenuBar: true, // Hide scrollbars
    icon: path.join(__dirname, 'design/tire-logo.png'), 
    webPreferences: {
      nodeIntegration: false, // Disable nodeIntegration
      contextIsolation: true, // Enable contextIsolation
      preload:[path.resolve(__dirname, 'preload.js'), path.resolve(__dirname, 'index.js')] // Preload script to provide access to certain modules
    }
  });
  // Prevent F11 key from toggling fullscreen mode
  win.webContents.on('before-input-event', (event, input) => {
    if (input.type === 'keyDown' && input.key === 'F11') {
      event.preventDefault();
    }
  });
  win.loadFile('index.html');
  // Set the window title
  win.setTitle('Tire Menu');

  // Get the actual content size and adjust the window size accordingly
  win.webContents.on('did-finish-load', () => {
    const contentSize = win.getContentSize();
    win.setSize(contentSize[0], contentSize[1]);
  });

  //mousepos
  aplication.post('/mousepos', (req, res) => {
    mousepos = req.body;
    if (mousepos) {
      movewin = true;
      //console.log('Received mouse position data:', mousepos);
      // Update the window position if movewin is true
      if (movewin==true) {
        win.setPosition(mousepos.x, mousepos.y);
        setTimeout(() => {
          movewin=false
        }, 1000);
      }
    } else {
      console.error('No mouse position data received');
    }
    res.sendStatus(200); // Send a response back to the client
  });
  const WebSocket = require('ws');

  const wss = new WebSocket.Server({ port: 8080 });

  wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(command) {
        if (command) {
            // Run cmd command
            exec(`cd "${dir}" && action ${command}`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                //console.log(`cd "${dir}" && action ${command}`)
                // console.log(`stdout: ${stdout}`);
                // console.log(`stderr: ${stderr}`);
            });
        }
    });
});


  //commands
  // aplication.post('/commands', (req, res) => {
  //   command = req.body.command;
  //   if (command) { //run cmd command
  //     exec(`cd "${dir}" && action ${command}`, (error, stdout, stderr) => {
  //       if (error) {
  //         console.error(`exec error: ${error}`);
  //         return;
  //       }
  //       //console.log(`stdout: ${stdout}`);
  //       //console.log(`stderr: ${stderr}`);
  //     });
  //   } else {
  //     console.error('No command received');
  //   }
  //   res.sendStatus(200); // Send a response back to the client
  // });

}

app.whenReady().then(() => {
  createWindow();
}).catch(err => console.error(err));

aplication.listen(port, () => console.log(`app listening on port ${port}!`));