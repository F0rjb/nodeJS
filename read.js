const fs = require("fs");
console.log(fs);
const text = fs.readFile("welcome.txt", { encoding: "utf-8" }, (err, resp) => {
  if (err) {
    throw err;
  } else {
    console.log(resp);
  }
});
