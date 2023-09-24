import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Navbar from "../../components/navbar";
import MvNavbar from "./mvNavbar";
function MainView() {
  return (
    <div className={styles.container}>
      <Navbar />
      <MvNavbar />
      <Link to={"/login"}>login</Link>
    </div>
  );
}

export default MainView;
