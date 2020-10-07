import { Page } from 'puppeteer-core';

interface Input {
  name: string;
  value: string;
}

export default async (
  page: Page,
  link: string,
  inputs: Input[],
): Promise<void> => {
  await page.goto(link);
  await page.waitForSelector(`input[name="${inputs[0].name}"]`);
  await inputs.forEach(async (input: Input) => {
    await page.type(`input[name="${input.name}"]`, input.value);
  });
  await page.click('button[type="submit"]');
  await page.waitForNavigation();
};
