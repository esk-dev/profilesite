import axios from "axios";
const url = 'http://localhost:7000/api/telegram';

const sendForm = async (name, email, message) => {
  const contacts = { name, email, message };
  try {
    axios
      .post(url, contacts)
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  } catch (e) {
    alert(e);
  }
};

export default sendForm;
