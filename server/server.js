require('dotenv').config();
const express = require("express");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const router = require('./router/index');
const errorMiddleware = require('./middlewares/error-middleware');

app.use(express.json());
app.use(cors());
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
  try {
    await app.listen(PORT, () => console.log(`Server start on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
