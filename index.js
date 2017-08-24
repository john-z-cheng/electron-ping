const {app, Menu, Tray} = require('electron')
const notify = require('electron-main-notification')

function makeNotification() {
    notify('This is a notification!', { body: 'See? Really easy to use!' }, () => {
    console.log('The notification got clicked on!')
  })
}

let tray = null
app.on('ready', () => {
  tray = new Tray('tray_icon_black.png')
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Item1', type: 'radio'},
    {label: 'Item2', type: 'radio'},
    {label: 'Item3', type: 'radio', checked: true},
    {label: 'Clickable', type: 'radio'},
    {label: 'click', click(){console.log('clicked the button')}},
    {label: 'changecolor', click(){tray.setImage('tray_icon_purple.png')}}
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
  setInterval(makeNotification, 5*1000);
  
})

