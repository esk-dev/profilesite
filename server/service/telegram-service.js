const axios = require("axios");


class TelegramService {
  async sendMessage(name, email, message) {
    const mes = `<b>Name</b>: ${name} \n<b>Email</b>: ${email} \n<b>${message}</b>`;
    const endodedMes = encodeURIComponent(mes);
    const URL = `${process.env.URL}${process.env.TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&parse_mode=html&text=`;
    return axios
      .post(`${URL}${endodedMes}`)
      .then(
        (response) => {
          console.log(response)
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
