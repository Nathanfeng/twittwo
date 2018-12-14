const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promose = Promose;
mongoose.connect('mongodb://localhost/twittwo', {
  keepAlive: true,
  useMongoClient: true
});
