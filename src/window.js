const { app, BrowserWindow } = require("electron")
const path = require("path")

const scanner = require("./scanner")
const external = require("./external")


function createWindow() {
    const display = require("electron").screen.getPrimaryDisplay();

    const win = new BrowserWindow({
        width: 700,
        height: 400,
        x: display.bounds.width - 700,
        y: display.bounds.height - 400,
        webPreferences: {
            devTools: true
            //preload: path.join(__dirname, 'preload.js')
        }
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