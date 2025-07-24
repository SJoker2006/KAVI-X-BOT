const fs = require('fs')
const chalk = require('chalk')

global.sessionID = process.env.SESSIONID || "KAVI-X-SESSION-ID~pBR0UZqS#XPel_uV6cE83cBpB8qH7UA2HNcPwhi1nKpkP9CehOKE"
global.botname = process.env.BOTNAME || "KAVI-X MD"
global.ownernumber = process.env.OWNERNUMBER || "94728380062"
global.ownername = process.env.OWNERNAME || "Cyber Kavi"
global.websitex = process.env.WEBSITEX || "https://kavi-x-bot-login.up.railway.app/"
global.wagc = process.env.WAGC || "https://chat.whatsapp.com/CG9f0paHJzwDImXiydfuht"
global.botscript = process.env.BOTSCRIPT || "https://github.com/KaviDeveloperSe/KAVI-X-BOT"
global.packname = process.env.PACKNAME || "KAVI-X MD"
global.author = process.env.AUTHOR || "Cyber Kavi"
global.creator = process.env.CREATOR || "94702128378@s.whatsapp.net"
global.botprefix = process.env.BOTPREFIX || "."
global.restart = process.env.RESTART || true
global.mongoDB = process.env.MONGODB_URI || "mongodb+srv://lahiruimesh847:Savi2006@cluster0.6jda6iz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})