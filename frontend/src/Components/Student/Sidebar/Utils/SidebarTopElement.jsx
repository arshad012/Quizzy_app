import { LayoutDashboard, Send, TestTubeDiagonal } from 'lucide-react';

export const SidebarTopElements = [
    {
        label: 'Dashboard',
        to: '/student/dashboard',
        icon: <LayoutDashboard />
    },
    {
        label: 'Assesment',
        to: '/student/assesments',
        icon: <TestTubeDiagonal />
    },
    {
        label: 'Submissions',
        to: '/student/submissions',
        icon: <Send />
    }
]
