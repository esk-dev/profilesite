const Router = require('express').Router;
const bodyParser = require('body-parser')
const controller = require('../controllers/send-message');
const router = new Router();

const urlencoderParser = bodyParser.urlencoded({
    extended: false,
})
router.post('/telegram', urlencoderParser, controller.sendMessage);

module.exports = router
