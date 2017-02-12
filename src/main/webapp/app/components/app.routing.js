System.register(["./termine/termine.component", "./spiel/spiel.component", "@angular/router"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var termine_component_1, spiel_component_1, router_1, routes, routing;
    return {
        setters: [
            function (termine_component_1_1) {
                termine_component_1 = termine_component_1_1;
            },
            function (spiel_component_1_1) {
                spiel_component_1 = spiel_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            routes = [
                { path: '',
                    redirectTo: '/termine',
                    pathMatch: 'full'
                },
                { path: "termine", component: termine_component_1.TermineComponent },
                { path: "spiel", component: spiel_component_1.SpielComponent }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(routes));
        }
    };
});
//# sourceMappingURL=app.routing.js.map