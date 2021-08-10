export const range = (start: number, count?: number) => {
  const overrideStart = count ? start : 0;
  const overrideCount = count ?? start;

  const array = [];

  for (let i = overrideStart; i < overrideStart + overrideCount; i++) {
    array.push(i);
  }

  return array;
};
