const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Service running at port ${port}`);
});
