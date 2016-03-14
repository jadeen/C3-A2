
import {EventEmitter} from 'angular2/core';

export class chartData {
    private data: Array<any>;
    private title:String;
    private type:String;
    private color:String;
    private region:Array<any>;
    public dataUpdate:EventEmitter<any>;


    public constructor(){
        this.data = new Array<any>();
        this.region = new Array<any>();
        this.dataUpdate = new EventEmitter<any>();
    }

    public addValue(val:any){
        if (this.data.length == 100){
            this.data.shift();
        }
        this.data.push(val);
        this.dataUpdate.emit(val);
    }

    public getValues():Array<any>{
        return this.data;
    }

    public setTitle(title:String){ this.title = title;}

    public getTitle():String { return this.title;}

    public setType(type:String){ this.type = type;}

    public getType():String { return this.type;}

    public setColor(color:String){ this.color = color;}

    public getColor(){ return this.color;}

    public setRegion(start:any,end:any = null,style:String = null){
        if (end == null && style == null){
            this.region.push({start: start});
        }else if (style == null) {
            this.region.push({start: start, end: end});
        }else if (end == null){
            this.region.push({start: start, style: style});
        }else {
            this.region.push({start: start, end: end, style: style});
        }
    }
}