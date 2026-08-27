export function runTogether(tasks: readonly Promise<unknown>[]): Promise<unknown[]> {
  return Promise.all(tasks);
}
