import * as puppeteer from 'puppeteer';
import * as core from '@src/core';

export async function scrape() {
  const browser = await puppeteer.launch({ headless: false });

  const results = await core.run({ class: 'gunSlinger' })(browser);

  console.log(JSON.stringify(results));
}

scrape();
