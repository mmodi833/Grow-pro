const employee={



    emp_id:30,



    Name:'Swetha reddy',



    salary:50000,



    DateOfJoining:new Date('2010-02-11'),

    department:{

        dept_id:1003,



        dept_nm:'HR',



        Mg_id:201,



      },





      project:{



        pro_id:20045,



        pro_name:'CDE Project',



        startDate:new Date('2022-11-22'),



        Duration:'Six Months'



      },





    getServiceYear:function(){



 



        return 2022 - this.DateOfJoining.getFullYear();



}



}





let val = employee;



console.log(val);





val3 =  employee.getServiceYear();





console.log(`Service Years:${val3}`);

const employ = [





    { name:'swetha',empid:101,dept:'HR'  },



    {name:'Vamshi',empid:102,dept:'CDE'},



    {name:'Vansh',empid:103,dept:'HR'},



    {name:'Nikki',empid:104,dept:'JFS'}



 ];
 for(let i=0;i<employ.length;i++){



 



    console.log(`Employee details are as : ${employ[i].name} ${employ[i].empid} ${employ[i].dept}`);



}





for (let i in employee){





      



   if (i === 'project' || i === 'department'){



    for(let j in employee[i]){



        console.log(`${j}: ${employee[i][j]}`);



    }



}



else{





    console.log(`${i} : ${employee[i]}`);



}




}