


let Account = [Number, String, String];




let accountsArr = [Account];



accountsArr.push([1,'ravi', 'sharma']);

accountsArr.push([2, 'steve', 'rogers']);

accountsArr.push([3, 'ram', 'shyaam']);

console.log(accountsArr);



class SavingAccount{



    constructor(account, ...arr){

        this.account = account;

        this.arr = arr;

        this.arr.flat(1);

    }

}



let sa1 = new SavingAccount(accountsArr[1],[12,34]);

let sa2 = new SavingAccount(accountsArr[2],[22,44, 10, 2]);

let sa3 = new SavingAccount(accountsArr[3],[32,34, 55]);



let savingAccounts = [SavingAccount];

savingAccounts.push(sa1);

savingAccounts.push(sa2);

savingAccounts.push(sa3);



console.log(savingAccounts);