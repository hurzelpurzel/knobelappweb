System.register(["angular2/core", "../../model/termin.model", "../../services/termine.service", "./termin.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, termin_model_1, termine_service_1, termin_component_1;
    var TermineComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (termin_model_1_1) {
                termin_model_1 = termin_model_1_1;
            },
            function (termine_service_1_1) {
                termine_service_1 = termine_service_1_1;
            },
            function (termin_component_1_1) {
                termin_component_1 = termin_component_1_1;
            }],
        execute: function() {
            let TermineComponent = class TermineComponent {
                constructor(_service) {
                    this._service = _service;
                    this.termine = new Array();
                    this.reset();
                }
                ngOnInit() {
                    this.load();
                }
                onSubmit() {
                    this.termine.push(this.edit);
                    this.reset();
                }
                reset() {
                    this.edit = new termin_model_1.Termin();
                }
                load() {
                    this.termine = new Array();
                    //this._service.getTermine().do(termine => { this.termine = termine});
                }
                onDelete(event) {
                }
            };
            TermineComponent = __decorate([
                core_1.Component({
                    selector: "termine-component",
                    directives: [termin_component_1.TerminComponent],
                    template: `<h1>Termine</h1>
    <div class="container">
       <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-3">Termin</div>
          <div class="col-md-3">Ort</div>
          <div class="col-md-3">Anlass</div>
        <div>
        <div class="row" *ngFor="#item of termine" >  
        <termin-component [item]="item" (delete)=onDelete($event) ><termin.component>
        </div>
        <div class="row">  
        <termin-component [item]="edit" []editable="true" (reset)=reset() ><termin.component>
        </div>
    </div>
    
    
    ` }), 
                __metadata('design:paramtypes', [termine_service_1.TermineService])
            ], TermineComponent);
            exports_1("TermineComponent", TermineComponent);
        }
    }
});
//# sourceMappingURL=termine.component.js.map