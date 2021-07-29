//capturando o elemento da classe digital e dos ponteiros
let digitalElement = document.querySelector('.digital')
let sElement = document.querySelector('.p_s')
let mElement = document.querySelector('.p_m')
let hElement = document.querySelector('.p_h')


function updateClock() {
    let now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`
    
    //ajustes dos ponteiros do relogio
    let sDeg = ((360 / 60) * second) - 90
    let mDeg = ((360/60) * minute) -90
    let hDeg = ((360 / 12) * hour) -90

    hElement.style.transform = `rotate(${hDeg}deg)`
    mElement.style.transform = `rotate(${mDeg}deg)`
    sElement.style.transform = `rotate(${sDeg}deg)`
}

//função para ajustar a hora, inserindo o zero em times menores que 10
function fixZero(time) {
    
    return time < 10 ? `0${time}` : time
}
setInterval(updateClock, 1000)
updateClock()