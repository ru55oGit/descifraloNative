const fs = require("fs");
const files = fs.readdirSync("./assets/img").filter(x => x.includes("jpg"));
const ex =
  "{\n" +
  files.map(x => `"${x.split(".jpg")[0]}": require("./${x}"),`).join("\n") +
  "}";
const res = "export default " + ex;
fs.writeFileSync("./assets/img/index.js", res);