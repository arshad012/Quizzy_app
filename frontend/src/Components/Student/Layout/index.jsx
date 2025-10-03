import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import StudentSidebar from '../Sidebar';
import { commonSelector } from '../../../Store/feature/common/selectors';
import Header from '../Header';
import { appThemeSelector } from '../../../Store/feature/appTheme/selector';


function StudentLayout() {
    const { isSidebarOpen } = useSelector(commonSelector);

    const { quizzyAppColorMode } = useSelector(appThemeSelector);
    const bgColor = quizzyAppColorMode === 'light' ? 'white' : 'black';
    const textColor = quizzyAppColorMode === 'light' ? 'black' : 'white';

    return (
        <div className='h-screen w-screen flex'>
            <aside className={`${isSidebarOpen ? 'w-52' : 'w-15'} h-full transition-all bg-${bgColor} text-${textColor}`}>
                <StudentSidebar />
            </aside>

            <main className='flex-1 flex flex-col h-full overflow-auto'>
                <div className='h-16'>
                    <Header />
                </div>
                <div className={`flex-1 p-2 bg-${quizzyAppColorMode === 'light' ? 'white' : 'black'} overflow-auto`}>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default StudentLayout
