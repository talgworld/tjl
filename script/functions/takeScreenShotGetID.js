const { app, globalShortcut, clipboard } = require('electron');
const { screen, BrowserWindow } = require('electron');

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const mainWindow = new BrowserWindow({
    width: 1,
    height: 1,
    x: width,
    y: height,
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  globalShortcut.register('CommandOrControl+Shift+C', () => {
    // Add logic to capture the selected area and take a screenshot
    mainWindow.webContents.capturePage().then(image => {
      // Convert the image to a data URL
      const screenshotUrl = image.toDataURL();

      // Prompt the user to enter a number from the screenshot
      const number = prompt('Please select and enter the number from the screenshot:');

      // Copy the number to the clipboard
      clipboard.writeText(number);
    });
  });
}

app.whenReady().then(() => {
  createWindow();
});

app.on('will-quit', function () {
  globalShortcut.unregisterAll();
});
