const express = require('express');
const dotenv = require('dotenv');
const catalogRoutes = require('./routes/catalogRoutes');
const paginationMiddleware = require('./middlewares/paginationMiddleware')

dotenv.config();
const app = express();

app.use(express.json());
app.use(paginationMiddleware(process.env.PAGE_SIZE));

app.use('/catalog', catalogRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Service running at port ${port}`);
});
