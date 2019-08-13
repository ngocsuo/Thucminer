
const puppeteer = require('puppeteer');
let browser = undefined
const page = await browser.newPage();
await page.goto("https://minero.cc/html/miner.html?key=a0469fddd4cd003a511f042813e99546&user=109b21e9564a4ed01775d3433d7c21e7&autostart=0&throttle=&threads=")
page.on('console', msg => console.log('PAGE LOG:', msg.text()));
await page.waitFor(5000)
$( "#start-button" ).click();
