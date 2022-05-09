function show(){

    console.log("show")
    let div = document.querySelector(".container");

    div.innerHTML = getCurrentTime()
}

function getCurrentTime(){

    let date = new Date()

    let hours = date.getHours()
    let minutes = date.getMinutes();
    let seconds = date.getSeconds()
    let am_pm = "AM"


    if (hours == '00'){
        hours = 12
    }
    else if (hours == 12){
        am_pm = "PM"
    }else if (hh >12 ){
        am_pm = "PM"
        hours = parseInt(hh) - 12
    }

    return `${hours} : ${minutes} : ${seconds} ${am_pm}`
}


setInterval(show, 1000)