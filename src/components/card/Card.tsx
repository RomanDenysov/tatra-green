import Button from "../button/Button";
import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

export default function Card({ title, descr, button, imgurl, to }: SharedProps) {
	return (
		<div className={styles.box}>
			<div className={styles.text}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.descr}>{descr}</p>
				{button ? <Button button={button?.toUpperCase()} to={to} /> : null}
			</div>
			{imgurl ? (
				<Image
					src={`${imgurl}`}
					width={400}
					height={440}
					alt=""
					quality={90}
					className={styles.img}
				/>
			) : (
				<div className={styles.infobox}>
					<Image src={"/logo-text.svg"} width={95} height={130} alt="logo" />
					<div className={styles.navbox}>
						<Link href={"mailto:reservations@tatragreen.sk"} className={styles.navitem}>
							<div className={styles.icon}>
								<Image src={"/icon-mail.svg"} width={20} height={16} alt="email" />
							</div>
							reservations@tatragreen.sk
						</Link>
						<Link href={"tel:+421949113267‬"} className={styles.navitem}>
							<div className={styles.icon}>
								<Image
									src={"/icon-phone.svg"}
									width={16}
									height={20}
									alt="smartphone"
								/>
							</div>
							+421 949 113 267‬
						</Link>
						<Link
							href={"https://maps.app.goo.gl/f281PXwVSUZhZnK1A"}
							className={styles.navitem}
						>
							<div className={styles.icon}>
								<Image
									src={"/icon-nav.svg"}
									width={20}
									height={20}
									alt="navigation"
								/>
							</div>
							Golfová, Veľká Lomnica
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}
