# ts-log-utils
logを使うためのユーティリティ。


## Requirements
* [config](https://www.npmjs.com/package/config)


## Configuration

### 設定ファイル
${project root}/config/default.yml

※ 設定ファイル名等は、 [config](https://www.npmjs.com/package/config) に準拠。

### 設定例
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

### インストール

``` bash
npm install --save-dev @xtity/ts-log-utils
```

### ビルド

``` bash
npm run build
```

### テスト

``` bash
npm run test
```

### カバレッジ

``` bash
npm run coverage
open ./coverage/ts-report/index.html
```


### 使用例

``` typescript
import { LogUtils } from "@xtity/ts-log-utils";

LogUtil.debug("Log me!");
```
