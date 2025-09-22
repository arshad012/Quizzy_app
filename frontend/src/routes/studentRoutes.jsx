
export const studentRoutes = [
    {
        path: '/student/dashboard',
        element: () => import('../Pages/student/dashboard')
    },
    {
        path: '/student/assesments',
        element: () => import('../Pages/student/assesment')
    },
    {
        path: '/student/assesments/:id',
        element: () => import('../Pages/student/assesment/take')
    },
    {
        path: '/student/submissions',
        element: () => import('../Pages/student/submissions')
    },
    {
        path: '/student/submissions/:id',
        element: () => import('../Pages/student/submissions/submission')
    },
    {
        path: '/student/*',
        element: () => import('../Pages/notFound')
    }
]