// ===== Get values from previous page ID and store it in local storage ===== //
function passvalues(){
    
    document.getElementById("firstname").innerHTML=localStorage.getItem("firstName");
    document.getElementById("lastname").innerHTML=localStorage.getItem("lastName");
    document.getElementById("age").innerHTML=localStorage.getItem("age");
    document.getElementById("gender").innerHTML=localStorage.getItem("gend");
    document.getElementById("email").innerHTML=localStorage.getItem("emailAddress");
    document.getElementById("phoneNo").innerHTML=localStorage.getItem("phoneNo");

    document.getElementById("firstName2").innerHTML=localStorage.getItem("firstName2");
    document.getElementById("lastName2").innerHTML=localStorage.getItem("lastName2");
    document.getElementById("age2").innerHTML=localStorage.getItem("age2");
    document.getElementById("gender2").innerHTML=localStorage.getItem("gend2");
}  
// ===== Get data from flights.json file ===== //
var itm=localStorage.getItem("flightid");
let flight_details = fetch("flights.json");
flight_details.then(response => response.json()).then(data=>flightfetch(data));
    
    
    function flightfetch(data)
    { 
    for(let i = 0; i < data.length; i++)
    {
        var obj=data[i];
        if(obj.id==itm)
        {
            document.getElementById("flno").innerHTML=obj["flightNum"];
            document.getElementById("origin_city").innerHTML=obj["origin"];
            document.getElementById("destin_city").innerHTML=obj["destination"];
            const dtime=new Date(obj.departTime);
            document.getElementById("dept_time").innerHTML=dtime.toUTCString();
            const atime=new Date(obj.ArrivalTime);
            document.getElementById("arrival_time").innerHTML=atime.toUTCString();
            document.getElementById("price").innerHTML=obj["price"];
            break;
        }
    }
}
