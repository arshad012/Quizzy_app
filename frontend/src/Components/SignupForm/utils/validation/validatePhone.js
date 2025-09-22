
export const validatePhone = phone => {

    if(phone.length !== 10 || phone.length > 10) return false;

    return true;
}