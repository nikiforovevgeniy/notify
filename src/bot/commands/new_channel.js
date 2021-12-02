const bot = require('@/telegram-bot.js');
const jwt = require('jsonwebtoken');

module.exports = async function ({ chat, text, entities }) {
  const mention = entities.find((item) => item.type === 'mention');
  const channel_name = text.substr(mention.offset, mention.length);
  try {
    const channel = await bot.getChat(channel_name);
    const token = jwt.sign(
      { channel_id: channel.id },
      process.env.JWT_SECRET_KEY
    );
    bot.sendMessage(chat.id, token);
  } catch (error) {
    bot.sendMessage(chat.id, `Возникла ошибка: ${error.message}`);
  }
};
