setInterval(setClock, 1000)

const hourHand = document.querySelector(".hour")
const minuteHand = document.querySelector(".minute")
const secondHand = document.querySelector(".second")

function setClock() {
    const currentDate = new Date;
    let second = currentDate.getSeconds() / 60;
    let minute = (second + currentDate.getMinutes()) / 60;
    let hour = (minute + currentDate.getHours()) / 12;

    setRotation(hourHand, hour)
    setRotation(minuteHand, minute)
    setRotation(secondHand, second)
}
function setRotation(element, rotation) {
    element.style.setProperty("--rotation", rotation * 360)
}
setClock()