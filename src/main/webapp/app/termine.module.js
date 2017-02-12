System.register(["@angular/core", "@angular/http", "@angular/common", "./services/termine.service", "./components/termine/termine.component", "./components/termine/termin.component", "@angular/forms"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, common_1, termine_service_1, termine_component_1, termin_component_1, forms_1, TermineModul;
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
            function (termine_service_1_1) {
                termine_service_1 = termine_service_1_1;
            },
            function (termine_component_1_1) {
                termine_component_1 = termine_component_1_1;
            },
            function (termin_component_1_1) {
                termin_component_1 = termin_component_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }
        ],
        execute: function () {
            TermineModul = class TermineModul {
            };
            TermineModul = __decorate([
                core_1.NgModule({
                    imports: [http_1.HttpModule, common_1.CommonModule, forms_1.FormsModule],
                    declarations: [termine_component_1.TermineComponent, termin_component_1.TerminComponent],
                    exports: [termine_component_1.TermineComponent],
                    providers: [termine_service_1.TermineService]
                })
            ], TermineModul);
            exports_1("TermineModul", TermineModul);
        }
    };
});
//# sourceMappingURL=termine.module.js.map