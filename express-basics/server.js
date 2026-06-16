// const express = require("express");
// const app = express();
// const path = require("path");
// const PORT = process.env.PORT || 3500;

// app.get("/", (req, res) => {
//   res.send('Hello');
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const app = express();
let port = 3000;

// console.dir(app);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

app.get("/", (req,res) => {
  res.send("root");
})

app.get("/account/:username", (req,res) => {
  console.log(req.params);
  let {username} = req.params;
  res.send(`Hello, I am @${username}`);
})

app.get("/help", (req,res) => {
  res.send("help");
})

app.get("/about", (req,res) => {
  res.send("about");
})

app.get("/search", (req,res) =>{
  console.log(req.query);
  res.send("no results");
})

app.use((req,res) => {
  res.status(404).send("404 Not Found");
})



// app.use((req, res) => {
//   console.log("request received");
//   res.send({ name: "apple", color: "red" });
// });
