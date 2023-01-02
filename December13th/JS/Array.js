class Employee{
    constructor(id,name,salary){
        this.id=id;
       this.name=name;
       this.salary=salary;
    }
}

let vansh=new Employee(1,"vansh",10000);
let ravi=new Employee(2,"ravi",20000);
let abhinav=new Employee(3,"abhinav",30000);
let ravi1=new Employee(4,"ravi",25000);


let employees=[vansh,ravi,abhinav,ravi1];


console.log(sortedArr);
console.log(employees);


let button=document.getElementById("submit");
button.onclick=function(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
    let salary=document.getElementById("salary").value;

    let  a=new Employee(employees.length+1,name,salary);
    employees.push(a);


    console.log(employees);
}




let sort=document.getElementById("sort");
sort.onclick=function(e){
    e.preventDefault();
   
    let table=document.createElement("tbody");
    
    

    let tr=document.createElement('tr');
        let id=document.createElement("td");
        let name=document.createElement("td");
        let salary=document.createElement("td");
        id.innerHTML="id";
        name.innerHTML="name";
        salary.innerHTML="salary";


        tr.appendChild(name);
        tr.appendChild(id);
        tr.appendChild(salary);
        table.appendChild(tr);

    for(let i=0;i<employees.length;i++){
        let tr=document.createElement('tr');
        let id=document.createElement("td");
        let name=document.createElement("td");
        let salary=document.createElement("td");
        id.innerHTML=employees[i].id;
        name.innerHTML=employees[i].name;
        salary.innerHTML=employees[i].salary;


        tr.appendChild(name);
        tr.appendChild(id);
        tr.appendChild(salary);
        table.appendChild(tr);
       
        

    }
    
    table.style.border="1px solid black";
    let ta=document.getElementById("result");
    ta.innerHTML="";
    ta.appendChild(table);
    // document.body.appendChild(table);
}
