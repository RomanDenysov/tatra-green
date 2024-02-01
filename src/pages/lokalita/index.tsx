"use client";
import Hero from "@/components/hero/Hero";
import styles from "./location.module.css";
import Footer from "@/components/footer/Footer";
import Card from "@/components/card/Card";
import InfoBox from "@/components/infobox/InfoBox";
import { usePathname } from "next/navigation";
import Layout from "@/components/layouts/inner";
import { lokalitaData, lokalitaHero } from "@/lib/data";

export default function Lokalita() {
	const pathname = usePathname();

	return (
		<Layout>
			<main className={styles.main}>
				<Hero
					imgurl={lokalitaHero.imgurl}
					title={lokalitaHero.title}
					descr={lokalitaHero.descr}
				/>
				<div className={styles.content}>
					{lokalitaData.map((item, index) => (
						<Card
							key={index}
							title={item.title}
							descr={item.descr}
							button={item.button}
							to={`${pathname}` + item.to}
							imgurl={item.imgurl}
						/>
					))}
				</div>
				<InfoBox />
				<Footer />
			</main>
		</Layout>
	);
}
