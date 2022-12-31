const express = require("express");
const serverless = require("serverless-http");

const app = express();

router.use(express.json());

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
