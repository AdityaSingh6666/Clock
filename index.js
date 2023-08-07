let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let milli = document.getElementById("milli");


setInterval(() => {
    let Time = new Date();

    hrs.innerHTML  = (Time.getHours()<10?"0":"")+Time.getHours();
    min.innerHTML  = (Time.getMinutes()<10?"0":"")+Time.getMinutes();
    sec.innerHTML  = (Time.getSeconds()<10?"0":"")+Time.getSeconds();
    milli.innerHTML=  Time.getMilliseconds();
}, 100);





