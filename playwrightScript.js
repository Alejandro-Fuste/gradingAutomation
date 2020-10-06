const { chromium } = require('playwright');

// Requiring .dotenv file
require('dotenv').config();

(async () => {
	// Go the Launchpad website (https://launchpad.classlink.com/ocps)

	const browser = await chromium.launch({ headless: false, slowMo: 50 });
	const page = await browser.newPage();
	await page.goto('https://launchpad.classlink.com/ocps');

	// Enter username, password, and click the signin button to get to dashboard

	await page.type('#username', process.env.LAUNCHPAD_USERNAME);
	await page.type('#password', process.env.LAUNCHPAD_PASSWORD);

	await page.click('#signin');

	// Go into Canvas by clicking the Canvas button

	await page.click('[aria-label="Canvas OCPS"]');

	// Go to gradebook of First Aid Class by using url in goto method

	await page.goto('https://ocps.instructure.com/courses/1221491/gradebook');

	// Find ungraded all assignments

	// Enter a grade of "100" for all assignments that are not yet graded
})();
