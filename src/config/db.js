var mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/forum', { useNewUrlParser: true, useUnifiedTopology: true });
