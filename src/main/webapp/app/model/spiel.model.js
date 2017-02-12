System.register(["./runde.model", "./knobler.model"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var runde_model_1, knobler_model_1, Spiel;
    return {
        setters: [
            function (runde_model_1_1) {
                runde_model_1 = runde_model_1_1;
            },
            function (knobler_model_1_1) {
                knobler_model_1 = knobler_model_1_1;
            }
        ],
        execute: function () {
            /*
             * To change this license header, choose License Headers in Project Properties.
             * To change this template file, choose Tools | Templates
             * and open the template in the editor.
             */
            Spiel = class Spiel {
                constructor(_termin) {
                    this._termin = _termin;
                    this.termin = _termin;
                    this.zaehler = 0;
                    this.init();
                }
                init() {
                    this.tabelle = new Map();
                    this.summe = new Map();
                    this.aktuelleRunde = new Map();
                    this.zaehler = 1;
                    knobler_model_1.KNOBLER.forEach(knobler => {
                        this.tabelle.set(knobler, new Array());
                        let next = new runde_model_1.Runde(knobler, this.zaehler);
                        this.aktuelleRunde.set(knobler, next);
                        this.tabelle.get(knobler).push(next);
                        this.summe.set(knobler, new runde_model_1.Runde(knobler, 0));
                    });
                }
                neueRunde() {
                    this.aktuelleRunde = new Map();
                    this.zaehler = this.zaehler + 1;
                    knobler_model_1.KNOBLER.forEach(knobler => {
                        let next = new runde_model_1.Runde(knobler, this.zaehler);
                        this.aktuelleRunde.set(knobler, next);
                        this.tabelle.get(knobler).push(next);
                    });
                }
                calcSum() {
                    knobler_model_1.KNOBLER.forEach(knobler => {
                        var sumRunde = this.summe.get(knobler);
                        sumRunde.reset();
                        this.tabelle.get(knobler).forEach(runde => {
                            sumRunde.add(runde);
                        });
                    });
                }
            };
            exports_1("Spiel", Spiel);
        }
    };
});
//# sourceMappingURL=spiel.model.js.map