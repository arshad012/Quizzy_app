import { useDispatch, useSelector } from "react-redux"
import { commonSelector } from "../Store/feature/common/selectors"
import { setCommonKey } from "../Store/feature/common/commonSlice";


export const useHeading = () => {
    const { heading, subHeading } = useSelector(commonSelector);
    const dispatch = useDispatch();

    const setHeading = (value) => {
        dispatch(
            setCommonKey({ key: "heading", value })
        )
    }

    const setSubHeading = (value) => {
        dispatch(
            setCommonKey({ key: "subHeading", value })
        )
    }

    return { heading, subHeading, setHeading, setSubHeading }
}
