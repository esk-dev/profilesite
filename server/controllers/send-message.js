const telegramService = require('../service/telegram-service');
const ApiError = require('../exeptions/api-error');

class SendingMessage {

    async sendMessage(req, res, next) {
        try {
            const {name, email, message} = req.body;
            const sendMessage = await telegramService.sendMessage(name, email, message);
            res.json(sendMessage)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new SendingMessage();
