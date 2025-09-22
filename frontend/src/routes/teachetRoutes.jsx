
export const teacherRoutes = [
    {
        path: '/teacher/dashboard',
        element: () => import('../Pages/teacher/dashboard')
    },
    {
        path: '/teacher/templates',
        element: () => import('../Pages/teacher/templates')
    },
    {
        path: '/teacher/templates/create',
        element: () => import('../Pages/teacher/templates/create')
    },
    {
        path: '/teacher/templates/:id',
        element: () => import('../Pages/teacher/templates/create')
    },
    {
        path: '/teacher/assesment',
        element: () => import('../Pages/teacher/assesments')
    },
    {
        path: '/teacher/assesment/create',
        element: () => import('../Pages/teacher/assesments/create')
    },
    {
        path: '/teacher/assesment/:id',
        element: () => import('../Pages/teacher/assesments/create')
    },
    // Teacher submission page
    {
        path: '/teacher/submissions',
        element: () => import('../Pages/teacher/submissions')
    },
    {
        path: '/teacher/*',
        element: () => import('../Pages/notFound')
    }
]