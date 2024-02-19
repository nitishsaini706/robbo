const express = require("express");

const app = express.Router();
const { userListing, createUser, getUserById, deleteUserById } = require("../controller.js/userController");
const requestLogger = require("../middelware/middelware")
app.get('/users', requestLogger ,userListing);

app.post('/users', requestLogger,createUser);

app.put('/users/:id', requestLogger,getUserById);

app.delete('/users/:id', requestLogger,deleteUserById);


module.exports = app;