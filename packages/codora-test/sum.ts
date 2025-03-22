export function sum(...value: number[]): number {
  return value.reduce((a: number, b: number) => a + b, 0);
}
