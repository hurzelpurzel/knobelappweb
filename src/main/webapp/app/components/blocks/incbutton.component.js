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
    var core_1, IncButtonComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            IncButtonComponent = class IncButtonComponent {
                constructor() {
                    this.changed = new core_1.EventEmitter();
                    this.counter = 0;
                }
                inc() {
                    this.counter++;
                    this.changed.emit(this.counter);
                }
                dec() {
                    if (this.counter > 0) {
                        this.counter--;
                        this.changed.emit(this.counter);
                    }
                }
            };
            __decorate([
                core_1.Input(),
                __metadata("design:type", Number)
            ], IncButtonComponent.prototype, "counter", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", core_1.EventEmitter)
            ], IncButtonComponent.prototype, "changed", void 0);
            IncButtonComponent = __decorate([
                core_1.Component({
                    selector: "incbutton-component",
                    template: `<span><button class="btn" (click)="inc()">+</button>
    <span class="counter">{{counter}}</span>
    <button class="btn" (click)="dec()">-</button> </span>`,
                    styles: ['.counter { font-weight: bold;  margin: 1em;}']
                }),
                __metadata("design:paramtypes", [])
            ], IncButtonComponent);
            exports_1("IncButtonComponent", IncButtonComponent);
        }
    };
});
//# sourceMappingURL=incbutton.component.js.map