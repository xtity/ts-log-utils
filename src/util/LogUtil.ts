/**
 * LogUtil
 */
export default class LogUtil {

    protected static LOGGER: any;

    public static init() {
        if (typeof (window) === "undefined") { // for server side
            // tslint:disable-next-line:no-eval
            const config = eval("require")("config");
            // tslint:disable-next-line:no-eval
            const log4js = eval("require")("log4js");

            log4js.configure(config.get("log4js"));
            this.LOGGER = log4js.getLogger();
        }
    }

    public static getLogger(): any {
        if (typeof (window) === "undefined") { // for server side
            return this.LOGGER;
        } else { // for client side
            return console;
        }
    }

    public static trace(message: string, ...args: any[]): void {
        if (typeof (window) === "undefined") { // for server side
            this.LOGGER.trace(message, args);
        } else { // for client side
            if (0 < args.length) {
                console.trace(message, args);
            } else {
                console.trace(message);
            }
        }
    }

    public static debug(message: string, ...args: any[]): void {
        if (typeof (window) === "undefined") { // for server side
            this.LOGGER.debug(message, args);
        } else { // for client side
            if (0 < args.length) {
                console.debug(message, args);
            } else {
                console.debug(message);
            }
        }
    }

    public static info(message: string, ...args: any[]): void {
        if (typeof (window) === "undefined") { // for server side
            this.LOGGER.info(message, args);
        } else { // for client side
            if (0 < args.length) {
                console.info(message, args);
            } else {
                console.info(message);
            }
        }
    }

    public static warn(message: string, ...args: any[]): void {
        if (typeof (window) === "undefined") { // for server side
            this.LOGGER.warn(message, args);
        } else { // for client side
            if (0 < args.length) {
                console.warn(message, args);
            } else {
                console.warn(message);
            }
        }
    }

    public static error(message: string, ...args: any[]): void {
        if (typeof (window) === "undefined") { // for server side
            this.LOGGER.error(message, args);
        } else { // for client side
            if (0 < args.length) {
                console.error(message, args);
            } else {
                console.error(message);
            }
        }
    }

    public static fatal(message: string, ...args: any[]): void {
        if (typeof (window) === "undefined") { // for server side
            this.LOGGER.fatal(message, args);
        } else { // for client side
            LogUtil.error(message, args);
        }
    }

}

LogUtil.init();
