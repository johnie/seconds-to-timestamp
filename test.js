import test from 'ava';
import secondsToTimestamp from './index.js';

test('Throw error if seconds are string', (t) => {
  t.throws(
    () => {
      secondsToTimestamp('hello');
    },
    {
      instanceOf: TypeError,
      message: 'Expected a number, got string',
    }
  );
});

test('Format and validate "1 second"', (t) => {
  t.is(secondsToTimestamp(1), '00:00:01');
});

test('Format and validate "10 seconds"', (t) => {
  t.is(secondsToTimestamp(10), '00:00:10');
});

test('Format and validate "600 seconds as 10 minutes"', (t) => {
  t.is(secondsToTimestamp(600), '00:10:00');
});

test('Format and validate "3600 seconds as 1 hour"', (t) => {
  t.is(secondsToTimestamp(3600), '01:00:00');
});

test('Format and validate "4321 seconds as 1 hour 12 minutes and 1 second"', (t) => {
  t.is(secondsToTimestamp(4321), '01:12:01');
});
