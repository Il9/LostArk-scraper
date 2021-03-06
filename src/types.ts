import { SELECTOR } from '@src/selector';

export type CATEGORY = keyof typeof SELECTOR.search.category.option;
export type GRADE = keyof typeof SELECTOR.search.grade.option;
export type TIER = keyof typeof SELECTOR.search.tier.option;
export type CLASS = {
  index: number;
};
export type Skill = {
  index: number;
  min: 1 | 2 | 3 | 4;
  max?: 1 | 2 | 3 | 4;
};

export interface Effect {
  skill: string;
  tripod: string;
  level: number;
}

export interface Item {
  name: string;
  count: number;
  effects: Effect[];
  time: string;
  priceRow: number;
  priceBuy: number;
}
