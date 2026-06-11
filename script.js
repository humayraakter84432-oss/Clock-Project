let clock = document.getElementById("Clock")

setInterval(()=>{
    let time = new Date()
    Clock.innerHTML = time.toLocaleTimeString()
},1000)