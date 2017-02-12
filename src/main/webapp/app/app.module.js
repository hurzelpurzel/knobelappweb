System.register(["./components/app.component", "@angular/core", "@angular/platform-browser", "@angular/platform-browser-dynamic", "./components/app.routing", "./termine.module", "./spiel.module", "@angular/common", "@angular/forms"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var app_component_1, core_1, platform_browser_1, platform_browser_dynamic_1, app_routing_1, termine_module_1, spiel_module_1, common_1, forms_1, AppModule;
    return {
        setters: [
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (termine_module_1_1) {
                termine_module_1 = termine_module_1_1;
            },
            function (spiel_module_1_1) {
                spiel_module_1 = spiel_module_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }
        ],
        execute: function () {
            AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.routing, termine_module_1.TermineModul, spiel_module_1.SpielModul],
                    declarations: [app_component_1.AppComponent],
                    bootstrap: [app_component_1.AppComponent],
                    providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/knobelapp' }]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
            // App bootstrap
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map