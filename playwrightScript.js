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

	await Promise.all([
		page.goto('https://ocps.instructure.com/courses/1221491/gradebook'),
		page.waitForNavigation() // The promise resolves after navigation has finished
	]);

	// Find ungraded all assignments

	await Promise.all([
		page.waitForLoadState(),
		page.waitForSelector('.slick-cell.b1.f1.assignment.assignment_15960887')
	]);

	await page.type('.slick-cell.b1.f1.assignment.assignment_15960887', '1000');

	// await page.waitForSelector('.slick-cell.b15.f15.assignment.assignment_15815773');
	// await page.click('.slick-cell.b15.f15.assignment.assignment_15815773');

	// Enter a grade of "100" for all assignments that are not yet graded
})();
