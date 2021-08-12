import * as puppeteer from 'puppeteer';

import { AUCTION_URL, classes } from '@src/constants';
import { SELECTOR } from '@src/selector';

const NEXT_CLASS_SELECTOR = '#selClassDetail > div.lui-select__option > label.lui-select__label--selected ~ label';

const getAllClassSkillLengthData: any = async (page: puppeteer.Page) => {
  await page.click(SELECTOR.search.class.form);

  const classLabel = await page.$(NEXT_CLASS_SELECTOR);

  if (!classLabel) {
    return {};
  }

  const classLabelName = await classLabel.evaluate(({ textContent }) => textContent || '');

  await page.click(NEXT_CLASS_SELECTOR);
  await page.click(SELECTOR.search.skill.form);

  const skillElements = await page.$$(SELECTOR.search.skill.option);
  const skillLegnth = skillElements.length - 1;

  return {
    [classLabelName]: skillLegnth,
    ...(await getAllClassSkillLengthData(page)),
  };
};

const skillLengthChangedLog = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(AUCTION_URL, { waitUntil: 'networkidle0' });

  await page.click(SELECTOR.search.opener);
  await page.waitForSelector(SELECTOR.search.modal, { visible: true });

  await page.click(SELECTOR.search.category.form);
  await page.click(SELECTOR.search.category.option['equipAll']);

  const skillLengthData = await getAllClassSkillLengthData(page);
  const changedLogData = classes
    .map(({ nameKR, skillLength }) =>
      skillLength !== skillLengthData[nameKR] ? `${nameKR}: ${skillLength} => ${skillLengthData[nameKR]}` : null
    )
    .filter(changedLog => changedLog);
  const changedLog = changedLogData.length > 0 ? changedLogData.join('\n') : '변경사항 없음';

  await browser.close();

  console.log(changedLog);
};

skillLengthChangedLog();
