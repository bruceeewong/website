export function isNonEmptyArray(value: unknown): boolean {
  return Array.isArray(value) && value.length > 0;
}
