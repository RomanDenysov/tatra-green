import Link from "next/link";

export default function Custom404() {
	return (
		<div
			style={{
				width: "100svw",
				height: "100svh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#202820",
				gap: "100px",
			}}
		>
			<h1
				style={{
					fontFamily: "jost, sans-serif",
					fontSize: "40px",
					color: "white",
				}}
			>
				404 - Page Not Found
			</h1>
			<Link
				href={"/"}
				style={{
					fontSize: "20px",
					color: "white",
					textDecoration: "underline",
					fontFamily: "jost, sans-serif",
					lineHeight: "1",
				}}
			>
				Vratit sa domov
			</Link>
		</div>
	);
}
