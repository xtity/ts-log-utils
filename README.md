# ts-log-utils
Typescript Log Utilities


## Requirements
* [config](https://www.npmjs.com/package/config)


## Configuration

### configuration file
${project root}/config/default.yml

See [config](https://www.npmjs.com/package/config)

### example
``` yml
log4js:
  appenders:
  - category: batch
    type: dateFile
    filename: "/tmp/batch.log"
    pattern: "-yyyy-MM-dd"
    backups: 3
  - type: console
  levels:
    batch: ALL
```

## Usage

### install

``` bash
npm install --save-dev ts-log-utils
```

### build

``` bash
npm run build
```

### test

``` bash
npm run test
```

### coverage

``` bash
npm run coverage
open ./coverage/ts-report/index.html
```


### example

``` typescript
import { LogUtils } from "ts-log-utils";

LogUtil.debug("Log me!");
```
