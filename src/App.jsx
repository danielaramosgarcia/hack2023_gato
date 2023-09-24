import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainView from "./pages/mainView";
import LessonView from "./pages/lessonView";
import NewAccountView from "./pages/newAccountView";
import Sesion from "./pages/Sesion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainView />,
  },
  {
    path: "/lesson",
    element: <LessonView />,
  },
  {
    path: "/login",
    element: <NewAccountView />,
  },
  {
    path: "/sesion",
    element: <Sesion/>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}



export default App;
