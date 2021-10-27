export const changeTimer = (obj) => {
    if (obj.m === 60) {
        obj.m = 0
    }

    if (obj.s === 60) {
        obj.m++;
        obj.s = 0;
    }

    if (obj.ms === 99) {
        obj.s++;
        obj.ms = 0;
    }

    obj.ms++;
}