const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// // to insert single data
// const user1 = new User({
//   name: "adam",
//   email: "adam@gmail.com",
//   age: 48,
// });

// // to save user1 in db
// user1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// // to insert single data
// const user2 = new User({
//   name: "eve",
//   email: "eve@gmail.com",
//   age: 50,
// });

// // to save user1 in db
// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// User.findById("6a3e0eea996d69bfb771c65e").then((data) => {
//   console.log(data);
// });

// User.find().then((data) => {
//   console.log(data);
// });

// User.updateOne(
//   { name: "adam" },
//   { name: "kiara", email: "kiara@gmail.com", age: 40 },
// )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// User.updateOne(
//   { name: "kiara" },
//   { $set: { name: "ron", email: "ron@gamil.com", age: 36 } },
// )
//   .then((res) => {
//     console.log("MongoDB Response:", res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// delete a user
User.deleteOne({ name: "eve" }).then((res) => {
  console.log(res);
});
