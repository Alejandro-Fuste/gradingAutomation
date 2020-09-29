const puppeteer = require('puppeteer');

(async () => {
	// Go the Launchpad website (https://launchpad.classlink.com/ocps)

	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();
	await page.goto('https://launchpad.classlink.com/ocps');
	await page.screenshot({ path: 'testLaunchPad.png' });
	await browser.waitForTarget(() => false);
	console.log(await page.content());

	await browser.close();
})();

// Enter username and password and log in

// Double click on the Canvas button

// Single click on the class

// Click on the "Grades"

// Find ungraded all assignments

// Enter a grade of "100" for all assigments
