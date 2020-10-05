const puppeteer = require('puppeteer');

// Requiring .dotenv file
require('dotenv').config();

(async () => {
	// Go the Launchpad website (https://launchpad.classlink.com/ocps)

	const browser = await puppeteer.launch({ headless: false, slowMo: 100, defaultViewport: null });
	const page = await browser.newPage();
	await page.goto('https://launchpad.classlink.com/ocps');

	// Enter username, password, and click the signin button
	await page.waitForSelector('#username');
	await page.waitForSelector('#password');

	await page.type('#username', process.env.LAUNCHPAD_USERNAME);
	await page.type('#password', process.env.LAUNCHPAD_PASSWORD);

	await page.click('#signin', [ { clickCount: 2 } ]);

	// Double click on the Canvas button

	// await Promise.all([
	// 	page.waitForXPath('/html/body/app-root/secure/div/div/div/app-apps-container/application[3]'),
	// 	page.mouse.click(718, 141, [ { clickCount: 2 } ])
	// ]);

	await page.waitForXPath('/html/body/app-root/secure/div/div/div/app-apps-container/application[3]');

	await page.mouse.click(718, 141, [ { clickCount: 2 } ]);

	// await page.waitForNavigation({ waitUntil: 'domcontentloaded' });

	console.log('Step after canvas navigation');

	// Single click on the class

	// await page.waitForXPath('/html/body/div[2]/div[2]/div/div[2]/div[1]/div/div/div[5]/div/div[1]/div[1]/div/a', [
	// 	{ timeout: 0 }
	// ]);

	// await page.waitForXPath('//*[@id="DashboardCard_Container"]/div/div[1]/div[1]');

	await page.waitForSelector('a[href="/courses/1221491"]');

	console.log('step after wait for xpath of class card');

	// await page.waitForNavigation({ waitUntil: 'domcontentloaded' });

	await page.click('a[href="/courses/1221491"]', [ { clickCount: 2 } ]);

	// await page.mouse.move(257, 454);

	// await page.mouse.click(257, 454, [ { clickCount: 2 } ]);
	// await page.waitForSelector('a[href="/courses/1221491"]');

	// await Promise.all([
	// 	page.waitForSelector('#application'), // The promise resolves after navigation has finished
	// 	console.log('Step after navigation'),
	// 	page.mouse.click(170, 270, [ { clickCount: 2 } ])
	// 	// page.click('[href=/courses/1221491]', [ { clickCount: 2 } ]) // Clicking the link will indirectly cause a navigation
	// ]);

	// await page.click('a[href="/courses/1221491"]', [ { clickCount: 2 } ]);

	// Click on the "Grades"

	// Find ungraded all assignments

	// Enter a grade of "100" for all atypements

	// await browser.close();
})();

/* 

Code to get mouse coordinates:
window.addEventListener('mousemove', (e) => console.log(`x: ${e.x} | y: ${e.y}`));

*/

// #application > #wrapper > #not_right_side > #content-wrapper > #content > #dashboard > .DashboardCard_Container > .ic-DashboardCard__box > .ic-DashboardCard > .ic-DashboardCard__header > a[href = "/courses/1221491"]

// #wrapper > #not_right_side > #content-wrapper > #content > #dashboard > .DashboardCard_Container > .ic-DashboardCard__box > .ic-DashboardCard > .ic-DashboardCard__header > a[href = "/courses/1221491"] > ic-DashboardCard__header-title ellipsis > span
