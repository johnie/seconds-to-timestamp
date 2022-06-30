export default function secondsToTimestamp(seconds) {
  if (typeof seconds !== 'number') {
    throw new TypeError(`Expected a number, got ${typeof seconds}`);
  }

  const result = new Date(seconds * 1000).toISOString().slice(11, 19);

  return result;
}
