import * as assert from "power-assert";
import LogUtil from "../../src/util/LogUtil";

describe("class LogUtil", () => {
    describe("getLogger(): log4js.Logger", () => {
        it("should be if void then typeof Logger.", () => {
            assert(typeof LogUtil.getLogger(), "Logger");
        });
    });

    describe("trace(message: string, ...args: any[]): void", () => {
        it("should be if 'Log me!' then doesNotThrow.", () => {
            assert.doesNotThrow(() => {
                LogUtil.trace("Log me!");
            });
        });
    });

    describe("debug(message: string, ...args: any[]): void", () => {
        it("should be if 'Log me!' then doesNotThrow.", () => {
            assert.doesNotThrow(() => {
                LogUtil.debug("Log me!");
            });
        });
    });

    describe("info(message: string, ...args: any[]): void", () => {
        it("should be if 'Log me!' then doesNotThrow.", () => {
            assert.doesNotThrow(() => {
                LogUtil.info("Log me!");
            });
        });
    });

    describe("warn(message: string, ...args: any[]): void", () => {
        it("should be if 'Log me!' then doesNotThrow.", () => {
            assert.doesNotThrow(() => {
                LogUtil.warn("Log me!");
            });
        });
    });

    describe("error(message: string, ...args: any[]): void", () => {
        it("should be if 'Log me!' then doesNotThrow.", () => {
            assert.doesNotThrow(() => {
                LogUtil.error("Log me!");
            });
        });
    });

    describe("fatal(message: string, ...args: any[]): void", () => {
        it("should be if 'Log me!' then doesNotThrow.", () => {
            assert.doesNotThrow(() => {
                LogUtil.fatal("Log me!");
            });
        });
    });

});
