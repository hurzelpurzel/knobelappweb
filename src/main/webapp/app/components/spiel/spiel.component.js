System.register(["@angular/core", "../../model/spiel.model", "../../model/termin.model", "../../model/knobler.model"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, spiel_model_1, termin_model_1, knobler_model_1, SpielComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (spiel_model_1_1) {
                spiel_model_1 = spiel_model_1_1;
            },
            function (termin_model_1_1) {
                termin_model_1 = termin_model_1_1;
            },
            function (knobler_model_1_1) {
                knobler_model_1 = knobler_model_1_1;
            }
        ],
        execute: function () {
            SpielComponent = class SpielComponent {
                constructor() {
                    this.knobeler = knobler_model_1.KNOBLER;
                    this.termin = new termin_model_1.Termin();
                    this.spiel = new spiel_model_1.Spiel(this.termin);
                    this.init();
                }
                init() {
                    this.spiel.init();
                }
                neueRunde() {
                    this.spiel.neueRunde();
                }
            };
            SpielComponent = __decorate([
                core_1.Component({
                    selector: "spiel-component",
                    template: `
        <rundekopf-component [rundenzaehler]="spiel.zaehler"></rundekopf-component>
        <div *ngFor="let cur of knobeler">
            <runde-component [runde]="spiel.aktuelleRunde.get(cur)" ></runde-component>
        </div>
         
    `
                }),
                __metadata("design:paramtypes", [])
            ], SpielComponent);
            exports_1("SpielComponent", SpielComponent);
        }
    };
});
//# sourceMappingURL=spiel.component.js.map