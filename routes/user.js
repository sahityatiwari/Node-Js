// routes/user.js
const express = require("express");
const router = express.Router();
const { handleGetAllUsers, getUserByID, createUserByID } = require('../controllers/user');
const User = require("../models/user"); // Import User model

router.get("/", handleGetAllUsers).post("/", createUserByID);

router.get("/:id", getUserByID);

module.exports = router;
