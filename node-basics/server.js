const fs = require("fs");
const path = require("path");

// to read files
fs.readFile(
  path.join(__dirname, "files", "myFile.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  },
);

// to write files
fs.writeFile(
  path.join(__dirname, "files", "newFile.txt"),
  "Hello How are you?",
  (err, data) => {
    if (err) throw err;
    console.log("Write Complete");

    // to append files
    fs.appendFile(
      path.join(__dirname, "files", "newFile.txt"),
      "\n\n yoo",
      (err, data) => {
        if (err) throw err;
        console.log("Append Complete");

        // to rename file
        fs.rename(
          path.join(__dirname, "files", "newFile.txt"),
          path.join(__dirname, "files", "file.txt"),
          (err, data) => {
            if (err) throw err;
            console.log("Rename Complete");
          },
        );
      },
    );
  },
);

// at the time of error
process.on("uncaughtException", (err) => {
  console.log(`There is an error: ${err}`);
  process.exit(1);
});
