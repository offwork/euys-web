export function isUndefined<Type>(arg: Type): boolean {
  if (typeof arg === 'undefined') return true;
  return false;
}
