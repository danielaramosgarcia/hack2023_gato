import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainView from "./pages/mainView";
import LessonView from "./pages/lessonView";
import NewAccountView from "./pages/newAccountView";

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
    path: "/newAccount",
    element: <NewAccountView />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

// import { TiArrowBack } from "react-icons/ti";
// <TiArrowBack style={{ height: '200px', width: 'auto', color: 'blue' }} />

export default App;
