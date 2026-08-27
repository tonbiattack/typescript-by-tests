export type Result<T> = { ok: true; value: T } | { ok: false; error: string };

export function parsePort(text: string): Result<number> {
  const port = Number(text);
  if (!Number.isInteger(port) || port < 1 || port > 65_535) {
    return { ok: false, error: "invalid port" };
  }
  return { ok: true, value: port };
}
