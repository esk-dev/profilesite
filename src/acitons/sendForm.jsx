import axios from "axios";

const sendForm = async (name, email, message) => {
  try {
    axios
      .post("http://localhost:7000/api/telegram", {
        name,
        email,
        message,
      })
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
