"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import styles from "./header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { menuSlide } from "./anim";

export default function Header() {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
			document.body.style.position = "fixed";
		} else {
			document.body.style.overflow = "unset";
			document.body.style.position = "";
		}
	}, [open]);

	return (
		<header
			className={open ? styles.containerfixed : styles.container}
			style={open ? { position: "fixed" } : { position: "relative" }}
		>
			<div className={styles.headerbox}>
				<button onClick={() => setOpen((prev) => !prev)} className={styles.btn}>
					{open ? (
						<Image src={"/closeicon.svg"} width={30} height={30} alt="close" />
					) : (
						<div className={styles.burger}></div>
					)}
				</button>
				<Image
					src={"/logo-text.svg"}
					width={95}
					height={130}
					alt="logo"
					className={styles.img}
				/>
				<Image
					src={"/logo-plane.svg"}
					width={46}
					height={64}
					alt="logo"
					className={styles.imgsmall}
				/>
				<Button
					button="REZERVOVAŤ TERAZ"
					secondary
					top
					to="https://www.booking.com/hotel/sk/apartmany-tatra-green.sk.html"
				/>
			</div>
			{open ? (
				<motion.div
					className={styles.active}
					variants={menuSlide}
					initial="initial"
					animate="enter"
					exit="exit"
				>
					<div className={styles.wrapper}>
						<nav className={styles.navbox}>
							<Link
								className={
									(styles.navitem,
									pathname === "/" ? styles.activelink : styles.navitem)
								}
								href="/"
							>
								DOMOV
							</Link>
							<Link
								className={
									(styles.navitem,
									pathname.includes("ubytovanie")
										? styles.activelink
										: styles.navitem)
								}
								href="/ubytovanie"
							>
								UBYTOVANIE
							</Link>
							<Link
								className={
									(styles.navitem,
									pathname.includes("lokalita")
										? styles.activelink
										: styles.navitem)
								}
								href="/lokalita"
							>
								LOKALITA
							</Link>
						</nav>
						<div className={styles.infobox}>
							<div className={styles.contacts}>
								<h3 className={styles.title}>Rezervácia termínu</h3>
								<Link
									href={"mailto:reservations@tatragreen.sk"}
									className={styles.contactitem}
									style={{ textDecoration: "underline" }}
								>
									<div className={styles.icon}>
										<Image
											src={"/icon-mail.svg"}
											width={20}
											height={16}
											alt="email"
										/>
									</div>
									reservations@tatragreen.sk
								</Link>
								<Link href={"tel:+421949113267‬"} className={styles.contactitem}>
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
							</div>
							<div>
								<h3 className={styles.title} style={{ marginBottom: "30px" }}>
									Rezervácia cez Booking.com
								</h3>
								<Button
									button="REZERVOVAŤ TERAZ"
									to="https://www.booking.com/hotel/sk/apartmany-tatra-green.sk.html"
									secondary
								/>
							</div>
						</div>
					</div>
				</motion.div>
			) : null}
		</header>
	);
}
