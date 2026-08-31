export const states = ['ready', 'failed'] as const;
export type State = (typeof states)[number];
export const acceptState = (state: State) => state;
