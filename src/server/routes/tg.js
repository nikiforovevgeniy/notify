const helpers = require('@/helpers.js');
const bot = require('@/telegram-bot.js');
const router = require('express').Router();

router.post('/', async function (req, res) {
  const token = helpers.getBearerToken(req);
  const { channel_id } = await helpers.verifyJWT(
    token,
    process.env.JWT_SECRET_KEY
  );
  const message = req.body.message;
  if (!message) throw new Error('message not found');
  bot.sendMessage(channel_id, message);
  res.end();
});

module.exports = router;
