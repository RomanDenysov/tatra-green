import Link from "next/link";
import styles from "./infobox.module.css";
import Image from "next/image";

export default function InfoBox() {
	return (
		<section className={styles.container}>
			<div className={styles.box}>
				<h2 className={styles.title}>Rezervácia termínu</h2>
				<Link href={"mailto:reservations@tatragreen.sk"} className={styles.item}>
					<div className={styles.icon}>
						<Image src={"/icon-mail.svg"} width={20} height={16} alt="email" />
					</div>
					reservations@tatragreen.sk
				</Link>
				<Link href={"tel:+421949113267‬"} className={styles.item}>
					<div className={styles.icon}>
						<Image src={"/icon-phone.svg"} width={16} height={20} alt="smartphone" />
					</div>
					+421 949 113 267‬
				</Link>
			</div>
			<div className={styles.box}>
				<h2 className={styles.title}>Rezervácia cez Booking.com</h2>
				<Link href={"https://www.booking.com/hotel/sk/apartmany-tatra-green.sk.html"}>
					<button className={styles.btn}>REZERVOVAŤ TERAZ</button>
				</Link>
			</div>
		</section>
	);
}
