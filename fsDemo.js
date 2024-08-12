// import fsfrom "fs";
// import { readFile } from "fs";
import fs from "fs/promises";

//fs readFile() callback
// fs.readFile("text.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//readFileSync() - Synchronous version

// const data = fs.readFileSync("text.txt", "utf-8");
// console.log(data);

//readFile() - Promise .then()
// fs.readFile("./text.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.Console.log(err));

//readFile() - async-await
const readFile = async () => {
  try {
    const data = await fs.readFile("./text.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

//writeFile()

const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "Writing again to the file");
    console.log("File written to");
  } catch (err) {
    console.log(err);
  }
};

//appendFile()

const appendFile = async () => {
  try {
    await fs.appendFile("test.txt", "\n Okay this is appended text");
    console.log("File appended to");
  } catch (err) {
    console.log(err);
  }
};

writeFile();
appendFile();
readFile();
