import { localStorageKey_token, localStorageKey_user } from "../../Utils";

function SomethingWrong() {
    localStorage.removeItem(localStorageKey_user);
    localStorage.removeItem(localStorageKey_token);
    
    return (
        <div>
            <p className="text-red-500 text-center mt-10 text-3xl">Something went wrong</p>
            <p className="text-red-500 text-center mt-5 text-xl">Please try again</p>

        </div>
    )
}

export default SomethingWrong;
