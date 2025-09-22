import { validateName, validatePhone, validatePassword } from "./validation";

export const findEmptyField = (signupDetails) => {
    let emptyField = null;

    for (let key in signupDetails) {
        if (!signupDetails[key]) {
            emptyField = key;
            break;
        }
        else {
            switch (key) {
                case "name":
                    if (!validateName(signupDetails[key])) {
                        emptyField = key;
                    }
                    break;
                case "phone":
                    if (!validatePhone(signupDetails[key])) {
                        emptyField = key;
                    }
                    break;
                case "password":
                    if (!validatePassword(signupDetails[key])) {
                        emptyField = key;
                    }
                    break;
                case "confirmPassword":
                    if (signupDetails.password !== signupDetails.confirmPassword) {
                        emptyField = key;
                    }
                    break;
            }
        }

        if (emptyField) break;
    }

    return emptyField;
}