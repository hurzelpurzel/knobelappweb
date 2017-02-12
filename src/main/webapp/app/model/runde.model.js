System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Runde;
    return {
        setters: [],
        execute: function () {
            /*
             * To change this license header, choose License Headers in Project Properties.
             * To change this template file, choose Tools | Templates
             * and open the template in the editor.
             */
            Runde = class Runde {
                constructor(_knobler, _zaehler) {
                    this._knobler = _knobler;
                    this._zaehler = _zaehler;
                    this.knobler = _knobler;
                    this.zaehler = _zaehler;
                    this.reset();
                }
                reset() {
                    this.strafen = 0;
                    this.outs = 0;
                    this.dreiharte = 0;
                    this.haelften = 0;
                    this.runden = 0;
                }
                add(_other) {
                    this.strafen = this.strafen + _other.strafen;
                    this.outs = this.outs + _other.outs;
                    this.dreiharte = this.dreiharte + _other.dreiharte;
                    this.haelften = this.haelften + _other.haelften;
                    this.runden = this.runden + _other.runden;
                }
            };
            exports_1("Runde", Runde);
        }
    };
});
//# sourceMappingURL=runde.model.js.map