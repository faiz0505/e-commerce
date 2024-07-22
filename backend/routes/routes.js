const { Router } = require("express");

const router = Router();
router.get("/", (req, res) => {
  return res.send("Welcome! server is ready");
});

module.exports = router;
