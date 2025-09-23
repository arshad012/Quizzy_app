import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom';

import { SidebarTopElements } from "./Utils/SidebarTopElement"
import SidebarElement from "./SidebarElement"
import SidebarButton from "./SidebarButton"
import { commonSelector } from '../../../Store/feature/common/selectors';
import { toggleSidebar } from '../../../Store/feature/common/commonSlice';

import '../../../App.css';

function TeacherSidebar() {
    const { isSidebarOpen } = useSelector(commonSelector);
    const dispatch = useDispatch();

    const collpaseSidebarHandler = () => {
        dispatch(
            toggleSidebar(!isSidebarOpen)
        )
    }

    return (
        <div className='h-full w-full border-r flex flex-col'>

            <div className={`h-16 ${isSidebarOpen ? "pl-4" : "p-0 justify-center"} w-full border-b flex items-center`}>
                <Link to={'/'}>
                    <img
                        src='../../../logo/quizzy_logo.png'
                        alt="Quizzy logo"
                        className="max-h-full w-10"
                    />
                </Link>
                <Link to={'/teacher-home'}>
                    <div className={`text-3xl font-bold ${isSidebarOpen ? '' : 'hidden'} bg-red-`}>Quizzy</div>
                </Link>
            </div>

            <div className="flex-col p-2 border-b">
                {
                    SidebarTopElements.map((elm) => <SidebarElement key={elm.label} {...elm} />)
                }
            </div>

            <div className='flex-1 border-b'></div>

            <div className="p-2">
                <SidebarButton onclick={collpaseSidebarHandler} icon={isSidebarOpen ? <ChevronLeft /> : <ChevronRight />} label='Collapse' />
            </div>
        </div>
    )

}

export default TeacherSidebar
