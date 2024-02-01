import Image from "next/image";
import React from "react";
import Header from "../header/Header";
import styles from "./hero.module.css";

export default function Hero({ title, imgurl, descr }: SharedProps) {
	return (
		<section className={styles.container}>
			<div className={styles.bg}></div>
			<Image
				src={`${imgurl}`}
				alt={`${title}`}
				fill={true}
				quality={90}
				className={styles.img}
				priority={true}
			/>
			<Header />
			<div className={styles.text}>
				<h1 className={styles.title}>{title}</h1>
				{descr ? <p className={styles.descr}>{descr}</p> : null}
			</div>
		</section>
	);
}
