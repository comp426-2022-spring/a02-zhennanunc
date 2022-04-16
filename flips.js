import {coinFlips, countFlips} from "./modules/coin.mjs"

import {createRequire} from "module"
const require = createRequire(import.meta.url)

const args = require('minimist')(process.argv.slice(2))
const outcome = `${args['number']}`

var num = parseInt(outcome)

if (isNaN(num)) num = 1

var coins = coinFlips(num)
var count = countFlips(coins)

console.info(coins)
console.log(count)


