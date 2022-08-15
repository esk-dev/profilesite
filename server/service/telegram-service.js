const axios = require("axios");

class TelegramService {
  async sendMessage(name, email, message) {
    const mes = name + " " + email + ' ' + message;
    return axios
      .post(
        `${process.env.URL}${process.env.TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&parse_mode=html&text=${mes}`
      )
      .then(
        (response) => {
          const res = {
            status: response.status,
            status_text: response.statusText,
          };
          return res;
        },
        (error) => {
          return error;
        }
      );

  }
}

module.exports = new TelegramService();
