const bot = require('@/telegram-bot.js');
const new_channel = require('./commands/new_channel');

bot.onText(/\/new_channel (.+)/, new_channel);
