export function frozenTags(tags: readonly string[]): readonly string[] {
  return Object.freeze([...tags]);
}
