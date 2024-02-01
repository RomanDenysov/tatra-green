interface SharedProps {
	title?: string;
	descr?: string;
	button?: string;
	imgurl?: string;
	to?: string;
}
interface ButtonProps extends SharedProps {
	secondary?: boolean;
	top?: boolean;
}
