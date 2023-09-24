import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainView from "./pages/mainView";
import LessonView from "./pages/lessonView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainView />,
  },
  {
    path: "/lesson",
    element: <LessonView />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
