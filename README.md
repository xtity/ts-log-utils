# ts-log-utils

[![Codefresh build status]( https://g.codefresh.io/api/badges/build?repoOwner=xtity&repoName=ts-log-utils&branch=master&pipelineName=ts-log-utils&accountName=xtity&type=cf-1)]( https://g.codefresh.io/repositories/xtity/ts-log-utils/builds?filter=trigger:build;branch:master;service:58ef16884fc3e8010085e7a3~ts-log-utils)

TypeScript Log Utilities


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
    out:
      type: console
    batch:
      type: dateFile
      filename: "/tmp/batch.log"
      pattern: "-yyyy-MM-dd"
      backups: 3
  categories:
    default:
      appenders:
        - out
      level: ALL
    batch:
      appenders:
        - batch
      level: ALL
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


## sample

### code

``` typescript
import { LogUtils } from "ts-log-utils";

LogUtil.debug("Log me!");
```

### webpack.config.production.js

``` javascript
const uglifyEsPlugin = require("uglify-es-webpack-plugin");

const config = {
    plugins: [
        new uglifyEsPlugin({
            compress: {
                drop_console: true
            }
        })
    ]
}

module.exports = config;
```
