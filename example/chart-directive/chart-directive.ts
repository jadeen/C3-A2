import {chartData} from './../chart-data';
import {chartConfig} from './../chart-config';

import {AfterViewInit,Component, Input, ChangeDetectorRef} from 'angular2/core';

declare var c3:any;

@Component({
    selector: 'chart',
    template: '<div [id]="elementId"></div>',
    properties: [
        'config'
    ]
})

export class CHART_DIRECTIVE implements AfterViewInit{
    public chart:any;
    public elements;
    public elementId = "";

    @Input('data') data: Array<chartData>;
    public config:chartConfig;

    constructor(public cdr: ChangeDetectorRef){
    }

    ngAfterViewInit(){
        this.build();
    }

    advanceGraph(step:number, index, callback){
        if (index == this.elements.data.columns.length){
            callback();
        }else {
            this.elements.data.columns[index].splice(1, step);
            if (this.elements.data.columns[index].length == 1){
                this.chart.unload({ids: this.elements.data.columns[index][0]});
                this.elements.data.columns.splice(index,1);
                this.advanceGraph(step, index, callback);
            }else {
                this.advanceGraph(step, index + 1, callback);
            }
        }
    }

    updateDate(data:Array<chartData>){
        var update = {columns: []};
        if (data.length == this.elements.realTime.nbPoint){
            this.advanceGraph(1, 0, ()=>{
                var update = {columns: this.elements.data.columns};
                this.chart.load(update);
            });
        }else {
            update.columns.push(data);
            this.chart.load(update);
        }
    }

    buildGraph(index, callback){
        if (index == this.data.length){
            callback();
        }else {
            var columns = new Array<any>();
            columns.push(this.data[index].getTitle());
            columns = columns.concat(this.data[index].getValues());
            this.elements.data.columns.push(columns);
            this.elements.data.types[this.data[index].getTitle().toString()] = this.data[index].getType();
            this.buildGraph(index + 1, callback);
            if (this.elements.realTime != undefined) {
                this.data[index].dataUpdate.subscribe((val) => {
                    this.elements.data.columns[index].push(val);
                    this.updateDate(this.elements.data.columns[index]);
                });
            }
        }
    }

    build(){

        this.elements = this.config.getBuild();
        this.elementId = this.elements.bindto.replace('#','');
        this.cdr.detectChanges();
        this.buildGraph(0, () => {
            this.chart = c3.generate(this.elements);
        });
    }
}