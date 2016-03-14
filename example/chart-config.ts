interface eventC3 {
    (d): void;
    (): void;
    (d, element): void;
}

export class chartConfig{
    private groups:Array<Array<String>>;
    private chart = {};
    private data = {}
    private realTime;

    constructor(){
        this.groups = new Array<Array<String>>();
    }

    addGroup(group:Array<String>){
        this.groups.push(group);
    }

    addElementToGroup(index:number, graph:String){
        this.groups[index].push(graph);
    }

    setAttribute(name:String, content:any){
        this.chart[name.toString()] = content;
    }

    setBindTo(element:String){
        this.chart['bindto'] = element;
    }

    setWidth(width:number){
        if (this.chart['size'] == undefined){
            this.chart['size'] = {};
        }
        this.chart['size']['width'] = width;
    }

    setHeight(height:number){
        if (this.chart['size'] == undefined){
            this.chart['size'] = {};
        }
        this.chart['size']['height'] = height;
    }

    setPadding(direction:string, value:number){
        this.chart['padding'][direction.toString()] = value;
    }

    setTransition(value:number){
        this.chart['transition'] = {
            duration: value
        };
    }

    setRealTime(value:boolean | number){
        this.realTime = value;
    }

    addChartEvent(nom:string, action:eventC3){
        this.chart[nom.toString()] = action;
    }

    addDataEvent(nom:string, action:eventC3){
        this.data[nom.toString()] = action;
    }

    getBuild(){
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
    }

}