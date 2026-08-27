export function mapImmediately(values: readonly number[], observe: (value: number) => void): number[] {
  return values.map((value) => {
    observe(value);
    return value * 2;
  });
}
