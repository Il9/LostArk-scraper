import { SELECTOR } from '@src/selector';
import { CATEGORY, GRADE, TIER } from '@src/types';
import { PagePipe, PagePipeCurry, Option } from '@src/thread/types';

const openSearch: PagePipe = async page => {
  await page.click(SELECTOR.search.opener);
  await page.waitForSelector(SELECTOR.search.modal, { visible: true });

  return page;
};

const submitSearch: PagePipe = async page => {
  await page.click(SELECTOR.search.submit);
  await page.waitForSelector(SELECTOR.search.modal, { hidden: true });

  return page;
};

const createIndexSelector = (selector: string, index: number) => `${selector}:nth-child(${index + 2})`;

const DEFAULT_BASE_OPTION = {
  category: Object.keys(SELECTOR.search.category.option)[1] as CATEGORY,
  grade: Object.keys(SELECTOR.search.grade.option)[0] as GRADE,
  tier: Object.keys(SELECTOR.search.tier.option)[0] as TIER,
};

const DEFAULT_BASE_SKILL_OPTION = {
  max: 4,
};

const setOption: PagePipeCurry<Option> = option => async page => {
  const fullOption = {
    ...DEFAULT_BASE_OPTION,
    ...option,
    skill: {
      ...DEFAULT_BASE_SKILL_OPTION,
      ...option.skill,
    },
  };

  await page.click(SELECTOR.search.category.form);
  await page.click(SELECTOR.search.category.option[fullOption.category]);

  await page.click(SELECTOR.search.grade.form);
  await page.click(SELECTOR.search.grade.option[fullOption.grade]);

  await page.click(SELECTOR.search.tier.form);
  await page.click(SELECTOR.search.tier.option[fullOption.tier]);

  await page.click(SELECTOR.search.class.form);
  await page.click(createIndexSelector(SELECTOR.search.class.option, fullOption.class.index));

  await page.click(SELECTOR.search.skill.form);
  await page.click(createIndexSelector(SELECTOR.search.skill.option, fullOption.skill.index));
  await page.type(SELECTOR.search.skill.min, String(fullOption.skill.min));
  await page.type(SELECTOR.search.skill.max, String(fullOption.skill.max));

  return page;
};

const search: PagePipeCurry<Option> = option => async page => {
  return Promise.resolve(page).then(openSearch).then(setOption(option)).then(submitSearch);
};

export { search };
