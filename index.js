const {Telegraf} = require('telegraf')
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.on('text', (ctx) => {

console.log(ctx.message)    
//aliases
let msg = ctx.message.text
let msgReceiver = ctx.message.message_id

switch(msg) {
    case '/start':
        ctx.replyWithHTML('Welcome '+ ctx.from.first_name +'', {'reply_to_message_id':msgReceiver})
      break;
    case 'hey':
    case 'oy' :    
        ctx.replyWithMarkdown('Apaan *'+ ctx.from.first_name + ctx.from.last_name +'* ?',
        {'reply_to_message_id':msgReceiver})
      break;
    case 'rekomen drakor':
        ctx.replyWithHTML('https://www.viu.com/ott/id/id/all/video-korean-comedy-tv_shows-my_girlfriend_is_gumiho_episode_1-1123117819?containerId=playlist-22380963')
      break;
    default:
        ctx.replyWithHTML('Kaga jelas lu', {'reply_to_message_id': msgReceiver})
  }


})

bot.on('sticker', (ctx) => ctx.reply('👍'))

bot.startPolling()
