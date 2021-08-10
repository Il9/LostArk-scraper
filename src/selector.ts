import { classes } from '@src/constants';

export const SELECTOR = {
  search: {
    modal: '#modal-deal-option',
    opener:
      '#lostark-wrapper > div > main > div > div.deal > div.deal-contents > form > fieldset > div > div.bt > button.button.button--deal-detail',
    submit: '#modal-deal-option > div > div > div.lui-modal__button > button.lui-modal__search',

    class: {
      form: '#selClassDetail',
      option: '#selClassDetail > div.lui-select__option > label',
    },
    category: {
      form: '#selCategoryDetail > div.lui-select__title',
      option: {
        all: '#selCategoryDetail > div.lui-select__option > label:nth-child(1)',
        equipAll: '#selCategoryDetail > div.lui-select__option > label:nth-child(2)',
      },
    },
    grade: {
      form: '#modal-deal-option > div > div > div.lui-modal__content > div:nth-child(2) > table > tbody > tr:nth-child(3) > td:nth-child(2) > div',
      option: {
        relics:
          '#modal-deal-option > div > div > div.lui-modal__content > div:nth-child(2) > table > tbody > tr:nth-child(3) > td:nth-child(2) > div > div.lui-select__option > label:nth-child(7)',
      },
    },
    tier: {
      form: '#modal-deal-option > div > div > div.lui-modal__content > div:nth-child(2) > table > tbody > tr:nth-child(4) > td:nth-child(2) > div',
      option: {
        third:
          '#modal-deal-option > div > div > div.lui-modal__content > div:nth-child(2) > table > tbody > tr:nth-child(4) > td:nth-child(2) > div > div.lui-select__option > label:nth-child(4)',
      },
    },
    skill: {
      form: '#selSkill_0 > div.lui-select__title',
      option: '#selSkill_0 > div.lui-select__option > label',
      min: '#txtSkillMin_0',
      max: '#txtSkillMax_0',
    },
  },
  list: {
    loading: 'span.lui-loader',
    row: '#auctionListTbody > tr',
    column: {
      name: 'td:nth-child(1) > div.grade > span.name',
      count: 'td:nth-child(1) > div.grade > span.count',
      effects: 'td:nth-child(1) > div.effect > ul',
      time: 'td:nth-child(4) > div',
      priceRow: 'td:nth-child(5) > div > em',
      priceBuy: 'td:nth-child(6) > div > em',
    },
    pagination: {
      active: '#auctionList > div.pagination > em.pagination__number--active',
      next: '#auctionList > div.pagination > em.pagination__number--active ~ a',
      last: '#auctionList > div.pagination > a.pagination__last',
    },
  },
} as const;
