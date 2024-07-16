
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = ".play";
global.video = ".play";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || ",254702626305,254754099931";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "true";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUx6bWdhS0VOVVluM0tFcDhLeGUxajI2K2c3S2tOT1pqTTRML1RoaHJGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3liN0ZJck5TeGswTnBuQ0lhaDE0Q2l0aW8xSisxSnhhUHpJK25QRlJtZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQ0M2ZzJGSnBVWkFzYUw4Ymx5dnZMQmtrbmdpazBVdDUvUjlVYzRoY0hzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTEdwZUl0bDJPcVV3TkczWTNPUzVYMktWWTVPSHhwQ0Z4UkpTRFlYT0RVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVJVFdUWjZBa3lidXAzcUlxQ1IxbFpwcnEvU2R5TzBzRWNRN0daMGZyM2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imc4VmV0U3MwMVIwRDEya1Uzb0Nvd1QzNUNtY1M3dGc4b0F5NGU0aU4wVjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUVBWU83b3lrc0F6YzR4MG5ZdjBGSVQ4SWFIYnoxdFo5cmNTMmZBdGhGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkp2TDJPZjdpRUNaY1MxcEdSaTFUeE9QazJ5RHVMMGZsUE1oU2lNanJFVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN1MDlVa0tBNGw4ZlBhaHBJdjNKNWdXT1hOSnFpM1RScGFLLzFRRHZnS3UySDRpL1JEY2JZRXl5QjNyNm1xMVpVclozeVFraWJCK0xKZEc4N2hjWUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjksImFkdlNlY3JldEtleSI6IlVENnNQUk9ybjJ2anVIekZDRzc1ZVNpQnN2SnNBNVM3NElhbWt1bDU4ZzA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Il9OS0FWMjVjU3NLOGdqUWM0Q18xVGciLCJwaG9uZUlkIjoiMjlmYWE0NzctODZhZC00NmZjLTk4ODAtMjFjOTlkMGZlOTA3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFtcG4yMkRUL20zcUg3NjYrUG9vbnU5MldDQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4LzNpSDJ0VHFjb2dBK0R3dWpnYzA1bDVVYVU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQ0JQWk5OTTgiLCJtZSI6eyJpZCI6IjI1NDc1NDA5OTkzMToxOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTY29vcHkgU2F2YWdlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLZncxaWdRMDl6UHRBWVlCQ0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5b0hlSHU2MStoTWV2WTY2cEFYd1ZKZEdSQWdFMWZudTd6R2lCVWdNL2lNPSIsImFjY291bnRTaWduYXR1cmUiOiJvdzQ5eEg0THA2Z2Rnd1ZFbWtUdkVCRHhXazhGR0tQYXhFek1YU013UzV3MEFXOUtLdWl1ZkxqdmE3d0JYVUVKV0c2WFJQdFVjTTd3V2JQcHBmbzJEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiV3hLY0ZkdDlNdUJIM01UZFJzelo2eGZMK3RHVkhHV1Jhc2dFRDhsK1RvTzNUbG9hTFFFOHAxcWNES1lTOEM2ZE5ZWW9aa3VBVDlUMmgvMHpEaTRTQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3NTQwOTk5MzE6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmFCM2g3dXRmb1RIcjJPdXFRRjhGU1hSa1FJQk5YNTd1OHhvZ1ZJRFA0aiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDk3MDg0NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBV0QifQ==" //Make sure session id starts with Byte;;;
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By Scoopy🙈*",
  author: process.env.PACK_AUTHER || "Scoopy",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "SCOOPY-MD",
  ownername: process.env.OWNER_NAME || "🙈Scoopy🙈",
  errorChat: process.env.ERROR_CHAT || "923072380380",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
