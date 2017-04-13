import * as assert from "power-assert";
import BatchLogUtil from "../../src/util/BatchLogUtil";

describe("class BatchLogUtil", () => {
    describe("getLogger(): log4js.Logger", () => {
        it("should be if void then typeof Logger.", () => {
            assert(typeof BatchLogUtil.getLogger(), "Logger");
        });
    });

    describe("trace(message: string, ...args: any[]): void", () => {
        it("should be if 'Log me!' then doesNotThrow.", () => {
            assert.doesNotThrow(() => {
                BatchLogUtil.trace("Log me!");
            });
        });
    });

    describe("debug(message: string, ...args: any[]): void", () => {
        it("should be if 'Log me!' then doesNotThrow.", () => {
            assert.doesNotThrow(() => {
                BatchLogUtil.debug("Log me!");
            });
        });
    });

    describe("info(message: string, ...args: any[]): void", () => {
        it("should be if 'Log me!' then doesNotThrow.", () => {
            assert.doesNotThrow(() => {
                BatchLogUtil.info("Log me!");
            });
        });
    });

    describe("warn(message: string, ...args: any[]): void", () => {
        it("should be if 'Log me!' then doesNotThrow.", () => {
            assert.doesNotThrow(() => {
                BatchLogUtil.warn("Log me!");
            });
        });
    });

    describe("error(message: string, ...args: any[]): void", () => {
        it("should be if 'Log me!' then doesNotThrow.", () => {
            assert.doesNotThrow(() => {
                BatchLogUtil.error("Log me!");
            });
        });
    });

    describe("fatal(message: string, ...args: any[]): void", () => {
        it("should be if 'Log me!' then doesNotThrow.", () => {
            assert.doesNotThrow(() => {
                BatchLogUtil.fatal("Log me!");
            });
        });
    });

});
