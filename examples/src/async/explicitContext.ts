export async function handleRequest(requestId: string): Promise<string> {
  await Promise.resolve();
  return `request:${requestId}`;
}
