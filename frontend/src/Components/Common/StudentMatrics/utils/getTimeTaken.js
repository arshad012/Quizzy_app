
export const getTimeTaken = (miliseconds) => {

    const totalSeconds = Math.floor(miliseconds / 1000);

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    const createDisplay = (num) => {
        if (num > 9) {
            return num;
        } else {
            return `0${num}`
        }
    }
    
    return `${createDisplay(hours)}h : ${createDisplay(minutes)}m : ${createDisplay(seconds)}s`;
}
