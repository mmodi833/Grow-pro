
    

    function go(value) {
       
    document.getElementById("result").value += value;
    }


    function cal() {
    let a = document.getElementById("result").value;
    let ans  = eval(a);
    document.getElementById("result").value = ans;
    }
    

    function emptyScreen() {
        document.getElementById("result").value = "";
        }
    
