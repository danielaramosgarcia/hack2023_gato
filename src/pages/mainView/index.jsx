import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Navbar from "../../components/navbar";
import MvNavbar from "./components/mvNavbar";
import MisBases from "./components/MisBases";
import { useEffect, useState } from "react";
import MiComunidad from "./components/MiComunidad";
import MiProgreso from "./components/MiProgreso";
import Descubrir from "./components/Descubrir";
function MainView() {
  const [index, setIndex] = useState(0);
  const [component, setComponent] = useState(<MisBases />);

  useEffect(() => {
    switch (index) {
      case 0:
        setComponent(<MisBases />);
        break;
      case 1:
        setComponent(<MiComunidad />);
        break;
      case 2:
        setComponent(<MiProgreso />);
        break;
      case 3:
        setComponent(<Descubrir />);
        break;
      default:
        setComponent(<MisBases />);
        break;
    }
  }, [index]);

  return (
    <div className={styles.container}>
      <Navbar />
      <MvNavbar setIndex={setIndex} />
      {component}
      <Link to={"/login"}>login</Link>
    </div>
  );
}

export default MainView;
