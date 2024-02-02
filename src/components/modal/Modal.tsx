"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useRef, useEffect } from "react";
import styles from "./modal.module.css";
import Image from "next/image";

type Props = {
	onClose?: () => void;
	children: React.ReactNode;
};

export default function Modal({ onClose, children }: Props) {
	const searchParams = useSearchParams();
	const dialogRef = useRef<null | HTMLDialogElement>(null);
	const showDialog = searchParams.get("showGalery");
	const router = useRouter();

	useEffect(() => {
		if (showDialog === "y") {
			document.body.style.overflow = "hidden";
			document.body.style.position = "fixed";

			dialogRef.current?.showModal();
		} else {
			document.body.style.overflow = "unset";
			document.body.style.position = "";

			dialogRef.current?.close();
		}
	}, [showDialog]);

	const closeModal = () => {
		setTimeout(() => {
			dialogRef.current?.close();

			if (window.history.length > 1) {
				router.back();
			} else {
				router.push("/");
			}
		}, 300);
	};

	const dialog: JSX.Element | null =
		showDialog === "y" ? (
			<dialog ref={dialogRef} className={styles.modal}>
				<div className={styles.fixbtn}>
					<button onClick={closeModal} className={styles.clsbtn}>
						<Image
							src={"/closeicon.svg"}
							width={18}
							height={18}
							alt="close=icon"
							className={styles.img}
						/>
					</button>
				</div>
				<div className={styles.imgbox}>{children}</div>
			</dialog>
		) : null;

	return dialog;
}
