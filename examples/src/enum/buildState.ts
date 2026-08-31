export enum BuildState { Ready, Failed }
export const enumRuntimeValue = () => ({ numeric: BuildState.Ready, name: BuildState[BuildState.Ready] });
