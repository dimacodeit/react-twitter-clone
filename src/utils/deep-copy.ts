export function deepCopy<T = unknown>(structure: object | any[]) {
  return JSON.parse(JSON.stringify(structure)) as T;
}
