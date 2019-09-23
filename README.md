# Callmise

Call a **call**back style function and return a pro**mise**.

## Introduction

`async/await` are awesome. But sometimes we get an old style function and we just want to await it to run without any
effort to promisify it. If it is your case, this package may help.

## Installation

```bash
npm i @zhaoyao91/callmise
```

## Usage

```js
const callmise = require("@zhaoyao91/callmise");
const fs = require("fs");

// direct style
const files = await callmise(fs.readdir, "./file/dir");

// indirect style, in some cases the old function is not in standard format
const files = await callmise(done => fs.readdir("./file/dir", done));
```

## License

MIT
