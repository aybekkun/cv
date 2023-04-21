import H3 from "../../../components/ui/heading/H3";
import H4 from "../../../components/ui/heading/H4";
import P from "../../../components/ui/heading/P";
import styles from "./Experience.module.scss";
type ExperienceItemProps = {
	title: string;
	subtitle: string;
	desc: string;
};
const ExperienceItem = ({ title, subtitle, desc }: ExperienceItemProps) => {
	return (
		<div className={styles.item}>
			<H3>{title}</H3>
			<H4 mb={2}>{subtitle}</H4>
			<P mb={1}>{desc}</P>
		</div>
	);
};
export default ExperienceItem;
