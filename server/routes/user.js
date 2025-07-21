const express = require("express");
const router = express.Router();

router.get("/api/users", (req, res) => {
  res.status(200).json([{ name: "Hamidah" }]);
});

module.exports = router;
