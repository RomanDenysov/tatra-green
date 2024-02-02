export const perspective = {
	initial: {
		scale: 1,
		x: 0,
	},
	enter: {
		scale: 1,
		x: 0,
	},
	exit: {
		scale: 0.9,

		x: 900,
		opacity: 1,
		transition: {
			duration: 2.6,
			ease: [0.76, 0, 0.24, 1],
		},
	},
};

export const slide = {
	initial: {
		x: "calc(100% + 100px)",
	},
	enter: {
		x: "calc(100% + 100px)",
	},
	exit: {
		x: 0,
		transition: {
			duration: 1.8,
			ease: [0.76, 0, 0.24, 1],
		},
	},
};

export const opacity = {
	initial: {
		opacity: 0,
	},
	enter: {
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	},
	exit: {
		opacity: 1,
	},
};
