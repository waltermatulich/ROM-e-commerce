const express = require('express');
const routes = require('./routes');
// import sequelize connection
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api");

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }) .then(() => {
  app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
});