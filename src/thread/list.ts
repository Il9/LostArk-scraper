import { SELECTOR } from '@src/constants';
import { Item } from '@src/types';
import { PagePipe } from './types';
import { parseName, parseCount, parseEffects, parseTime, parsePriceRow, parsePriceBuy } from './parser';

interface ExposedFunction {
  parseName: typeof parseName;
  parseCount: typeof parseCount;
  parseEffects: typeof parseEffects;
  parseTime: typeof parseTime;
  parsePriceRow: typeof parsePriceRow;
  parsePriceBuy: typeof parsePriceBuy;
}
type ExposedWindow = Window & typeof globalThis & ExposedFunction;

const exposeFunctions: PagePipe = async page => {
  await page.exposeFunction('parseName', parseName);
  await page.exposeFunction('parseCount', parseCount);
  await page.exposeFunction('parseEffects', parseEffects);
  await page.exposeFunction('parseTime', parseTime);
  await page.exposeFunction('parsePriceRow', parsePriceRow);
  await page.exposeFunction('parsePriceBuy', parsePriceBuy);

  return page;
};

const isExistNextItems: PagePipe = async page => {
  const isExistNextItems = await page.$eval(
    SELECTOR.list.pagination.last,
    element => !element.hasAttribute('disabled')
  );

  if (!isExistNextItems) throw new Error('Last Items');

  return page;
};

const next: PagePipe = async page => {
  await page.click(SELECTOR.list.pagination.next);
  await page.waitForSelector(SELECTOR.list.loading, { hidden: true });

  return page;
};

const getEmptyItems = () => [];

const scrapeItems: PagePipe<Item[]> = async page => {
  const rows = await page.$$(SELECTOR.list.row);

  return await Promise.all(
    rows.map(async row => ({
      name: await row.$eval(SELECTOR.list.column.name, element =>
        (window as ExposedWindow).parseName(element.textContent)
      ),
      count: await row.$eval(SELECTOR.list.column.count, element =>
        (window as ExposedWindow).parseCount(element.textContent)
      ),
      effects: await row.$eval(SELECTOR.list.column.effects, element =>
        (window as ExposedWindow).parseEffects(element.textContent)
      ),
      time: await row.$eval(SELECTOR.list.column.time, element =>
        (window as ExposedWindow).parseTime(element.textContent)
      ),
      priceRow: await row.$eval(SELECTOR.list.column.priceRow, element =>
        (window as ExposedWindow).parsePriceRow(element.textContent)
      ),
      priceBuy: await row.$eval(SELECTOR.list.column.priceBuy, element =>
        (window as ExposedWindow).parsePriceBuy(element.textContent)
      ),
    }))
  );
};

const scrapeAllItems: PagePipe<Item[]> = async page => {
  return [
    ...(await scrapeItems(page)),
    ...(await Promise.resolve(page).then(isExistNextItems).then(next).then(scrapeAllItems).catch(getEmptyItems)),
  ];
};

const scrapeList: PagePipe<Item[]> = async page => {
  return Promise.resolve(page).then(exposeFunctions).then(scrapeAllItems);
};

export { scrapeList };
