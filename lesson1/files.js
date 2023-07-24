const fs = require("fs");

// reading files
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// console.log("last line");

// -----------------

// Writing files

// fs.writeFile("./docs/blog1.txt", "My name is Mayowa", () => {
//   console.log("File was written");
// });
// fs.writeFile("./docs/blog2.txt", "Hello Mayowa", () => {
//   console.log("File was written");
// });

// -----------------

// Directories

if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("folder created successfully");
    }
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}
