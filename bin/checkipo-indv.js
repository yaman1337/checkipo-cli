import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pkg = require("../package.json");
import { program } from "commander";
import colors from "colors";
import indv from "../commands/indv.js";


program
    .option("-s", "Start")
    .action(()  => {
        indv.check();
    });


program
    .parse(process.argv)


