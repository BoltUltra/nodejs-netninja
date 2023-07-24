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

// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("folder created successfully");
//     }
//   });
// } else {
//   // Deleting of directories
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }

// Deleting files

if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file deleted");
    }
  });
} else {
  console.log("file does not exist");
}
