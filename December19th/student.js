class Marks{

    mapmarks;

    constructor(){

        this.mapmarks = new Map();

    }



    addMarks(name, num){

        if(this.mapmarks.has(name)){

            this.mapmarks.set(name, [...this.mapmarks.get(name),num]);

        } else {

        this.mapmarks.set(name, [num]);

        }

    }



    totalMarks(name){

        let total = this.mapmarks.get(name);

        let result = total.reduce((a, b) => {

        return a + b;

    });

        return `Total marks of ${name} is : ${result}`

    }

}




let newMarks = new Marks();

newMarks.addMarks('Vansh', 10);

newMarks.addMarks('Vansh', 20);

newMarks.addMarks('Vatsal', 30);

newMarks.addMarks('Ravi', 50);

newMarks.addMarks('Ravi', 60);

newMarks.addMarks('Surya', 100);

console.log(newMarks.mapmarks);

for( let key of newMarks.mapmarks.keys()){
    console.log(newMarks.totalMarks(key));
}