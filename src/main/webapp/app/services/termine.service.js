System.register(["@angular/core", "@angular/http", "rxjs/add/operator/map", "rxjs/add/operator/catch", "rxjs/Observable", "../utils/SimpleLogger"], function (exports_1, context_1) {
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
    var core_1, http_1, Observable_1, SimpleLogger_1, TermineService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            },
            function (_2) {
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (SimpleLogger_1_1) {
                SimpleLogger_1 = SimpleLogger_1_1;
            }
        ],
        execute: function () {
            TermineService = class TermineService {
                constructor(_http) {
                    this._http = _http;
                    this._baseUri = "http://localhost:8090/knobelapp/rest/termine/";
                }
                persist(termine) {
                }
                getTermine() {
                    return this._http.get(this._baseUri).map(response => response.json());
                }
                delete(id) {
                    let uri = this._baseUri + id;
                    SimpleLogger_1.SimpleLogger.log(uri);
                    this._http.delete(uri).map(res => this.handleResult(res.json())).catch(this.handleError);
                    return this.getTermine();
                }
                handleResult(res) {
                    alert(res ? "success" : "failed");
                }
                handleError(error) {
                    SimpleLogger_1.SimpleLogger.log(error);
                    return Observable_1.Observable.throw(error);
                }
            };
            TermineService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], TermineService);
            exports_1("TermineService", TermineService);
        }
    };
});
//# sourceMappingURL=termine.service.js.map