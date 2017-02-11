System.register(["angular2/core", "../../model/termin.model"], function(exports_1, context_1) {
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
    var core_1, termin_model_1;
    var TerminComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (termin_model_1_1) {
                termin_model_1 = termin_model_1_1;
            }],
        execute: function() {
            let TerminComponent = class TerminComponent {
                constructor() {
                    /* Default values if input is not given*/
                    this.item = new termin_model_1.Termin();
                    this.editable = false;
                    this.delete = new core_1.EventEmitter();
                    this.create = new core_1.EventEmitter();
                    this.reset = new core_1.EventEmitter();
                }
                onReset() {
                    this.reset.emit(this.item);
                }
                onSubmit() {
                    this.create.emit(this.item);
                }
                doDelete() {
                    this.delete.emit(this.item);
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', termin_model_1.Termin)
            ], TerminComponent.prototype, "item", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Boolean)
            ], TerminComponent.prototype, "editable", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', core_1.EventEmitter)
            ], TerminComponent.prototype, "delete", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', core_1.EventEmitter)
            ], TerminComponent.prototype, "create", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', core_1.EventEmitter)
            ], TerminComponent.prototype, "reset", void 0);
            TerminComponent = __decorate([
                core_1.Component({
                    selector: "termin-component",
                    template: `
    <div class="row" ng-if="!editable">  
           
            <div class="col-md-3"><button class="btn btn-danger" type="button" (click)="doDelete()">L&ouml;schen</button></div>
            <div class="col-md-3">{{item.termin}}</div>
            <div class="col-md-3">{{item.ort}}</div>
            <div class="col-md-3">{{item.anlass}}</div>
        </div>
        <div class="row" ng-if="editable">  
        <form class="form-container form-horizontal" (submit)="onSubmit()">
            <div class="form-group">
            <label class="control-label col-sm-1">Termin</label><div class="col-sm-11"><input type="date" [(ngModel)]="item.termin"/>
            </div></div>
             <div class="form-group">
            <label class="control-label col-sm-1">Ort</label><div class="col-sm-11"><input type="text" [(ngModel)]="item.ort"/>
            </div></div>
             <div class="form-group">
            <label class="control-label col-sm-1">Anlass</label><div class="col-sm-11"><input type="text" [(ngModel)]="item.anlass"/>
            </div></div>
            <div class="form-group">
            <button class="btn btn-primary" type="submit">Anlegen</button>
            <button class="btn btn-danger" type="button" (click)="onReset()">Neu</button>
            </div>
        </form>
        </div>
    </div>
    
    
    ` }), 
                __metadata('design:paramtypes', [])
            ], TerminComponent);
            exports_1("TerminComponent", TerminComponent);
        }
    }
});
//# sourceMappingURL=termin.component.js.map