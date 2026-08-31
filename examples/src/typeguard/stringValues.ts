export const upperCaseIfString = (value: unknown) =>
  typeof value === 'string' ? value.toUpperCase() : undefined;
