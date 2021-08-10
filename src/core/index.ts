import { Item } from '@src/types';
import { classes } from '@src/constants';
import { range } from '@src/utils';
import * as thread from '@src/thread';
import { BrowserPipeCurry, Option } from '@src/core/types';

const run: BrowserPipeCurry<Option, Item[][]> = option => async browser => {
  return await Promise.all(
    range(classes[option.class.index].skillLength).map(async index => {
      const page = await browser.newPage();
      const threadResults = await thread.run({ ...option, skill: { index, min: 4 } })(page);

      await page.close();

      return threadResults;
    })
  );
};

export { run };
