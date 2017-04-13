import * as config from "config";
import * as log4js from "log4js";
import LogUtil from "./LogUtil";

/**
 * BatchLogUtil
 */
export default class BatchLogUtil extends LogUtil {
    public static init() {
        log4js.configure(<any>config.get("log4js"));
        this.LOGGER = log4js.getLogger("batch");
    }
}

BatchLogUtil.init();
