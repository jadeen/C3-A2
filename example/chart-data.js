System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var chartData;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            chartData = (function () {
                function chartData() {
                    this.data = new Array();
                    this.region = new Array();
                    this.dataUpdate = new core_1.EventEmitter();
                }
                chartData.prototype.addValue = function (val) {
                    if (this.data.length == 100) {
                        this.data.shift();
                    }
                    this.data.push(val);
                    this.dataUpdate.emit(val);
                };
                chartData.prototype.getValues = function () {
                    return this.data;
                };
                chartData.prototype.setTitle = function (title) { this.title = title; };
                chartData.prototype.getTitle = function () { return this.title; };
                chartData.prototype.setType = function (type) { this.type = type; };
                chartData.prototype.getType = function () { return this.type; };
                chartData.prototype.setColor = function (color) { this.color = color; };
                chartData.prototype.getColor = function () { return this.color; };
                chartData.prototype.setRegion = function (start, end, style) {
                    if (end === void 0) { end = null; }
                    if (style === void 0) { style = null; }
                    if (end == null && style == null) {
                        this.region.push({ start: start });
                    }
                    else if (style == null) {
                        this.region.push({ start: start, end: end });
                    }
                    else if (end == null) {
                        this.region.push({ start: start, style: style });
                    }
                    else {
                        this.region.push({ start: start, end: end, style: style });
                    }
                };
                return chartData;
            }());
            exports_1("chartData", chartData);
        }
    }
});
//# sourceMappingURL=chart-data.js.map