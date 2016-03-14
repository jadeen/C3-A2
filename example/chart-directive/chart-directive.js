System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var CHART_DIRECTIVE;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CHART_DIRECTIVE = (function () {
                function CHART_DIRECTIVE(cdr) {
                    this.cdr = cdr;
                    this.elementId = "";
                }
                CHART_DIRECTIVE.prototype.ngAfterViewInit = function () {
                    this.build();
                };
                CHART_DIRECTIVE.prototype.advanceGraph = function (step, index, callback) {
                    if (index == this.elements.data.columns.length) {
                        callback();
                    }
                    else {
                        this.elements.data.columns[index].splice(1, step);
                        if (this.elements.data.columns[index].length == 1) {
                            this.chart.unload({ ids: this.elements.data.columns[index][0] });
                            this.elements.data.columns.splice(index, 1);
                            this.advanceGraph(step, index, callback);
                        }
                        else {
                            this.advanceGraph(step, index + 1, callback);
                        }
                    }
                };
                CHART_DIRECTIVE.prototype.updateDate = function (data) {
                    var _this = this;
                    var update = { columns: [] };
                    if (data.length == this.elements.realTime.nbPoint) {
                        this.advanceGraph(1, 0, function () {
                            var update = { columns: _this.elements.data.columns };
                            _this.chart.load(update);
                        });
                    }
                    else {
                        update.columns.push(data);
                        this.chart.load(update);
                    }
                };
                CHART_DIRECTIVE.prototype.buildGraph = function (index, callback) {
                    var _this = this;
                    if (index == this.data.length) {
                        callback();
                    }
                    else {
                        var columns = new Array();
                        columns.push(this.data[index].getTitle());
                        columns = columns.concat(this.data[index].getValues());
                        this.elements.data.columns.push(columns);
                        this.elements.data.types[this.data[index].getTitle().toString()] = this.data[index].getType();
                        this.buildGraph(index + 1, callback);
                        if (this.elements.realTime != undefined) {
                            this.data[index].dataUpdate.subscribe(function (val) {
                                _this.elements.data.columns[index].push(val);
                                _this.updateDate(_this.elements.data.columns[index]);
                            });
                        }
                    }
                };
                CHART_DIRECTIVE.prototype.build = function () {
                    var _this = this;
                    this.elements = this.config.getBuild();
                    this.elementId = this.elements.bindto.replace('#', '');
                    this.cdr.detectChanges();
                    this.buildGraph(0, function () {
                        _this.chart = c3.generate(_this.elements);
                    });
                };
                __decorate([
                    core_1.Input('data'), 
                    __metadata('design:type', Array)
                ], CHART_DIRECTIVE.prototype, "data", void 0);
                CHART_DIRECTIVE = __decorate([
                    core_1.Component({
                        selector: 'chart',
                        template: '<div [id]="elementId"></div>',
                        properties: [
                            'config'
                        ]
                    }), 
                    __metadata('design:paramtypes', [core_1.ChangeDetectorRef])
                ], CHART_DIRECTIVE);
                return CHART_DIRECTIVE;
            }());
            exports_1("CHART_DIRECTIVE", CHART_DIRECTIVE);
        }
    }
});
//# sourceMappingURL=chart-directive.js.map