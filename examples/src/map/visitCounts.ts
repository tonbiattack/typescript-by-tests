export function registerDefault(visits: Map<string, number>, page: string): number {
  if (!visits.has(page)) visits.set(page, 0);
  return visits.get(page)!;
}
