import React from "react";
import { motion } from "framer-motion";
import styles from "./inner.module.css";
import { slide, opacity, perspective } from "./anim";

const anim = (variants: any) => {
	return {
		initial: "initial",
		animate: "enter",
		exit: "exit",
		variants,
	};
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className={styles.inner}>
				<motion.div className={styles.slide} {...anim(slide)}></motion.div>
				<motion.div className={styles.page} {...anim(perspective)}>
					<motion.div {...anim(opacity)}>{children}</motion.div>
				</motion.div>
			</div>
		</>
	);
}
