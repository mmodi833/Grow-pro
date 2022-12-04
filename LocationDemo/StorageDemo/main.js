

console.log("Lodaing.......");
var storage = window.localStorage;



function login(){
    let name = document.getElementById("name").value;
    let pass = document.getElementById("password").value;
    console.log(name);
    saveValue(name);
   
    return true;
}

function saveValue(name){
    console.info("Name Saved Successfully:"+name);
    storage.setItem("Name",name);
}

function removeValue(){
    storage.removeItem("Name");
}

function loadSuc() { 
    console.log("Loading success");
    let data = getValue();
    console.log(data);
    document.getElementById("res").innerHTML = data;
 }

function getValue(){
    let name = storage.getItem("Name");
    return `Hello ${name} successfully logged in!`;
}

function GetLocation(){
    navigator.geolocation.getCurrentPosition(positionSuccess,positionError);
    function positionSuccess(position) {
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;
        var accuracy = position.coords.accuracy;
        console.log(latitude + " " + longitude+" "+accuracy);
        writePage(latitude,longitude,accuracy);
      }

    function positionError(param) {
        console.error(param);
        switch(param.code){
            case 0:
                updateStatus('there was eror while retrieving location');
                break;
            case 1 :
                updateStatus('the user prevented this page from retreiving his/her location');
                break;
            case 2:
                updateStatus('the browser was unable in retreiving his/her location');
                break;  
            case 3:
                updateStatus('time out prevented this page from retreiving his/her location');
                break;   

        }
      }  
}

function writePage(latitude,longitude,accuracy){
    document.getElementById("lat").innerHTML = `Latitude is:${latitude}`;
    document.getElementById("lon").innerHTML = `Longitude is:${longitude}`;
    document.getElementById("acc").innerHTML = `Accuracy is:${accuracy} meters`;
}