export function lsGetItem<F>(key: string, fallback: F) {
  return localStorage.getItem(key) ?? fallback;
}
