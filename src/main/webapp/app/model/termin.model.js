/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Termin;
    return {
        setters: [],
        execute: function () {/*
             * To change this license header, choose License Headers in Project Properties.
             * To change this template file, choose Tools | Templates
             * and open the template in the editor.
             */
            Termin = class Termin {
                constructor() {
                    this.id = -1;
                    this.termin = new Date();
                    this.ort = "";
                    this.anlass = "";
                }
            };
            exports_1("Termin", Termin);
        }
    };
});
//# sourceMappingURL=termin.model.js.map