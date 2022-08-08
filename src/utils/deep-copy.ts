function deepCopy<T = unknown>(structure: object | unknown[]) {
  return JSON.parse(JSON.stringify(structure)) as T;
}

export default deepCopy;
