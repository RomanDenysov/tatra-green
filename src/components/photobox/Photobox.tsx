import Image from "next/image";
import styles from "./photobox.module.css";
import { galeriaData } from "@/lib/data";

export const Photobox = () => {
	return (
		<>
			{galeriaData.map((item, index) => (
				<Image
					key={index}
					src={item}
					alt={`Tatra Green ${index + 1}`}
					width={1000}
					height={500}
					className={styles.img}
				/>
			))}
		</>
	);
};
