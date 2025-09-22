import CustomButton from "../../Components/Common/CustomButton"
import { useNavigate } from "react-router-dom"
import { useHeading } from "../../Hooks";
import { useEffect } from "react";

function NotFound() {
    const navigate = useNavigate();
    const { setHeading, setSubHeading } = useHeading();
    
    const handleClick = () => {
        navigate("/", {replace: true})
    }

    useEffect(() => {
        setHeading('Page not found');
        setSubHeading('Please try again or visit any other page.')
    },[])


    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="text-lg">Page not found</p>
            <div className="mt-4">
                <CustomButton onClick={handleClick}>Go to Home</CustomButton>
            </div>
        </div>
    )
}

export default NotFound
