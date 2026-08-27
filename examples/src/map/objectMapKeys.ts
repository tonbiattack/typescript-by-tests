export type Key = { id: string };

export function valueFor(map: Map<Key, string>, key: Key): string | undefined {
  return map.get(key);
}
