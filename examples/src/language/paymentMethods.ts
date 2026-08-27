export type Payment =
  | { kind: "card"; last4: string }
  | { kind: "bankTransfer"; transactionId: string };

export function describe(payment: Payment): string {
  switch (payment.kind) {
    case "card": return `card:${payment.last4}`;
    case "bankTransfer": return `bank:${payment.transactionId}`;
  }
}
