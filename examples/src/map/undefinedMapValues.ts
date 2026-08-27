export function isConfigured(values: Map<string, string | undefined>, key: string): boolean {
  return values.has(key);
}
