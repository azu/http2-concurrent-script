const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
Array.from({ length: 25 }).forEach((_, i) => {
    const id = crypto.randomBytes(256).toString('hex');
    const text = Array.from({ length: 16 }).map(() => {
        return crypto.randomBytes(1024).toString('hex')
    }).join("__")
    fs.writeFileSync(path.join(__dirname, "script", i + ".js"), `
(() => {
const text = "${text}";
console.log("Load ${i}.js");
})();
    `, "utf-8")
    console.log(`<script async src="script/${i}.js"></script>`)
})
