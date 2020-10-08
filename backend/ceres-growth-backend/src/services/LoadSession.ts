/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */

import { Page } from 'puppeteer-core';

interface Cookie {
  name: string;
  value: string;
  domain: string;
  path: string;
  expires: number;
  size: number;
  httpOnly: boolean;
  secure: boolean;
  session: boolean;
}

export default async (page: Page, cookiesFilePath: string) => {
  const cookiesJar = require(cookiesFilePath);
  cookiesJar.forEach(async (cookie: Cookie) => {
    await page.setCookie(cookie);
  });
};
