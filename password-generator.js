const gen = require("generate-password");
const password = gen.generate({ length: 20, numbers: true });
console.log(password);
