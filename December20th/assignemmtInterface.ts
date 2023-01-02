interface Artist{
   id:number,
    name:string
}

let ar:Artist={id:1,name:"ram"};
let a2:Artist={id:2,name:"raghav"};
let a3:Artist={id:3,name:"shyam"};

class Work{
    map;
    constructor(){
        this.map=new Map();
    }
    add(artist:Artist,arr:string[]){
        if(this.map.has(artist)){
            let array=this.map.get(artist);
            let result=[...array,...arr];
            this.map.set(artist,result);
        }else{
            this.map.set(artist,arr);
        }
    }
    getMap(){
        return this.map;
    }
}
let arWork:string[]=["abc","def","ghi"];
let ar2Work:string[]=["nmh","zxy","klo"];
let ar3Work:string[]=["gfg","lum","www"];

let work:Work=new Work();

work.add(ar,arWork);
work.add(a2,ar2Work);
work.add(a3,ar3Work);
work.add(a3,["abcd","efgh"]);

console.log(work.getMap());


enum Weekdays{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
let daysOff=[Weekdays.Saturday,Weekdays.Sunday];
console.log(daysOff);



function convertTemperature(temp:number,fromTO:string):number{
    fromTO=fromTO.toLowerCase();
    let a=fromTO.charAt(0);
    if(a=='f'){
        return (temp-32)/1.8000;
    }else{
        return (temp*1.80000)+32;
    }
}

console.log(convertTemperature(100,"FToC"));
console.log(convertTemperature(37.777,"CToF"));

enum Direction{
    North,South,East,West
};


function move(where:Direction){
    console.log(`Moving towards ${Direction[where]}`);
}

move(Direction.North);
