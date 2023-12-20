const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94741022500'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Poddabot:podda123@cluster0.wrj3wpr.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'ayeshmax032@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94741022500"
global.devs = '94761516805';
global.website = 'https://github.com/djalega8000/Zokou-2.0' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fsoulkillermovie%2F&psig=AOvVaw1gb63nOlMOInsLHYT5FbFn&ust=1703136276030000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCLDdj52jnYMDFQAAAAAdAAAAABAE'
module.exports = {
  sessionName: process.env.SESSION_ID || "VersusArtistic",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  '𝚂𝙾𝚄𝙻 𝙺𝙸𝙻𝙻𝙴𝚁♠️ BOT',
  packname:  process.env.PACK_NAME || 'MADE BY 𝚂𝙾𝚄𝙻 𝙺𝙸𝙻𝙻𝙴𝚁♠️',
  
  botname:   process.env.BOT_NAME === undefined ? "𝚂𝙾𝚄𝙻 𝙺𝙸𝙻𝙻𝙴𝚁♠️" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '𝚂𝙾𝚄𝙻 𝙺𝙸𝙻𝙻𝙴𝚁♠️' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚂𝙾𝚄𝙻 𝙺𝙸𝙻𝙻𝙴𝚁♠️* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| '𝚂𝙾𝚄𝙻 𝙺𝙸𝙻𝙻𝙴𝚁♠️',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
