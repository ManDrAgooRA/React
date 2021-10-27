const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getId = () => {
    return `${randomNumber(1, 9)}${randomNumber(1, 9)}${randomNumber(1, 9)}${randomNumber(1, 9)}${randomNumber(1, 9)}${randomNumber(1, 9)}`
}