const timeConvert = (time) => {
    let seconds = 1000
    let minutes = seconds * 60
    let hours = minutes * 60

    seconds = ("0" + Math.floor(time % (minutes) / seconds)).slice(-2)
    minutes = ("0" + Math.floor((time % (hours)) / (minutes))).slice(-2)
    hours = Math.floor((time / (1000 * 60 * 60)) % 24) + 1;

    return [hours, minutes, seconds]
}

export default timeConvert