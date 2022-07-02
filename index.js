const isInt = (n) => n % 1 === 0;

export default function secondsToTimestamp(seconds) {
  if (typeof seconds !== 'number') {
    throw new TypeError(`Expected a number, got ${typeof seconds}`);
  }

  const slicePosition = isInt(seconds) ? 19 : 22;

  const result = new Date(seconds * 1000)
    .toISOString()
    .slice(11, slicePosition);

  return result;
}
