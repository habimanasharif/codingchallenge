#! /usr/bin/env node
const yargs = require("yargs");

const army =require('./createArmy')

const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "desc", type: "string", demandOption: true })
 .argv;
 if(options.name !=='create')
 {
    console.log("Invalid option")
     return
 }
 
let units=yargs.argv._
if(Number.isInteger(units[0])){
    console.log("please enter a valid army number")
    return
}


console.log(army.army(units[0],units))