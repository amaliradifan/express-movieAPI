const express = require('express');
const cors = require('cors');

const cookieParser = require('cookie-parser');
const router = require('./routers');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser(process.env.JWT_KEY));
app.use(cors());

app.use('/api', router);

app.use(notFoundMiddleware);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App Listening on port ${port}`);
});
