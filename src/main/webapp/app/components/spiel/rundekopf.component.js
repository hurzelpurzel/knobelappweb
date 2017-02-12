System.register(["@angular/core"], function (exports_1, context_1) {
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
    var core_1, RundeKopfComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            RundeKopfComponent = class RundeKopfComponent {
            };
            __decorate([
                core_1.Input(),
                __metadata("design:type", Number)
            ], RundeKopfComponent.prototype, "rundenzaehler", void 0);
            RundeKopfComponent = __decorate([
                core_1.Component({
                    selector: "rundekopf-component",
                    styles: ['.headline{ font-weight: bolder; margin: 1em; align: center}'],
                    template: `  
        <button class="btn-primary">Runde: {{rundenzaehler}} </button>
        
        <div class="row headline">
            <div class="col-md-2">Knobler</div>
            <div class="col-md-2">Runden</div>
            <div class="col-md-2">H&auml;lften</div>
            <div class="col-md-2">Outs</div>
            <div class="col-md-2">Dreiharte</div>
            <div class="col-md-2">Strafen</div>
        </div >
      
     `
                })
            ], RundeKopfComponent);
            exports_1("RundeKopfComponent", RundeKopfComponent);
        }
    };
});
//# sourceMappingURL=rundekopf.component.js.map