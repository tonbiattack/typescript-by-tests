export type Member = { profile?: { nickname?: string } };

export function nicknameOf(member: Member | undefined): string | undefined {
  return member?.profile?.nickname;
}
