import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

export default function Button({ top, to, button, secondary }: ButtonProps) {
	const buttonClass: string = `${styles.btn} ${top ? styles.top : ""}`;
	return (
		<Link href={`${to}`}>
			<button
				className={buttonClass}
				style={secondary ? { color: "#cccbb0" } : { color: "#000" }}
			>
				{button}
			</button>
		</Link>
	);
}
