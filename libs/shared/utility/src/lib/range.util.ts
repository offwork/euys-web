export const range = (start: number, stop: number, step = 1) => {
  const a = [start];
  let b = start;
  if (start < stop) {
    while (b < stop) {
      a.push((b += step));
    }
  } else {
    while (b > stop) {
      a.push((b -= step));
    }
  }
  return a;
};
