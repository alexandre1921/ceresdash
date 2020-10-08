import { Page } from 'puppeteer-core';
import { existsSync } from 'fs';
import Auth from './Auth';
import LoadSession from './LoadSession';
import CreateJson from './CreateJson';

export default async (page: Page) => {
  const cookiesFilePath = `${__dirname}/../json/cookies.json`;
  if (existsSync(cookiesFilePath)) {
    console.log('Loading Session');
    await LoadSession(page, cookiesFilePath);
    await page.goto('https://www.instagram.com');
  } else {
    console.log('Creating Session');
    await Auth(page, 'https://www.instagram.com/accounts/login/', [
      { name: 'username', value: 'appceres@gmail.com' },
      { name: 'password', value: 'tesnoz-7dekxu-nugtyP' },
    ]);
    // Save Session Cookies
    const cookiesObject = JSON.stringify(await page.cookies());
    // Write cookies to temp file to be used in other profile pages
    await CreateJson(cookiesFilePath, cookiesObject, 'Session has been saved.');
  }
};
