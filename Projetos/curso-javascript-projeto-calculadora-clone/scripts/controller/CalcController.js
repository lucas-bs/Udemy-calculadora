class CalcController {
    constructor(){
        
        this._displayCalc = document.querySelector("#display");
        this._dataEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();

    }

    initialize(){
        
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }
    
    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dataEl.innerHTML;
    }

    set displayDate(value){
        this._dataEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalc.innerHTML;
    }

    set displayCalc(value){
        this._displayCalc.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }


}