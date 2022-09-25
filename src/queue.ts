export class Queue<T> {
  #top: number;
  #bottom: number;
  #elements: T[];
  constructor(params?: T[]) {
    this.#elements = params || [];
    this.#top = 0;
    this.#bottom = params?.length || 0;
  }

  enqueue(value: T): void {
    this.#elements[this.#bottom] = value;
    this.#bottom++;
  }

  dequeue(): T {
    const value = this.#elements[this.#top];
    delete this.#elements[this.#top];
    this.#top++;
    return value;
  }

  get size(): number {
    return this.#bottom - this.#top;
  }

  get peek(): T {
    return this.#elements[this.#top];
  }

  get tail(): T {
    return this.#elements[this.#bottom - 1];
  }

  clear() {
    this.#elements = [];
    this.#top = 0;
    this.#bottom = 0;
  }
}