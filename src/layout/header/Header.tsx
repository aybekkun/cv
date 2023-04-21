import Container from "../../components/ui/container/Container";
import P from "../../components/ui/heading/P";
import avatar from "./avatar.jpg";
import styles from "./Header.module.scss";
import { FaFacebook,FaLinkedinIn, FaInstagram, FaTelegram } from "react-icons/fa";
const Header = () => {
	return (
		<header className={styles.root}>
			<Container className={styles.wrap}>
				<div className={styles.left}>
					<img src={avatar} alt="Aybek Amanbaev" />
					<div>
						<h1>Аманбаев Айбек</h1>
						<h2>React Developer</h2>
						<P mb={1}>
							Меня зовут Айбек и я имею годовой опыт работы в области Javascript и React JS. Кроме того, я владею
							профессиональными навыками работы с офисными программами, такими как Word, Excel и PowerPoint.
						</P>
						<P>
							Я специализируюсь на тестировании и дальнейшем выводе проектов в производство, верстке шаблонов сайтов,
							создании пользовательского интерфейса, создании архитектуры и структуры веб-сайтов, а также на
							сотрудничестве с творческими, серверными и клиентскими командами для воплощения веб-сайтов.
						</P>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.block}>
						<h3>Почта</h3>
						<a rel="noreferrer"  target="_blank"href="mailto:amanbayaybek@gmail.com">amanbayaybek@gmail.com</a>
					</div>
					<div className={styles.block}>
						<h3>Социальные сети</h3>
						<div className={styles.social}>
							<a rel="noreferrer"  target="_blank"href="https://www.instagram.com/aybekkun/">
								<FaInstagram fontSize={24} />
							</a>
							<a rel="noreferrer"  target="_blank"href="https://t.me/aybekkun">
								<FaTelegram fontSize={24} />
							</a>
							<a rel="noreferrer"  target="_blank"href="https://www.facebook.com/amanbaevaybek/">
								<FaFacebook fontSize={24}  />
							</a>
							<a rel="noreferrer"  target="_blank"href="https://www.linkedin.com/in/aybek-amanbaev-54a8b9247/">
							<FaLinkedinIn fontSize={24}  />
							</a>
						</div>
					</div>
					<div className={styles.block}>
						<h3>Телефон</h3>
						<a rel="noreferrer"  target="_blank"href="tel:+998913809626">+99890 380 96 26</a>
					</div>
				</div>
			</Container>
		</header>
	);
};
export default Header;
