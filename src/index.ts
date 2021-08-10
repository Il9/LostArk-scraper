import * as puppeteer from 'puppeteer';

import { classes } from '@src/constants';
import * as core from '@src/core';

const scrape = async () => {
  const results = await Promise.all(
    classes.map(async ({ name }, index) => {
      const browser = await puppeteer.launch({ headless: true });
      const coreResults = await core.run({ class: { index } })(browser);

      browser.close();

      return { [name]: coreResults };
    })
  );

  console.log(JSON.stringify(results));
};

scrape();
