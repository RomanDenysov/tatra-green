"use client";
import styles from "@/styles/home.module.css";
import Hero from "@/components/hero/Hero";
import Card from "@/components/card/Card";
import Footer from "@/components/footer/Footer";
import BigBox from "@/components/bigbox/BigBox";
import Layout from "@/components/layouts/inner";
import { homeData, homeFooter, homeHero } from "@/lib/data";

export default function Home() {
	return (
		<Layout>
			<main className={styles.main}>
				<Hero imgurl={homeHero.imgurl} title={homeHero.title} />
				<section className={styles.content}>
					{homeData.map((item, index) => (
						<Card
							key={index}
							title={item.title}
							descr={item.descr}
							button={item.button}
							imgurl={item.imgurl}
							to={item.to}
						/>
					))}
				</section>
				<BigBox
					title={homeFooter.title}
					descr={homeFooter.descr}
					button={homeFooter.button}
					to={homeFooter.to}
					imgurl={homeFooter.imgurl}
				/>
				<Footer />
			</main>
		</Layout>
	);
}
