import * as puppeteer from 'puppeteer';

import { CLASS } from '@src/types';

export type BrowserPipe<R = puppeteer.Browser> = (browser: puppeteer.Browser) => Promise<R>;
export type BrowserPipeCurry<P, R = puppeteer.Browser> = (parameter: P) => BrowserPipe<R>;

export interface Option {
  class: CLASS;
}
