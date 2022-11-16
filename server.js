//Importing and creating an instance of express
const express = require("express");
const mongoose = require('mongoose');

const app = express();
const MONGO_URI = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo:27017`;

//Setting PORT to 5000 if PORT is not listed in environmental variables.
const PORT = process.env.PORT || 5000;

// Creating the `GET` route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Schedule Me API</h1>");
});

//Starting the express server
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);

// Creating the connect function
const connectDB = async () => {
  await mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Mongo connected successfully"))// Logs out successful when MongoDB connects.
    .catch((e) => {
      console.log(e.message);// Logs out the error message if it encounters any.
    });
};

connectDB();