// required
const express = require('express');
const apiRoutes = require("./routes/api.js")
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8000;
app.use(require('./routes'));

// initialize express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// initialize mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongob://localhost/social-media-api', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// log mono queries
mongoose.set('debug', true);

// log port connection
app.listen(PORT, () => console.log(`Connected to localhost:${PORT}`));