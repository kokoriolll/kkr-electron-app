"use strict";const o=require("electron"),n=require("node:path");process.env.DIST=n.join(__dirname,"../dist");process.env.PUBLIC=o.app.isPackaged?process.env.DIST:n.join(process.env.DIST,"../public");let e;const{VITE_DEV_SERVER_URL:s}=process.env;function i(){e=new o.BrowserWindow({width:1024,height:768,icon:n.join(process.env.PUBLIC,"electron-vite.svg"),webPreferences:{preload:n.join(__dirname,"preload.js")}}),e.removeMenu(),e.webContents.on("did-finish-load",()=>{e==null||e.webContents.send("main-process-message",new Date().toLocaleString())}),s?e.loadURL(s):e.loadFile(n.join(process.env.DIST,"index.html"))}o.app.on("window-all-closed",()=>{e=null});o.app.whenReady().then(i);
