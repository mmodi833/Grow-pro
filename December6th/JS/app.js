const employee ={
    employeeId:212121,
    name:"Abhishek Kumar",
    department:{
        id:213,
        name:"ItSupport",
        mgrId:123
    },
    salary:20000,
    dateOfJoining:new Date("2019-03-25"),
    getNumberOfServiceYears:function(){
        return (2022-this.dateOfJoining.getFullYear());
    }


}


    for(let i in employee){

        if(i==="department"){
            console.log("Department Details");
            for(let j in employee[i]){
                console.log(`${j}:${employee[i][j]}`);
            }
        }else{
            console.log(`${i}:${employee[i]}`);
        }
        
    }




console.log(employee);


// console.log(employee.employeeId);
// console.log(employee.name);
// console.log(employee.department.id);
// console.log(employee.department.name);
// console.log(employee.salary);
// console.log(employee.dateOfJoining);
// console.log(employee.getNumberOfServiceYears());

// console.clear();

const employees=[
    {id:21,name:"Vansh",age:22},
    {id:22,name:"Akshay",age:22},
    {id:22,name:"Abhishek",age:22}
];


for(let i=0;i<employees.length;i++){
    console.log(employees[i]);
}



