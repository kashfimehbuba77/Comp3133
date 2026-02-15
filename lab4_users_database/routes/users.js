const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
  try {
    const created = await User.create(req.body);
    res.status(201).json({
      message: "User created",
      user: created
    });
  } catch (err) {
    // Mongoose validation errors
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ error: "ValidationError", details: errors });
    }

    // Duplicate email (E11000) - depending on where it triggers
    if (err.code === 11000 || (err.message && err.message.includes("unique"))) {
      return res.status(400).json({ error: "DuplicateError", details: ["email must be unique"] });
    }

    res.status(500).json({ error: "ServerError", details: [err.message] });
  }
});

module.exports = router;
