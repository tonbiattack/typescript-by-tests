export type Point = Readonly<{ x: number; y: number }>;

export function samePoint(left: Point, right: Point): boolean {
  return left.x === right.x && left.y === right.y;
}
