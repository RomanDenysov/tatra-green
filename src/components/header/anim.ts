export const menuSlide = {
	initial: {
		y: "calc(-100% + 100px)",
		borderRadius: "50%",
		paddingBottom: "300px",
	},
	enter: {
		y: "0%",
		borderRadius: "0%",
		paddingBottom: "0px",
		transition: {
			duration: 0.2,
			ease: [0.16, 0.1, 0.24, 0.8],
		},
	},

	exit: {
		y: "calc(100% + 100px)",
		transition: {
			duration: 0.5,
			ease: [0.16, 0.1, 0.24, 0.8],
		},
	},
};
