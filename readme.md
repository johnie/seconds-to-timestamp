![test status](https://github.com/johnie/seconds-to-timestamp/actions/workflows/main.yml/badge.svg)

# seconds-to-timestamp

> Convert seconds to HH:MM:SS

## Getting started

### Install

```sh
npm install seconds-to-timestamp
```

### Usage

```js
import secondsToTimestamp from 'seconds-to-timestamp';

secondsToTimestamp(4321);
//=> '01:12:01'
```

## API

### secondsToTimestamp(seconds)

#### seconds

Type: `number`

Converted the seconds to milliseconds by multiplying them by `1000`.

## Licence

[MIT](/licence) © Johnie Hjelm
