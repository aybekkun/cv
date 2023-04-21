import H2 from "../../../components/ui/heading/H2";
import styles from "./Education.module.scss";
import EducationItem from "./EducationItem";
import LearnItem from "./LearnItem";
import Skills from "./Skills";
import { education, learn } from "./education.data";
const Education = () => {
	return (
		<div className={styles.root}>
			<H2 mb={2}>Образование и обучение</H2>
			{education.map((item) => (
				<EducationItem key={item.title} {...item} />
			))}
			<H2 mb={2}>Повышение квалификации, курсы</H2>
			{learn.map((item) => (
				<LearnItem key={item.title} {...item} />
			))}
			<H2 mb={2}>Навыки</H2>
			<Skills/>
		</div>
	);
};
export default Education;
