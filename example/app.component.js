System.register(['angular2/core', './c3a2'], function(exports_1, context_1) {
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
    var core_1, c3a2_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (c3a2_1_1) {
                c3a2_1 = c3a2_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.data = new Array();
                    this.config = new c3a2_1.chartConfig();
                    var v1 = new c3a2_1.chartData();
                    var v2 = new c3a2_1.chartData();
                    this.config.setTransition(0);
                    this.config.setBindTo('#chart');
                    v1.addValue(30);
                    v1.addValue(200);
                    v1.addValue(100);
                    v1.addValue(400);
                    v1.addValue(150);
                    v1.addValue(250);
                    v1.setTitle('cpu');
                    v1.setType('area-spline');
                    v2.addValue(130);
                    v2.addValue(20);
                    v2.addValue(150);
                    v2.addValue(40);
                    v2.addValue(150);
                    v2.addValue(350);
                    v2.setTitle('cpu2');
                    v2.setType('scatter');
                    this.addValue(v1);
                    this.data.push(v1);
                    this.data.push(v2);
                }
                AppComponent.prototype.addValue = function (v1) {
                    var _this = this;
                    setTimeout(function () {
                        v1.addValue(Math.floor((Math.random() * 200) + 1));
                        _this.addValue(v1);
                    }, 5000);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: '<h1>My First Angular 2 App</h1><chart [config]="config" [data]="data"></chart>',
                        directives: [c3a2_1.CHART_DIRECTIVE]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map