#!/usr/bin/env node
import { createRequire } from "module"
const require = createRequire(import.meta.url)
const pkg = require("../package.json")
import { program } from "commander"
import colors from "colors"

program
  .version(pkg.version)
  .command("indv", "Check ipo allotment result for single ipo.".blue)
  .command("bulk", "Check ipo allotment result for multiple ipo.".blue +'[WIP]'.red)
  .parse(process.argv)

if(!process.argv[2]) {
    program.outputHelp()
}
