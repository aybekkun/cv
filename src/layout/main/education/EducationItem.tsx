import H3 from "../../../components/ui/heading/H3";
import H4 from "../../../components/ui/heading/H4";
import styles from "./Education.module.scss";
type EducationItemProps = {
	title: string;
	subtitle: string;
};
const EducationItem = ({ title, subtitle }: EducationItemProps) => {
	return (
		<div className={styles.item}>
			<H3 >{title}</H3>
			<H4 >{subtitle}</H4>
		</div>
	);
};
export default EducationItem;
