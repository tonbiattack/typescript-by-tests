export function runtimeConstructor(value: unknown): Function | undefined {
  return typeof value === "object" && value !== null ? value.constructor : undefined;
}
