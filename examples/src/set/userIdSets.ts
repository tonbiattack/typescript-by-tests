export type User = Readonly<{ id: string }>;

export function uniqueUserIds(users: readonly User[]): Set<string> {
  return new Set(users.map((user) => user.id));
}
