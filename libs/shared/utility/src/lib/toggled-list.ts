export function toggledList(obj = {}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return Object.entries(obj).map(([key, value]) => {
    return { label: value, value: value };
  });
}
