import Image, { StaticImageData } from 'next/future/image';
import Link from 'next/link';
import React, { FC } from 'react';
interface Props {
	src: StaticImageData;
	link: string;
	title: string;
}
const CardProyecto: FC<Props> = ({ src, link, title }) => {
	return (
		<div
			onClick={() => {
				window.open(`${link}`, '_blank');
			}}
			className="hover:scale-105 transition-transform cursor-pointer">
			<Image
				src={src}
				className="grayscale-0"
				alt={title}
				quality={100}
			/>
		</div>
	);
};

export default CardProyecto;
