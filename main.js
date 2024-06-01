const {app, BrowserWindow,globalShortcut} = require('electron')
const windowStateKeeper = require('electron-window-state')
let win;
function create()
{
    let mainWindowState = windowStateKeeper({
        defaultWidth:800,
        defaultHeight:600
    })
     win = new BrowserWindow({

        x:mainWindowState.x,
        y:mainWindowState.y,
        width:mainWindowState.width,
        height:mainWindowState.height,
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
    // let wc = win.webContents;
    // wc.on('dom-ready', ()=>{
    //     console.log('This app Dom ready')
    // })
    // wc.on('did-finish-load', () =>{
    //     console.log('This app did finish load')
    // })
    // wc.on('new-window', () =>{
    //     console.log('new open window')
    // })
    // wc.on('before-input-event', ()=>{
    //     console.log('before input event')
    // })



globalShortcut.register("alt+k", ()=>{
    win.loadFile("child.html")
})



    mainWindowState.manage(win)

}


// app.on('before-quit', (e)=>{
//     console.log('This app is closed')
//     e.preventDefault();
// })


// app.on('will-quit',(e)=>{
//     console.log('This app will quit')
//     e.preventDefault();
// })


// app.on('browser-window-focus',(e)=>{
//     console.log('Browser window focus')
// })


// app.on('browser-window-blur',(e)=>{
//     console.log('Browser window blur')
// })









// app.whenReady().then(create);
app.on('ready',() =>{
    // console.log(app.isReady())
    create();
});