import H2 from "../../../components/ui/heading/H2";
import { data } from "./experience.data";
import styles from "./Experience.module.scss";
import ExperienceItem from "./ExperienceItem";
const Experience = () => {
	return (
		<div className={styles.root}>
			<H2 mb={2}>Опыт работы</H2>
			{data.map((item) => (
				<ExperienceItem key={item.title} {...item} />
			))}
		</div>
	);
};
export default Experience;
