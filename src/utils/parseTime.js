export function parseTime(time) {
    if (time <= 9) {
        return `0${time}`
    } else {
        return `${time}`
    }
}