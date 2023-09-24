import { Link } from "react-router-dom";
import styles from "./styles.module.css";
function MainView() {
  return (
    <div className={styles.container}>
      <Link to={"/login"}>Hla</Link>
    </div>
  );
}

export default MainView;
