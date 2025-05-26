const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "👋 Merhaba! EMKA Global Botuna Hoş Geldin.");
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, `
Kullanabileceğin komutlar:
/start - Botu başlat
/help - Yardım
/sorgula - (İsteğe bağlı sorgu sistemi eklenecek)
`);
});

