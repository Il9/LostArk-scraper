import * as puppeteer from 'puppeteer';

import { CLASS, CATEGORY, GRADE, TIER, Skill } from '@src/types';

export type PagePipe<R = puppeteer.Page> = (page: puppeteer.Page) => Promise<R>;
export type PagePipeCurry<P, R = puppeteer.Page> = (parameter: P) => PagePipe<R>;

export interface Option {
  class: CLASS;
  category?: CATEGORY;
  grade?: GRADE;
  tier?: TIER;
  skill: Skill;
}
