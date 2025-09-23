
export const validateName = name => {

    const invalidSigns = ['!', '#', '%', '^', '*', '/', '\\', ':', ';', '`', '?', '|'];
    for(let ch of name) {
        for(let sign of invalidSigns) {
            if(ch == sign) {
                return false;
            }
        }
    }

    return true;
}