export function failedOperation(error: Error): Promise<never> {
  return Promise.reject(error);
}
