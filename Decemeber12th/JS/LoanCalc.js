
window.onload=document.getElementById("result").style.display="none";

let sub=document.getElementById("sub");
sub.addEventListener("click",fn,true);

function fn(e){
    document.getElementById("result").style.display="";
    e.preventDefault();
    let amount=document.getElementById("amount").value;
    let rate=document.getElementById("rate").value;
    let time=document.getElementById("time").value;
    let monthP=((amount*rate*1)/100)/12;
    let totalI=(monthP*12*time);
    let totalP=(parseInt(amount)+parseInt(totalI));

    document.getElementById("monthP").value=monthP;
    document.getElementById("totalP").value=totalP;
    document.getElementById("totalI").value=totalI;


}