import H3 from "../../../components/ui/heading/H3";
import H4 from "../../../components/ui/heading/H4";
import styles from "./Education.module.scss";
type LearnItemProps = {
	title: string;
	subtitle: string;
	link: string;
};
const LearnItem = ({ title, link, subtitle }: LearnItemProps) => {
	return (
		<div className={styles.item}>
			<H3>
				<a href={link}>{title}</a>
			</H3>
			<H4>{subtitle}</H4>
		</div>
	);
};
export default LearnItem;
