import {coinFlips, countFlips, flipACoin} from "./modules/coin.mjs"

import {createRequire} from "module"
const require = createRequire(import.meta.url)

const args = require('minimist')(process.argv.slice(2))
const outcome = `${args['call']}`

if (outcome == 'heads' || outcome == 'tails') console.log(flipACoin(outcome))

else {
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails]");
}

