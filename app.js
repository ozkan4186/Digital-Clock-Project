let main=document.querySelector(".main")

const clock= ()=>{
    const hour=new Date().getHours()
    const minute=new Date().getMinutes()
    const second=new Date().getSeconds()

main.innerHTML = `${hour < 10 ? `0${hour}`: `${hour}`}: ${minute < 10 ? `0${minute}`: `${minute}`}:${second < 10 ? `0${second}`: `${second}`}:${hour < 13?"AM":"PM" }`
//    
//    
    // 
// 
}


setInterval(clock,100)
//?2.YOL
// const newSecond=()=>{
// let date=new Date()
// let dateX=date.toLocaleTimeString()
// let t=document.querySelector(".main")
// t.innerText=dateX
// }
// setInterval(newSecond,100)
// newSecond()