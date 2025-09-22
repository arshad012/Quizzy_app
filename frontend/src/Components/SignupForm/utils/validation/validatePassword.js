
export const validatePassword = password => {

    if (password.length < 8) return false;
    if(password.length > 20) return false;

    const signs = ['`', '!', '@', '#', '$', '%', '^', '&', '*', '+', '-', '*', '/', '\\'];

    let specialCharAdded = false;
    let upperCaseCharAdded = false;
    let lowerCaseCharAdded = false;

    // check is password includes any special character.
    for (let ch of password) {
        for (let sign of signs) {
            if (ch === sign) {
                specialCharAdded = true;
                break;
            }
        }

        if (specialCharAdded) break;
    }

    // check is password includes any uppercase character.
    for (let ch of password) {
        if(ch == '`' || ch == '!' || ch == '@' || ch == '#' || ch == '$' || ch == '%' || ch == '^'|| ch == '&' || ch == '*' || ch == '(' || ch == ')' || ch == '-' || ch == '_' || ch == '=' || ch == '+' || ch == '-' || ch == '/' || ch == '*' || ch == '\\' || ch == ':' || ch == ';' || ch == '"' || ch == "'" || ch == '<' || ch == '>' || ch == ',' || ch == '.' || ch == '?' || ch == '.') continue;
        if(ch >= -1) continue; // this condition checks if character is a number or not.

        if (ch == ch.toUpperCase()) {
            upperCaseCharAdded = true;
            break;
        }
    }

    // check is password includes any lower character.
    for (let ch of password) {
        if(ch == '`' || ch == '!' || ch == '@' || ch == '#' || ch == '$' || ch == '%' || ch == '^'|| ch == '&' || ch == '*' || ch == '(' || ch == ')' || ch == '-' || ch == '_' || ch == '=' || ch == '+' || ch == '-' || ch == '/' || ch == '*' || ch == '\\' || ch == ':' || ch == ';' || ch == '"' || ch == "'" || ch == '<' || ch == '>' || ch == ',' || ch == '.' || ch == '?' || ch == '.') continue;
        if(ch >= -1) continue; // this condition checks if character is a number or not.

        if (ch == ch.toLowerCase()) {
            lowerCaseCharAdded = true;
            break;
        }
    }

    if (specialCharAdded && upperCaseCharAdded && lowerCaseCharAdded) return true;

    return false;
}