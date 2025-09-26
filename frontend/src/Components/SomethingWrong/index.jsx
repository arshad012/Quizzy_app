import { useEffect, useState } from "react";
import { localStorageKey_token, localStorageKey_user } from "../../Utils";
import CustomButton from "../Common/CustomButton";

function SomethingWrong() {
    const [sec, setSec] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setSec(prev => {
                console.log('interval running')
                if (prev == 1) {
                    clearInterval(timer);
                    return prev - 1;
                }
                return prev - 1;
            })
        }, 1000)
    }, [])

    return (
        <div>
            <p className="text-red-500 text-center mt-10 text-3xl">Something went wrong</p>

            <div className="flex justify-center items-end mt-3">
                {sec === 0 ?
                    <CustomButton className="px-5" onClick={() => window.location.reload()}>Retry</CustomButton> :
                    <>
                        <p className="text-red-500 text-center mt-5 text-xl">Please try again in</p>
                        <p className="px-2 text-lg">{sec}</p>
                        <p className="text-red-500 text-center mt-5 text-xl">seconds</p>
                    </>
                }
            </div>
        </div>
    )
}

export default SomethingWrong;
