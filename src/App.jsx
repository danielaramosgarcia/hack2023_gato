import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainView from "./pages/mainView";
import LessonView from "./pages/lessonView";
import NewAccountView from "./pages/newAccountView";
import Sesion from "./pages/Sesion";
import Quiz from "./pages/Quiz";
import GptClone from "./pages/gptClone";
import Congrats from "./pages/Congrats";

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
    element: <Sesion />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/chat",
    element: <GptClone />,
  },
  {
    path: "/congrats",
    element: <Congrats />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
