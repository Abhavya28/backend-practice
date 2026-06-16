const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "myFile.txt"),
      "utf8",
    );
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, "files", "myFile.txt"));
    await fsPromises.writeFile(
      path.join(__dirname, "files", "newFile.txt"),
      data,
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "newFile.txt"),
      "\nHello, How are you?",
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "newFile.txt"),
      path.join(__dirname, "files", "appendedFile.txt"),
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "appendedFile.txt"),
      "utf8",
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

fileOps();
