const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promose = Promose;
mongoose.connect('mongodb://localhost/warbler', {
  keepAlive: true,
  useMongoClient: true
});
