import Hero from "@/components/hero/Hero";
import styles from "./living.module.css";
import Footer from "@/components/footer/Footer";
import Card from "@/components/card/Card";
import InfoBox from "@/components/infobox/InfoBox";
import { usePathname } from "next/navigation";
import Layout from "@/components/layouts/inner";
import { ubytovanieData, ubytovanieHero } from "@/lib/data";

export default function Ubytovanie() {
	const pathname = usePathname();

	return (
		<Layout>
			<main className={styles.main}>
				<Hero
					imgurl={ubytovanieHero.imgurl}
					title={ubytovanieHero.title}
					descr={ubytovanieHero.descr}
				/>
				<div className={styles.content}>
					{ubytovanieData.map((item, index) => (
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
