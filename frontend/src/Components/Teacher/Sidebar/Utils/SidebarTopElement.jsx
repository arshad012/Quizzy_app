import { LayoutDashboard, BookDashed, TestTubeDiagonal, Send } from 'lucide-react';

export const SidebarTopElements = [
    {
        label: 'Dashboard',
        to: '/teacher/dashboard',
        icon: <LayoutDashboard />
    },
    {
        label: 'Templates',
        to: '/teacher/templates',
        icon: <BookDashed />
    },
    {
        label: 'Assessment',
        to: '/teacher/assesment',
        icon: <TestTubeDiagonal />
    },
    {
        label: 'Submissions',
        to: '/teacher/submissions',
        icon: <Send />
    }
]
