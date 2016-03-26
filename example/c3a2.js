System.register(['./chart-data', './chart-config', './chart-directive/chart-directive'], function(exports_1) {
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (chart_data_1_1) {
                exportStar_1(chart_data_1_1);
            },
            function (chart_config_1_1) {
                exportStar_1(chart_config_1_1);
            },
            function (chart_directive_1_1) {
                exportStar_1(chart_directive_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=c3a2.js.map