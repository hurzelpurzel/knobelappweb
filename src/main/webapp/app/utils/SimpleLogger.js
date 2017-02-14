/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SimpleLogger;
    return {
        setters: [],
        execute: function () {/*
             * To change this license header, choose License Headers in Project Properties.
             * To change this template file, choose Tools | Templates
             * and open the template in the editor.
             */
            SimpleLogger = class SimpleLogger {
                static log(message) {
                    if (typeof window.console !== 'undefined') {
                        window.console.log(message);
                    }
                }
            };
            exports_1("SimpleLogger", SimpleLogger);
        }
    };
});
//# sourceMappingURL=SimpleLogger.js.map