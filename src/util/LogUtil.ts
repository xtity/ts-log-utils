import * as config from "config";
import * as log4js from "log4js";

/**
 * LogUtil
 */
export default class LogUtil {

    protected static LOGGER: log4js.Logger;

    public static init() {
        log4js.configure(<any>config.get("log4js"));
        this.LOGGER = log4js.getLogger();
    }

    public static getLogger(): log4js.Logger {
        return this.LOGGER;
    }

    public static trace(message: string, ...args: any[]): void {
        this.LOGGER.trace(message, args);
    }

    public static debug(message: string, ...args: any[]): void {
        this.LOGGER.debug(message, args);
    }

    public static info(message: string, ...args: any[]): void {
        this.LOGGER.info(message, args);
    }

    public static warn(message: string, ...args: any[]): void {
        this.LOGGER.warn(message, args);
    }

    public static error(message: string, ...args: any[]): void {
        this.LOGGER.error(message, args);
    }

    public static fatal(message: string, ...args: any[]): void {
        this.LOGGER.fatal(message, args);
    }

}

LogUtil.init();
