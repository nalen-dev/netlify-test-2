const express = require("express");
const serverless = require("serverless-http");
const MongoClient = require("mongodb").MongoClient;

const router = express.Router();

const app = express();

const url = "mongodb+srv://admin:admin123@todolist-cluster.kpe60gd.mongodb.net/todolist?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParse: true });

router.use(express.json());

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

router.get("/database", async (req, res) => {
  const collection = client.db("todolist").collection("users");
  const data = await collection.findOne();
  return res.json(data);
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
