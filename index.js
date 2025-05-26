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
const options = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: "✅ Takibe Al", callback_data: "takip" },
        { text: "❌ İlgilenme", callback_data: "sil" },
        { text: "📝 Not Ekle", callback_data: "not" }
      ]
    ]
  }
};

bot.onText(/\/basvuru/, (msg) => {
  const text = `📥 Yeni Başvuru

👤 Ad Soyad: Ahmet Yılmaz
🎂 Yaş: 24
📘 Diploma: 85
🎓 Eğitim Durumu: Üniversite Mezunu
📞 Telefon: 0544 729 8896`;

  bot.sendMessage(msg.chat.id, text, options);
});

