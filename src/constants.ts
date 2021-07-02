export const AUCTION_URL = 'https://lostark.game.onstove.com/Auction';

export const SELECTOR = {
  search: {
    modal: '#modal-deal-option',
    opener:
      '#lostark-wrapper > div > main > div > div.deal > div.deal-contents > form > fieldset > div > div.bt > button.button.button--deal-detail',
    submit: '#modal-deal-option > div > div > div.lui-modal__button > button.lui-modal__search',

    class: {
      form: '#selClassDetail',
      option: {
        berserker: '#selClassDetail > div.lui-select__option > label:nth-child(2)',
        destroyer: '#selClassDetail > div.lui-select__option > label:nth-child(3)',
        warLord: '#selClassDetail > div.lui-select__option > label:nth-child(4)',
        holyKnight: '#selClassDetail > div.lui-select__option > label:nth-child(5)',
        arcana: '#selClassDetail > div.lui-select__option > label:nth-child(6)',
        summoner: '#selClassDetail > div.lui-select__option > label:nth-child(7)',
        bard: '#selClassDetail > div.lui-select__option > label:nth-child(8)',
        battleMaster: '#selClassDetail > div.lui-select__option > label:nth-child(9)',
        inFighter: '#selClassDetail > div.lui-select__option > label:nth-child(10)',
        soulMaster: '#selClassDetail > div.lui-select__option > label:nth-child(11)',
        lanceMaster: '#selClassDetail > div.lui-select__option > label:nth-child(12)',
        striker: '#selClassDetail > div.lui-select__option > label:nth-child(13)',
        blade: '#selClassDetail > div.lui-select__option > label:nth-child(14)',
        demonic: '#selClassDetail > div.lui-select__option > label:nth-child(15)',
        reaper: '#selClassDetail > div.lui-select__option > label:nth-child(16)',
        hawkEye: '#selClassDetail > div.lui-select__option > label:nth-child(17)',
        devilHunter: '#selClassDetail > div.lui-select__option > label:nth-child(18)',
        blaster: '#selClassDetail > div.lui-select__option > label:nth-child(19)',
        scouter: '#selClassDetail > div.lui-select__option > label:nth-child(20)',
        gunSlinger: '#selClassDetail > div.lui-select__option > label:nth-child(21)',
      },
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
