const TelegramBot = require('node-telegram-bot-api');

module.exports = new TelegramBot(process.env.TG_API_TOKEN, { polling: true });
