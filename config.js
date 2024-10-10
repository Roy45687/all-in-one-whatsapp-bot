const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="uwemdev@hotmail.com"
global.location="Nigeria,Akwaibom,Uyo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Akwaibom/uyo";
global.github=process.env.GITHUB|| "https://github.com/uwemdev/all-in-one-whatsapp-bot";
global.gurl  =process.env.GURL  || "https://api.whatsapp.com/send?phone=2348110572387&text=Hi%20Uwem%2C";
global.website=process.env.GURL || "https://uwemdev.com" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://uwemdev.com/storage/home/about-file-1724092734.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Uwemdev" 


global.devs = "2348110572387" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256706608131";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/w6ss4st/photo-2024-04-19-10-02-19.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_05_10_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1OCxcbiAgICAgICAgMzksXG4gICAgICAgIDc2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDUyLFxuICAgICAgICAyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDgzLFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg0LFxuICAgICAgICA1NixcbiAgICAgICAgMjAzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY3LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQsXG4gICAgICAgIDk3LFxuICAgICAgICA5NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDgyLFxuICAgICAgICA2MixcbiAgICAgICAgMjAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDYyLFxuICAgICAgICA4NixcbiAgICAgICAgMTI3LFxuICAgICAgICA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA5NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNixcbiAgICAgICAgODEsXG4gICAgICAgIDEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzLFxuICAgICAgICA2NSxcbiAgICAgICAgMixcbiAgICAgICAgODIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICA5NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODUsXG4gICAgICAgIDM2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzksXG4gICAgICAgIDcyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDcwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBN09qb1dNa3Vja3FpaGZWRzAwUFVZV0ZCYVNqYlQxRHdOMHYrVEVpNjRnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3Q2R3dGk1VFFZMmkyUnRwQWIxa193XCIsXG4gIFwicGhvbmVJZFwiOiBcImE4ZjQ0ZWUyLTE1ZjMtNGU5NS1hOWFmLTExZGQwZTA4YzliNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzEsXG4gICAgICAzNyxcbiAgICAgIDE1NCxcbiAgICAgIDgxLFxuICAgICAgNDksXG4gICAgICAxMjMsXG4gICAgICAxMzgsXG4gICAgICAzOCxcbiAgICAgIDI0NSxcbiAgICAgIDE1NSxcbiAgICAgIDU4LFxuICAgICAgMzIsXG4gICAgICA1MyxcbiAgICAgIDEzNyxcbiAgICAgIDE3NyxcbiAgICAgIDcwLFxuICAgICAgMTYzLFxuICAgICAgMTYsXG4gICAgICA2NCxcbiAgICAgIDI0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDksXG4gICAgICAzMyxcbiAgICAgIDcxLFxuICAgICAgMTYwLFxuICAgICAgMjA1LFxuICAgICAgMjQ1LFxuICAgICAgMjQxLFxuICAgICAgMjI5LFxuICAgICAgMzMsXG4gICAgICAyMTEsXG4gICAgICA5OCxcbiAgICAgIDU4LFxuICAgICAgMTAyLFxuICAgICAgNjUsXG4gICAgICA2NCxcbiAgICAgIDc3LFxuICAgICAgMTkxLFxuICAgICAgMzYsXG4gICAgICAyMjYsXG4gICAgICAyMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNzRMQzRON0VcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NjcwNjYwODEzMToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzE2OTY5OTI4NzQ3NTE6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXZnOTJvUTdMcUV1QVlZRHlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzeFZkNmxVL1ZYU0tyZUcvMmgwWlg0NENlQWNwYXpTTFNHVUlBMkpSZldZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVUd292aTIremVQV0J4TWt6Sjg3akFucmk4MTdNL2NSREprOElIVGFzb0xRbm5FYm9NVmhiWmQ4ME5YSGtwaXJvbTh4TGhKQ09XcTFaNDhhQjYzd0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZUK2lOOVlqbVlkSlZXekd5ZXhpeTNlakZMV1pLT0Rjd2tDR2FBMGZHajJIZGFna3RibW5ZT2J2d2RPSCtPQ2VPTHBaWUFaWnFiRUM5UkEzcEZmQ0F3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NjcwNjYwODEzMToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODEyNjMyMlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡UwemDev彡★",
  packname: process.env.PACK_NAME || "Sticker by roy",
  botname : process.env.BOT_NAME  || "UwemDev",
  ownername:process.env.OWNER_NAME|| "★彡UwemDev彡★",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
