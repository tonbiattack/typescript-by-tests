export function withOr(value: number | undefined): number {
  return value || 10;
}

export function withNullish(value: number | undefined): number {
  return value ?? 10;
}
