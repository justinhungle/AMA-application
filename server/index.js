const env = require("dotenv").config();
const express = require("express");
const expressStaticGzip = require("express-static-gzip");
const axios = require("axios");
const { v4 } = require("uuid");
const path = require("path");

const app = express();
const PORT = 3000;
const publicPath = path.join(__dirname, "../client/dist");

app.use("/", expressStaticGzip(publicPath));
app.use(express.json());

app.post("/prompts", async (req, res) => {
  const GPT3_URL = `https://api.openai.com/v1/engines/${req.body.engine}/completions`;
  const prompt = req.body.prompt;
  axios(GPT3_URL, {
    method: "POST",
    headers: {
      authorization: "Bearer " + process.env.TOKEN,
    },
    data: {
      prompt: prompt,
      max_tokens: 300,
      temperature: 1,
    },
  })
    .then((response) => {
      res.status(200).send({
        id: v4(),
        response: response.data.choices[0].text,
        prompt: prompt,
      });
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log(`Listening to port... ${PORT}`));
