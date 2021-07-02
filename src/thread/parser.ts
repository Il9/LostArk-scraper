import { Effect } from '@src/types';

type TEXT_CONTENT = string | null;

type Parser<R> = (textContent: TEXT_CONTENT) => R;

const formatContent = (textContent: TEXT_CONTENT) => textContent || '';
const formatNumberContent = (textContent: TEXT_CONTENT) => Number(formatContent(textContent).replace(/[^\d]/g, ''));

const parseEffect = (effectString: string): Effect => {
  const [, skill, tripod, levelString] = effectString.match(/\[(.*?)\] (.*?) Lv \+(\d)/) as [
    string,
    string,
    string,
    string
  ];

  return { skill, tripod, level: Number(levelString) };
};

const parseName: Parser<string> = textContent => formatContent(textContent);
const parseCount: Parser<number> = textContent => formatNumberContent(textContent);
const parseEffects: Parser<Effect[]> = textContent => {
  return formatContent(textContent)
    .split('\n')
    .map(effectString => effectString.trim())
    .filter(effectString => effectString)
    .map(parseEffect);
};
const parseTime: Parser<string> = textContent => formatContent(textContent).replace(/[\\n\s]/g, '');
const parsePriceRow: Parser<number> = textContent => formatNumberContent(textContent);
const parsePriceBuy: Parser<number> = textContent => formatNumberContent(textContent);

export { parseName, parseCount, parseEffects, parseTime, parsePriceRow, parsePriceBuy };
