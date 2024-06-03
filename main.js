const {app, BrowserWindow,globalShortcut,Tray, Menu,ipcMain} = require('electron')

// ipcMain.on("msg",(event,agr)=>{
//     console.log(agr)
//     event.reply('back-msg','Thank you for sending')
// })

const windowStateKeeper = require('electron-window-state')
let win;

// let ismac = process.platform === 'darwin'

// let template = [
//    ...ismac? {label: 'Home',submenu:[
//         {label: 'Home'},
//         {label: 'about' },
//         {label: 'close' }
//     ]}:[],
//     {label: 'Blog'},
//     {label: 'contect',submenu:[
//        ismac? {role:'close', label: 'Close'}: {role:'quit', label: 'Quit'},
//         {label: 'about' },
//         {label: 'close' }
//     ]}
// ]

// let menu = Menu.buildFromTemplate(template);

// Menu.setApplicationMenu(menu);






let template =[{role:'copy'},{role:'minimize'},{role:'quit'},{role:'paste'},{role:'cut'}]

let contextMenu = Menu.buildFromTemplate(template);




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
            nodeIntegration:true,
            // contextIsolation: false 
        }
    })
    // let child = new BrowserWindow({parent:win})
    // child.loadFile('index.html')
    // child.show()


    win.loadFile('index.html')


win.webContents.on('context-menu',()=>{
    contextMenu.popup();
})


// tray = new Tray('logo.png')
// tray.setToolTip('This is my app')
// tray.on('click', ()=>{
//     win.isVisible()?win.hide():win.show();
// })



// let template =[{label: 'title1', type:'radio'},{label: 'title2',type: 'checkbox'}]
// const contextMenu = Menu.buildFromTemplate(template);
// tray.setContextMenu(contextMenu)


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