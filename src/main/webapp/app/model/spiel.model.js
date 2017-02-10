System.register(["./runde.model", "./knobler.model"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var runde_model_1, knobler_model_1;
    var Spiel;
    return {
        setters:[
            function (runde_model_1_1) {
                runde_model_1 = runde_model_1_1;
            },
            function (knobler_model_1_1) {
                knobler_model_1 = knobler_model_1_1;
            }],
        execute: function() {
            /*
             * To change this license header, choose License Headers in Project Properties.
             * To change this template file, choose Tools | Templates
             * and open the template in the editor.
             */
            Spiel = (function () {
                function Spiel(_termin) {
                    this._termin = _termin;
                    this.termin = _termin;
                    this.zaehler = 0;
                    this.init();
                }
                Spiel.prototype.init = function () {
                    var _this = this;
                    this.tabelle = new Map();
                    this.summe = new Map();
                    this.aktuelleRunde = new Map();
                    this.zaehler = 1;
                    knobler_model_1.KNOBLER.forEach(function (knobler) {
                        _this.tabelle.set(knobler, new Array());
                        var next = new runde_model_1.Runde(knobler, _this.zaehler);
                        _this.aktuelleRunde.set(knobler, next);
                        _this.tabelle.get(knobler).push(next);
                        _this.summe.set(knobler, new runde_model_1.Runde(knobler, 0));
                    });
                };
                Spiel.prototype.neueRunde = function () {
                    var _this = this;
                    this.aktuelleRunde = new Map();
                    this.zaehler = this.zaehler + 1;
                    knobler_model_1.KNOBLER.forEach(function (knobler) {
                        var next = new runde_model_1.Runde(knobler, _this.zaehler);
                        _this.aktuelleRunde.set(knobler, next);
                        _this.tabelle.get(knobler).push(next);
                    });
                };
                Spiel.prototype.calcSum = function () {
                    var _this = this;
                    knobler_model_1.KNOBLER.forEach(function (knobler) {
                        var sumRunde = _this.summe.get(knobler);
                        sumRunde.reset();
                        _this.tabelle.get(knobler).forEach(function (runde) {
                            sumRunde.add(runde);
                        });
                    });
                };
                return Spiel;
            }());
            exports_1("Spiel", Spiel);
        }
    }
});
//# sourceMappingURL=spiel.model.js.map