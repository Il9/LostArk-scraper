import { AUCTION_URL } from '@src/constants';
import { Item } from '@src/types';
import { PagePipe, PagePipeCurry, Option } from './types';
import { search } from './search';
import { scrapeList } from './list';

const connect: PagePipe = async page => {
  await page.goto(AUCTION_URL, { waitUntil: 'networkidle0' });
  await page.setViewport({ width: 1366, height: 768 });

  return page;
};

const run: PagePipeCurry<Option, Item[]> = option => async page => {
  return Promise.resolve(page).then(connect).then(search(option)).then(scrapeList);
};

export { run };
