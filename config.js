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
global.caption = process.env.CAPTION || global.caption || "Uwmemdev" 


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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_56_10_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MixcbiAgICAgICAgNDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMixcbiAgICAgICAgMjQwLFxuICAgICAgICA0MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDgzLFxuICAgICAgICA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMCxcbiAgICAgICAgNTksXG4gICAgICAgIDg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDksXG4gICAgICAgIDU0LFxuICAgICAgICAyNixcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODksXG4gICAgICAgIDgxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzksXG4gICAgICAgIDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAyLFxuICAgICAgICA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM3LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgNjksXG4gICAgICAgIDU5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTksXG4gICAgICAgIDUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAzLFxuICAgICAgICA2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDcwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNCaWV6U1RTb3l0ODFXUi9tWE9YZHE2Y28zQk55TFIyMng0RmpyWnI2OG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImEtc1laa2s5U2ltUnVta1lSaXJUcWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmFjZDM4ZDYtYTI0My00MjRkLWE2NjItYjI4ZDE3OTBhMzFiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMCxcbiAgICAgIDk2LFxuICAgICAgODgsXG4gICAgICAxNzcsXG4gICAgICAxNSxcbiAgICAgIDI5LFxuICAgICAgMTc2LFxuICAgICAgNzgsXG4gICAgICAxNjksXG4gICAgICA1NSxcbiAgICAgIDcwLFxuICAgICAgODYsXG4gICAgICAxMzQsXG4gICAgICAxNzcsXG4gICAgICAyMjAsXG4gICAgICA2OCxcbiAgICAgIDI1MyxcbiAgICAgIDIxOSxcbiAgICAgIDIxNCxcbiAgICAgIDE4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzcsXG4gICAgICA5MCxcbiAgICAgIDE5NyxcbiAgICAgIDE2MixcbiAgICAgIDIxMCxcbiAgICAgIDIzMCxcbiAgICAgIDY1LFxuICAgICAgNDIsXG4gICAgICA1MSxcbiAgICAgIDE1MSxcbiAgICAgIDM0LFxuICAgICAgMjQwLFxuICAgICAgMTI0LFxuICAgICAgMjQyLFxuICAgICAgMjUwLFxuICAgICAgOTUsXG4gICAgICAxMCxcbiAgICAgIDQ3LFxuICAgICAgMTc1LFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlQ4RUExNDZLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3MDY2MDgxMzE6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjMxNjk2OTkyODc0NzUxOjEzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tLMTBva0NFSkdGdXJnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSVJzQ3R0T2pvMUJwYmp3eHF4dTh5TFpXVjBhKzMrbUZjOHpLVXRCdjhWZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqV1MvNU13SVY0L0pWWVJCZ1RuS3RHMEo4ZHNKVGV2aFF3c3NwVURycitnSDFFOXNxYk8xN0Y4bk9wc2ZNd3lTbzdEKzM2NWllcU02ZW1UUGRyZ0VCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPcm00T2UvL1RXeHJ5UndEQzZGekpUbVBTSkZiSEMxN0N2K1pzZ1dLNTVWUzlQOHdUNW5ZenYreG5KYVZmekxidFZkc0JjV0tCeGF6MHQ1Z085VUpndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3MDY2MDgxMzE6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTAwNDE4MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
