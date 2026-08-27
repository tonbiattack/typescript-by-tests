export function eagerDefault<T>(value: T | undefined, fallback: T): T {
  return value ?? fallback;
}

export function lazyDefault<T>(value: T | undefined, fallback: () => T): T {
  return value ?? fallback();
}
