import { describe, expect, it } from "vitest";
import { Queue } from "../queue";

describe("Queue", () => {
  it("should be empty", () => {
    const queue = new Queue();
    expect(queue.size).toBe(0);
  });

  it("should enqueue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.size).toBe(1);
  });

  it("should dequeue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });

  it("should peek", () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek).toBe(1);
    expect(queue.peek).toBe(1);
  });

  it("should be empty after dequeue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.size).toBe(0);
  });

  it("should get tail", () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.tail).toBe(3);
  });

  it("should get size", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size).toBe(3);
    queue.dequeue();
    expect(queue.size).toBe(2);
  });

  it("should be empty after clear", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.clear();
    expect(queue.size).toBe(0);
  });

  it("should be filled on construction", () => {
    const queue = new Queue([1, 2, 3]);
    expect(queue.size).toBe(3);
  });
});
