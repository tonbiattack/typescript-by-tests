export class Counter {
  private count = 0;
  #secret = 0;

  increment() {
    this.count += 1;
    this.#secret += 1;
  }

  values() {
    return { count: this.count, secret: this.#secret };
  }
}
