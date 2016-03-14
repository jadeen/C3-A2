import {Component} from 'angular2/core';
import {AfterViewInit} from 'angular2/core';
import {chartData, chartConfig, CHART_DIRECTIVE} from './c3a2';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><chart [config]="config" [data]="data"></chart>',
    directives: [CHART_DIRECTIVE]
})
export class AppComponent{
    public data:Array<chartData>;
    public config:chartConfig;
    constructor(){
        this.data = new Array<chartData>();
        this.config = new chartConfig();
        var v1 = new chartData();
        var v2 = new chartData();

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

    addValue(v1){
        setTimeout(() => {
            v1.addValue(Math.floor((Math.random() * 200) + 1));
            this.addValue(v1);
        }, 5000);
    }
}