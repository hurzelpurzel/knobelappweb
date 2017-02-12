System.register(["@angular/core", "@angular/http", "@angular/common", "./components/blocks/incbutton.component", "./components/spiel/spiel.component", "./components/spiel/runde.component", "./components/spiel/rundekopf.component", "@angular/forms"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, common_1, incbutton_component_1, spiel_component_1, runde_component_1, rundekopf_component_1, forms_1, SpielModul;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (incbutton_component_1_1) {
                incbutton_component_1 = incbutton_component_1_1;
            },
            function (spiel_component_1_1) {
                spiel_component_1 = spiel_component_1_1;
            },
            function (runde_component_1_1) {
                runde_component_1 = runde_component_1_1;
            },
            function (rundekopf_component_1_1) {
                rundekopf_component_1 = rundekopf_component_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }
        ],
        execute: function () {
            SpielModul = class SpielModul {
            };
            SpielModul = __decorate([
                core_1.NgModule({
                    imports: [http_1.HttpModule, common_1.CommonModule, forms_1.FormsModule],
                    declarations: [incbutton_component_1.IncButtonComponent, spiel_component_1.SpielComponent, runde_component_1.RundeComponent, rundekopf_component_1.RundeKopfComponent],
                    exports: [spiel_component_1.SpielComponent]
                })
            ], SpielModul);
            exports_1("SpielModul", SpielModul);
        }
    };
});
//# sourceMappingURL=spiel.module.js.map