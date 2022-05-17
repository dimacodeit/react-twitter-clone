export function deepCopy<T = unknown>(structure: object | []) {
  return JSON.parse(JSON.stringify(structure)) as T;
}
