function clock () {
    let date = new Date();

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    if (h <= 10){

        h= "0" + h;
 
     }

     if (m < 10){

        m= "0"+ m;
     }

     if (s < 10){

        m= "0"+ m;
     }

     if (h > 10){

         h = h - 12;
     }

    document.getElementById("hours").innerHTML = h;
    document.getElementById("minute").innerHTML =": " +m;
    document.getElementById("sec").innerHTML = ": " +s;

    setInterval(clock , 1000)

   

}

clock();