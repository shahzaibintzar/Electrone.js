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