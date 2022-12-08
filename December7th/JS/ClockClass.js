class Clock{
   
    constructor(time){
        this.hour=time.getHours();
        this.min=time.getMinutes();
        this.sec=time.getSeconds();
    }

    dispTime(){
        return `${this.hour}:${this.min}:${this.sec}`;
    }

    setTime(){
        this.sec++;
        if(this.sec>=60){
            this.sec=0;
            this.min++;
        }
        if(this.min>=60){
            this.min=0;
            this.hour++;
        }
        if(this.hour>=24){
            this.hour=0;
        }
    }
}





setInterval(ff,1000);

let timer=new Clock(new Date());


function ff(){
    timer.setTime();
    let time=timer.dispTime();
    document.getElementById("h1").innerHTML=time;

}

