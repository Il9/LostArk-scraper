import { Item } from '@src/types';
import * as thread from '@src/thread';
import { BrowserPipeCurry, Option } from './types';

const run: BrowserPipeCurry<Option, Item[]> = option => async browser => {
  const page = await browser.newPage();

  return await thread.run({ ...option, skill: { index: 18, min: 4 } })(page);
};

export { run };
