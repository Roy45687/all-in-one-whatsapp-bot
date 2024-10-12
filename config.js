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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_57_10_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NixcbiAgICAgICAgMTA3LFxuICAgICAgICA1NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDc1LFxuICAgICAgICAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODEsXG4gICAgICAgIDU2LFxuICAgICAgICAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyLFxuICAgICAgICA1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI4LFxuICAgICAgICA4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDY3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAyLFxuICAgICAgICA2NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjYsXG4gICAgICAgIDk4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjksXG4gICAgICAgIDY3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDU0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk4LFxuICAgICAgICA1NixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDMsXG4gICAgICAgIDUzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODksXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDM0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1LFxuICAgICAgICA2MixcbiAgICAgICAgNTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1LFxuICAgICAgICA1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjksXG4gICAgICAgIDUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImk2VXJ3WDhtWGdnZXNPNnNFTVRzWi9ZK01pTWtadkpVMG9Ra3czVzhHY0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhwWElvRGM2UjJLVjRuR0xveWlYTVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzUxMjI1MGEtZGQzNS00NDVkLWIzODQtMmM2MGM4ZTczMGM5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDQ5LFxuICAgICAgMzQsXG4gICAgICAxMzQsXG4gICAgICAxODYsXG4gICAgICAyNDAsXG4gICAgICAyNCxcbiAgICAgIDE4OSxcbiAgICAgIDE3MCxcbiAgICAgIDEwMSxcbiAgICAgIDIwOSxcbiAgICAgIDU1LFxuICAgICAgMTAwLFxuICAgICAgOTcsXG4gICAgICAxMzMsXG4gICAgICAyMTIsXG4gICAgICAxMjgsXG4gICAgICAzOCxcbiAgICAgIDEwMSxcbiAgICAgIDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICA4NCxcbiAgICAgIDE4MCxcbiAgICAgIDIzMCxcbiAgICAgIDkxLFxuICAgICAgMTE4LFxuICAgICAgMTMyLFxuICAgICAgMTUyLFxuICAgICAgMTEsXG4gICAgICAyNDYsXG4gICAgICA0NSxcbiAgICAgIDE5OCxcbiAgICAgIDE5OSxcbiAgICAgIDE2NSxcbiAgICAgIDgxLFxuICAgICAgMTY3LFxuICAgICAgMjAwLFxuICAgICAgOTgsXG4gICAgICA1LFxuICAgICAgMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN0g2UTVYNzFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NjcwNjYwODEzMToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzE2OTY5OTI4NzQ3NTE6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0MxMG9rQ0VKZXNxYmdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJUnNDdHRPam8xQnBiand4cXh1OHlMWldWMGErMyttRmM4ektVdEJ2OFZnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImdscFBpMEM0VHNRZU5VMnFzcXNENU5yelk4c0lKSU1OVFJPSGJjTXN2b0dOTWZXZkVjTERVaXZHYlpIbHZiYUZZNk5NSGIwbVZ1SGlvSWNnSWlCUkR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm8xYXpRSCtja0wrcCs2RGdTYWtZakMxcEwvOENTNVNndjVjaUV4RUEzdytURGZ4L0NzaUlQSGE4Rzc2YkhQLzA4NzBZam5UQWF4anlXRkxta3dPakJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NjcwNjYwODEzMToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4NzMwNjUyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
