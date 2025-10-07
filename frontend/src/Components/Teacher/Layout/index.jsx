import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TeacherSidebar from '../Sidebar';
import { commonSelector } from '../../../Store/feature/common/selectors';
import Header from '../Header';
import { appThemeSelector } from '../../../Store/feature/appTheme/selector';


function TeacherLayout() {
    const { isSidebarOpen } = useSelector(commonSelector);

    const { quizzyAppColorMode } = useSelector(appThemeSelector);
    const bgColor = quizzyAppColorMode === 'light' ? 'bg-white' : 'bg-black';
    const textColor = quizzyAppColorMode === 'light' ? 'text-black' : 'text-white';

    return (
        <div className='h-screen w-screen flex'>
            <aside className={`${isSidebarOpen ? 'w-52' : 'w-15'} h-full transition-all ${bgColor} ${textColor}`}>
                <TeacherSidebar />
            </aside>

            <main className='flex-1 flex flex-col h-full overflow-auto'>
                <div className='h-16'>
                    <Header />
                </div>
                <div className={`flex-1 p-2 ${bgColor} overflow-auto`}>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default TeacherLayout
