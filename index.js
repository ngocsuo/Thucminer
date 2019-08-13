const puppeteer = require('puppeteer');

async function start() {
    let args = process.argv.slice(2);
    let address = "ban_39a3m9p8w4tt7hzrdbitongi4jobegob4at1wpwhkc78tzn4iddhjaexp5yd"
    let threads = 6
    if(args.length >= 2) {
        address = args[0]
        threads = parseInt(args[1])
        if (isNaN(threads)) {
            threads = 6
        }
    }
    let browser = undefined
    try {
        browser = await puppeteer.launch({
            ignoreHTTPSErrors : true,
            // headless : false,
            args : ['--no-sandbox', '--disable-setuid-sandbox', '--disable-popup-blocking']
        });
        const page = await browser.newPage();
        page.on('console', msg => console.log('PAGE LOG:', msg.text()));
        await page.goto("https://minero.cc/html/miner.html?key=a0469fddd4cd003a511f042813e99546&user=109b21e9564a4ed01775d3433d7c21e7&autostart=0&throttle=&threads=")
        await page.waitFor(2000)
		let btn = await page.$("span[id='start-button']")
        await btn.click()
        await page.waitFor(2000)
      
    }catch (e) 
	{
    }

}

start()