import { createElement, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { teacherRoutes, studentRoutes } from "./routes";
import Loading from "./Components/Common/Loading";
import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

const NotFound = lazy(() => import("./Pages/notFound"));
const Home = lazy(() => import("./Pages/Home"));

const TeacherLayout = lazy(() => import("./Components/Teacher/Layout"));
const StudentLayout = lazy(() => import("./Components/Student/Layout"));

const generateRouteComponent = (route, userType) => {
  const { path, element } = route;

  return (
    <Route
      key={path}
      path={path}
      element={
        <PrivateRoute userType={userType}>
          <Suspense fallback={<Loading />}>
            {createElement(lazy(element))}
          </Suspense>
        </PrivateRoute>
      }
    />
  );
};

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute userType={null}>
                <Home />
              </PrivateRoute>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Teacher Routes */}
          <Route element={<TeacherLayout />}>
            {teacherRoutes.map((route) => generateRouteComponent(route, 'Teacher'))}
          </Route>

          {/* Student Routes */}
          <Route element={<StudentLayout />}>
            {studentRoutes.map((route) => generateRouteComponent(route, 'Student'))}
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
