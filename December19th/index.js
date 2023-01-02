let toDo = {

    "userId": 10,

    "id": 201,

    "title": "Todo added by vatsal",

    "completed": true

  };




async function readToDo() {

    let data = await fetch("./data.json");

    let list = await data.json();

    console.log(list);

}



readToDo();



async function postData(){

    let res = await fetch('https://jsonplaceholder.typicode.com/todos', {

    method: "POST",

    body: JSON.stringify(toDo),

    headers: {"Content-type": "application/json; charset-UTF-8"}

    });

    console.log(res);

}



postData();

