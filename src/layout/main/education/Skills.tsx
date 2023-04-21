import styles from "./Education.module.scss";
import { skills } from "./education.data";

const Skills = () => {
	return (
		<div>
			{skills.map((skill) => (
				<SkillsItem key={skill} skill={skill} />
			))}
		</div>
	);
};
type SkillsItemProps = {
	skill: string;
};
const SkillsItem = ({ skill }: SkillsItemProps) => {
	return <span className={styles.skill}>{skill}</span>;
};
export default Skills;
