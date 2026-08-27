export interface Resource {
  use(): void;
  close(): void;
}

export function withResource(resource: Resource): void {
  try {
    resource.use();
  } finally {
    resource.close();
  }
}
