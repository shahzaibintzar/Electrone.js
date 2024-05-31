const {app, BrowserWindow,} = require('electron')

function create()
{
    const win = new BrowserWindow({
        width:400,
        height:800,
        // frame: false,
        // backgroundColor: '#FF0000',
        // alwaysOnTop: true,
        // title:"Browser",
        // resizable:false,
        webPreferences:{
            nodeIntegration:true
        }
    })
    // let child = new BrowserWindow({parent:win})
    // child.loadFile('index.html')
    // child.show()
    win.loadFile('index.html')

}
app.whenReady().then(create);