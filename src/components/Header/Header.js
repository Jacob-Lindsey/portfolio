import { Container } from "react-bootstrap";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {

    return (
        <Container fluid>
            <header className={styles.header}>
                <Navbar />
            </header>
        </Container>
    )
};

export default Header;