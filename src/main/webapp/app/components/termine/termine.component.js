System.register(["@angular/core", "../../model/termin.model", "../../services/termine.service", "rxjs/add/operator/map", "../../utils/SimpleLogger"], function (exports_1, context_1) {
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
    var core_1, termin_model_1, termine_service_1, SimpleLogger_1, TermineComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (termin_model_1_1) {
                termin_model_1 = termin_model_1_1;
            },
            function (termine_service_1_1) {
                termine_service_1 = termine_service_1_1;
            },
            function (_1) {
            },
            function (SimpleLogger_1_1) {
                SimpleLogger_1 = SimpleLogger_1_1;
            }
        ],
        execute: function () {
            /**
             *    <div class="row">
                  
                    <terminform-component [item]="edit" [editable]="true" (reset)=reset() ></terminform-component>
                 
                    </div>
             */
            TermineComponent = class TermineComponent {
                constructor(_service) {
                    this._service = _service;
                    this.reset();
                }
                ngOnInit() {
                    this.load();
                }
                onSubmit() {
                    this.reset();
                }
                reset() {
                    this.edit = new termin_model_1.Termin();
                }
                load() {
                    this.termine = this._service.getTermine();
                }
                onDelete(termin) {
                    let res;
                    this._service.delete(termin.id).subscribe(data => res = data, error => SimpleLogger_1.SimpleLogger.log(error), () => this.load());
                }
            };
            TermineComponent = __decorate([
                core_1.Component({
                    selector: "termine-component",
                    providers: [termine_service_1.TermineService],
                    template: `<h1>Termine</h1>
    <div class="container">
       <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-3">Termin</div>
          <div class="col-md-3">Ort</div>
          <div class="col-md-3">Anlass</div>
        <div>
        <div class="row" *ngFor="let item of termine  | async" >  
        <termin-component [item]="item" (delete)=onDelete($event) ></termin-component>
        </div>
     </div>
    
    
    `
                }),
                __metadata("design:paramtypes", [termine_service_1.TermineService])
            ], TermineComponent);
            exports_1("TermineComponent", TermineComponent);
        }
    };
});
//# sourceMappingURL=termine.component.js.map