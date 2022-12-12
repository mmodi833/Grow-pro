let str="ababccdd";

let map=new Map();
let ans="";

for(let i=0;i<str.length;i++){
    // console.log(str[i]);
    if(map.has(str[i])){
        continue;
    }else{
        ans+=str[i];
        map.set(str[i],1);
    }
}

console.log(ans);