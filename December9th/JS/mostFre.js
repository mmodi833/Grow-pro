
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let max=0;
let num;




const map=new Map();

for(let j=0;j<arr1.length;j++){
    let i=arr1[j];

    if(map.has(i)){
        map.set(i,map.get(i)+1);
    }else{
        map.set(i,1);
    }
}

console.log(map);














for(let i=0;i<arr1.length;i++){
    let count=1;

    for(let j=i+1;j<arr1.length;j++){
        if(arr1[i]===arr1[j]){
            count++;
        }

    }

    if(count>max){
        max=count;
        num=arr1[i];
    }
}


console.log(num);


let arr2=[10, 20, 30, 40, 50];
