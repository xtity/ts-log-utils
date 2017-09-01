import LogUtil from "./LogUtil";

/**
 * BatchLogUtil
 */
export default class BatchLogUtil extends LogUtil {
    public static init() {
        if (typeof (window) === "undefined") { // for server side
            // tslint:disable-next-line:no-eval
            const log4js = eval("require")("log4js");
            this.LOGGER = log4js.getLogger("batch");
        }
    }
}

BatchLogUtil.init();
