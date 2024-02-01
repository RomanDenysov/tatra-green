import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Jost } from "next/font/google";
import Modal from "@/components/modal/Modal";
import { Photobox } from "@/components/photobox/Photobox";

const jost = Jost({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={jost.className}>
			<Modal>
				<Photobox />
			</Modal>
			<Component {...pageProps} />
		</main>
	);
}
