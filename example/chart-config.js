System.register([], function(exports_1) {
    var chartConfig;
    return {
        setters:[],
        execute: function() {
            chartConfig = (function () {
                function chartConfig() {
                    this.chart = {};
                    this.data = {};
                    this.groups = new Array();
                }
                chartConfig.prototype.addGroup = function (group) {
                    this.groups.push(group);
                };
                chartConfig.prototype.addElementToGroup = function (index, graph) {
                    this.groups[index].push(graph);
                };
                chartConfig.prototype.setAttribute = function (name, content) {
                    this.chart[name.toString()] = content;
                };
                chartConfig.prototype.setBindTo = function (element) {
                    this.chart['bindto'] = element;
                };
                chartConfig.prototype.setWidth = function (width) {
                    if (this.chart['size'] == undefined) {
                        this.chart['size'] = {};
                    }
                    this.chart['size']['width'] = width;
                };
                chartConfig.prototype.setHeight = function (height) {
                    if (this.chart['size'] == undefined) {
                        this.chart['size'] = {};
                    }
                    this.chart['size']['height'] = height;
                };
                chartConfig.prototype.setPadding = function (direction, value) {
                    this.chart['padding'][direction.toString()] = value;
                };
                chartConfig.prototype.setTransition = function (value) {
                    this.chart['transition'] = {
                        duration: value
                    };
                };
                chartConfig.prototype.setRealTime = function (value) {
                    this.realTime = value;
                };
                chartConfig.prototype.addChartEvent = function (nom, action) {
                    this.chart[nom.toString()] = action;
                };
                chartConfig.prototype.addDataEvent = function (nom, action) {
                    this.data[nom.toString()] = action;
                };
                chartConfig.prototype.getBuild = function () {
                    if (this.realTime != undefined) {
                        this.chart['realTime'] = {
                            nbPoint: typeof this.realTime == 'number' ? this.realTime : 20
                        };
                    }
                    this.data['empty'] = {
                        label: {
                            text: "No Data"
                        }
                    };
                    this.data['columns'] = [];
                    this.data['types'] = [];
                    this.chart['data'] = this.data;
                    return this.chart;
                };
                return chartConfig;
            })();
            exports_1("chartConfig", chartConfig);
        }
    }
});
//# sourceMappingURL=chart-config.js.map