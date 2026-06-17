const express = require('express');
const app = express();
const path = require('path');
const port = 8000;

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req,res)=>{
    res.send("Root");
})

// app.get("/ig/:username",(req,res)=>{
//     const followers = ["adam", "bob", 'steve'];
//     let {username} = req.params;
//     res.render("instagram.ejs",{username, followers});
// });

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require('./data.json');
    const data = instaData[username];
    // console.log(data);
    if(data){
        return res.render("instagram.ejs",{data});
    }
    res.render("error.ejs");
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
