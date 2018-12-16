require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error');
const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/messages');
const {loginRequired, ensureCorrectUser} = require('./middleware/auth');

const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/users/:id/messages', loginRequired, ensureCorrectUser, messageRoutes);
// routes

app.use(function(req, res, next){
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
})

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
