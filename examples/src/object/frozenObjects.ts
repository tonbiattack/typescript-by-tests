export type Config = { name: string; flags: { debug: boolean } };

export function freezeConfig(config: Config): Readonly<Config> {
  return Object.freeze(config);
}
