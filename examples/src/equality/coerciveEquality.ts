export const compareZeroAndEmpty = () => {
  const zero: unknown = 0;
  const empty: unknown = '';
  return { loose: zero == empty, strict: zero === empty };
};
