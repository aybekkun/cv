import Container from "../components/ui/container/Container";
import Header from "./header/Header";
import styles from "./Layout.module.scss";
import Education from "./main/education/Education";
import Experience from "./main/experience/Experience";
const Layout = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<Container className={styles.wrap}>
					<Experience />
					<Education />
				</Container>
			</main>
		</>
	);
};
export default Layout;
