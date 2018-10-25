import puppeteer from 'puppeteer';
import path from 'path';

describe('test', () => {
  it('test button', async () => {
    const pathToExtension = path.join(
      __dirname,
      '../../chrome-mac/Chromium.app/Contents/MacOS/Chromium'
    );

    const browser = await puppeteer.launch({
      args: ['--no-sandbox'],
      executablePath: pathToExtension,
    });

    const page = await browser.newPage();
    await page.goto('http://localhost:8888/test', { waitUntil: 'networkidle2' });
    await page.click('.am-button');
    await page.waitForSelector('.am-toast');
    await page.close();
    browser.close();
  });
});
