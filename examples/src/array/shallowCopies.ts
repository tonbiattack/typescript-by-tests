export type Label = { name: string };

export function copyLabels(labels: readonly Label[]): Label[] {
  return [...labels];
}
