const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()

    await page.goto("https://rates.airtm.io/air-rates")

    await page.screenshot({ path: "test.jpg" })


    await page.evaluate(() => {
        const body = JSON.parse(document.querySelector("pre").innerText)

        const ves = body.VES

        const arrayVes = ves.methods

        console.log(arrayVes);

    })

})()