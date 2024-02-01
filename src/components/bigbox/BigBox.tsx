import Button from "../button/Button";
import Image from "next/image";
import styles from "./bigbox.module.css";

export default function BigBox({ title, imgurl, descr, button, to }: SharedProps) {
	return (
		<section className={styles.container}>
			<div className={styles.bg}></div>
			<Image src={`${imgurl}`} fill alt="tatras view" className={styles.img} />
			<div className={styles.content}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.descr}>{descr}</p>
				<Button button={button} to={to} secondary />
			</div>
		</section>
	);
}
