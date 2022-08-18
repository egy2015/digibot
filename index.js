const Telegraf = require('telegraf')
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.on('text', (ctx) => {

console.log(ctx.message)
console.log(`${process.env.BOT_TOKEN}`)

let msg = ctx.message.text
let repHtml = ctx.replyWithHTML
let msgReceiver = ctx.message.message_id

if (msg == '/start') {
repHtml('Welcome '+ ctx.from.first_name +'', {'reply_to_message_id':msgReceiver})
} else if(msg == 'hitung'){
    repHtml('MLS', {'reply_to_message_id': msgReceiver})
} else if (msg == 'hey' || msg =='oy') {
ctx.replyWithMarkdown(
'Apaan *'+ ctx.from.first_name + ctx.from.last_name +'* ?',
{'reply_to_message_id':msgReceiver})
} else {
    repHtml('Kaga jelas lu', {'reply_to_message_id': msgReceiver})
}

})

bot.on('sticker', (ctx) => ctx.reply('👍'))

bot.startPolling()
