const fs = require("fs");
const os = require("os");

// fs.writeFileSync("./text.txt", "Hello There!")

// fs.writeFile("./text.txt", "Hello There! How are you", err => {});

const tetx = fs.readFileSync("./text.txt", "utf-8");

console.log(tetx);

fs.readFile("./text.txt", "utf-8", (err, result) => {
    if (err) {
        console.log("Error", err);
    } else {
        console.log(tetx);
    }
})

// console.log(os.cpus.length);