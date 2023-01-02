interface Colorable{

    color:()=>void;
    name:string;

}

const color1:Colorable={
    color: function (): void {
        console.log(`coloring ${this.name}`)
    },
    name: "blue"
}
const color2:Colorable={
    color: function (): void {
        console.log(`coloring ${this.name}`)
    },
    name: "red"
}
color1.color();
color2.color();

interface Printable {
    print:(name:string)=>void;
}


interface DigitalPrint extends Colorable,Printable{

}

let digit1:DigitalPrint={
    color: function (): void {
        console.log(`Coloring ${this.name}`)
    },
    name: "green",
    print: function (name:string): void {
        console.log("Printing function is called "+name);
    }
}


let digit2:DigitalPrint={
    color: function (): void {
        console.log(`Coloring ${this.name}`)
    },
    name: "grey",
    print: function (name:string): void {
        console.log("Printing function is called "+name);
    }
}

digit1.color();
digit1.print(digit1.name);
digit2.color();
digit2.print(digit2.name);
