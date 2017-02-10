System.register(["angular2/core", "../../model/runde.model", "../blocks/incbutton.component"], function(exports_1, context_1) {
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
    var core_1, runde_model_1, incbutton_component_1;
    var RundeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (runde_model_1_1) {
                runde_model_1 = runde_model_1_1;
            },
            function (incbutton_component_1_1) {
                incbutton_component_1 = incbutton_component_1_1;
            }],
        execute: function() {
            RundeComponent = (function () {
                function RundeComponent() {
                }
                RundeComponent.prototype.getValue = function (name) {
                    return this.runde[name];
                };
                RundeComponent.prototype.onChanged = function (name, value) {
                    this.runde[name] = value;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', runde_model_1.Runde)
                ], RundeComponent.prototype, "runde", void 0);
                RundeComponent = __decorate([
                    core_1.Component({
                        selector: "runde-component",
                        directives: [incbutton_component_1.IncButtonComponent],
                        template: "  \n        <div class=\"row\">\n            <div class=\"col-md-2\">{{runde.knobler}}</div>\n            <div class=\"col-md-2\"><incbutton-component [counter]=\"getValue('runden')\" (changed)=\"onChanged('runden',$event)\" ></incbutton-component></div>\n            <div class=\"col-md-2\"><incbutton-component [counter]=\"getValue('haelften')\" (changed)=\"onChanged('haelften',$event)\" ></incbutton-component></div>\n            <div class=\"col-md-2\"><incbutton-component [counter]=\"getValue('outs')\" (changed)=\"onChanged('outs',$event)\" ></incbutton-component></div>\n            <div class=\"col-md-2\"><incbutton-component [counter]=\"getValue('dreiharte')\" (changed)=\"onChanged('dreiharte',$event)\" ></incbutton-component></div>\n            <div class=\"col-md-2\"><incbutton-component [counter]=\"getValue('strafen')\" (changed)=\"onChanged('strafen',$event)\" ></incbutton-component></div>\n        </div >\n      \n     " }), 
                    __metadata('design:paramtypes', [])
                ], RundeComponent);
                return RundeComponent;
            }());
            exports_1("RundeComponent", RundeComponent);
        }
    }
});
//# sourceMappingURL=runde.component.js.map