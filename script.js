const puppeteer = require('puppeteer');

// Requiring .dotenv file
require('dotenv').config();

(async () => {
	// Go the Launchpad website (https://launchpad.classlink.com/ocps)

	const browser = await puppeteer.launch({ headless: false, slowMo: 100 });
	const page = await browser.newPage();
	await page.goto('https://launchpad.classlink.com/ocps');

	// await browser.waitForTarget(() => false);

	await page.waitForSelector('#username');
	await page.waitForSelector('#password');

	await page.type('#username', process.env.LAUNCHPAD_USERNAME);
	await page.type('#password', process.env.LAUNCHPAD_PASSWORD);

	await page.click('#signin', [ { clickCount: 2 } ]);

	// await browser.close();
})();

// Double click on the Canvas button

// Single click on the class

// Click on the "Grades"

// Find ungraded all assignments

// Enter a grade of "100" for all atypements
