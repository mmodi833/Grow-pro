let div =document.createElement('div');
div.id='maindiv';
div.className='div1';
//creating a text node
let str=document.createTextNode('div with create element demo');
//adding textnode to div
div.appendChild(str);

//
//div.innerHTML='<p>Good Morning</p>';
//Assignment 1 :add h2 to the div text content
//before you add div to the document body, add h2 to the div

    let h2=document.createElement('h2');
    h2.innerHTML='THis is h2';
    div.appendChild(h2);

document.body.appendChild(div);

//Assignment :2 create a unordered list and add it to the document body
//HOme Products  AboutUs ContactUs

let ul=document.createElement('ul');
let lli=["Home","Product","AnoutUS","ContactUs"];
for(let i=0;i<=3;i++){
    let li=document.createElement('li');
    li.innerHTML=lli[i];
    ul.appendChild(li);

}
document.body.appendChild(ul);


//appendChild method of NOde 

//add a node to the end of the list of nodes of that parent


//ul  ==

//want to get to the first element child


let div2= document.getElementById('div2');
console.log(div2.textContent);


let div3= document.getElementById('div2');
console.log(div2.innerText);

const h1 =  document.createElement('h1');
h1.innerText='Javascript DOM after  demo';


//Assignment 3
//you will add a list before h1 --using before method


let ol=document.createElement('ol');
let list=["abc","def","ghi","klm"];
for(let i=0;i<=3;i++){
    let li=document.createElement('li');
    li.innerHTML=list[i];
    ol.appendChild(li);

}

// div2.after(ol);

document.body.appendChild(h1);
h1.before(ol);




// div2.after(h1);