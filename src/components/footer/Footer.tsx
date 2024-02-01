"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
	const pathname = usePathname();
	const [submit, setSubmit] = useState(false);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		console.log("MAIL FORM INFO: ", formData);

		setSubmit((prev) => !prev);
		return window.location.reload();
	};

	return (
		<footer className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<Image src={"/logo-plane.svg"} width={40} height={65} alt="logo" />
				</div>
				<div className={styles.infobox}>
					<ul className={styles.navbar}>
						<li
							className={
								(styles.navitem,
								pathname.includes("ubytovanie")
									? styles.activelink
									: styles.navitem)
							}
						>
							<Link href="/ubytovanie/">Ubytovanie</Link>
						</li>
						<li
							className={
								(styles.navitem,
								pathname.includes("lokalita") ? styles.activelink : styles.navitem)
							}
						>
							<Link href="/lokalita/">Lokalita</Link>
						</li>
						<li className={styles.navitem}>
							<Link href={`${pathname}?showGalery=y`}>Fotogaléria</Link>
						</li>
					</ul>
					<div className={styles.textbox}>
						<span>Tatra Green</span>
						<span>Golfová 1</span>
						<span>059 52 Veľká Lomnica </span>
						<Link className={styles.navlink} href={"tel:+421949113267‬"}>
							+421 949 113 267‬
						</Link>
						<Link className={styles.navlink} href={"mailto:reservations@tatragreen.sk"}>
							reservations@tatragreen.sk
						</Link>
						<div className={styles.social}>
							<Link href={""}>
								<Image src={"/icon-fb.svg"} width={24} height={24} alt="facebook" />
							</Link>
							<Link href={""}>
								<Image
									src={"/icon-in.svg"}
									width={24}
									height={24}
									alt="instagram"
								/>
							</Link>
						</div>
					</div>
					<form onSubmit={handleSubmit} className={styles.form}>
						<label htmlFor="email" className={styles.label}>
							Prihláste sa na odber ponúk, noviniek a cestovateľských inšpirácií
						</label>
						<div className={styles.mailform}>
							<input
								type="text"
								placeholder="email@priklad.sk"
								className={styles.input}
								name="email"
								id="email"
							/>
							<button type="submit" className={styles.btn}>
								<Image
									src={"/arrow-r.svg"}
									width={50}
									height={25}
									alt="arrow-right"
								/>
							</button>
						</div>
					</form>
				</div>
				<div className={styles.copyright}>
					<span className={styles.span}>© 2024 Tatra Green</span>
					<div className={styles.copylink}>
						<Link className={styles.copylinkitem} href={""}>
							Fakturačné údaje
						</Link>
						<Link className={styles.copylinkitem} href={""}>
							Website credits
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
