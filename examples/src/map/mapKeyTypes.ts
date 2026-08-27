export function typedKeys(): Map<number | string, string> {
  return new Map<number | string, string>([
    [1, "number"],
    ["1", "string"],
  ]);
}
