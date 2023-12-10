const { app, BrowserWindow } = require("electron")
const path = require("path")

const scanner = require("./scanner")
const external = require("./external")


function createWindow() {
    const display = require("electron").screen.getPrimaryDisplay();

    // popup window location
    const win = new BrowserWindow({
        width: 750,
        height: 350,
        x: display.bounds.width - 750,
        y: display.bounds.height - 350,
        webPreferences: {
            devTools: true
            //preload: path.join(__dirname, 'preload.js')
        },
        alwaysOnTop: true,
        frame: false
    })

    win.loadFile(path.join(__dirname, "window", "window.html"))
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})