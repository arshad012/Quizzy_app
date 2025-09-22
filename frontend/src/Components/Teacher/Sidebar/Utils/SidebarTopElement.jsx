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
        label: 'Assesment',
        to: '/teacher/assesment',
        icon: <TestTubeDiagonal />
    },
    {
        label: 'Submission',
        to: '/teacher/submissions',
        icon: <Send />
    }
]
