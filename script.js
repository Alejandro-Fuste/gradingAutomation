const puppeteer = require('puppeteer');

// Requiring .dotenv file
require('dotenv').config();

(async () => {
	// Go the Launchpad website (https://launchpad.classlink.com/ocps)

	const browser = await puppeteer.launch({ headless: false, slowMo: 50, defaultViewport: null });
	const page = await browser.newPage();
	await page.goto('https://launchpad.classlink.com/ocps');

	// Enter username, password, and click the signin button
	await page.waitForSelector('#username');
	await page.waitForSelector('#password');

	await page.type('#username', process.env.LAUNCHPAD_USERNAME);
	await page.type('#password', process.env.LAUNCHPAD_PASSWORD);

	await page.click('#signin', [ { clickCount: 2 } ]);

	// Double click on the Canvas button

	await page.waitForXPath('/html/body/app-root/secure/div/div/div/app-apps-container/application[3]');

	await page.mouse.click(718, 141, [ { clickCount: 2 } ]);

	// Go to gradebook of First Aid Class by using url in goto method

	await page.goto('https://ocps.instructure.com/courses/1221491/gradebook');

	// Click on the "Grades"

	// Find ungraded all assignments

	// Enter a grade of "100" for all atypements

	// await browser.close();
})();
