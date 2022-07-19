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
			className="hover:scale-105 transition-transform cursor-pointer before:z-0 before:hover:z-0 before:block before:absolute before:rounded-lg before:inset-0 before:translate-x-4 before:-translate-y-4 before:bg-verde/20 before:border-3 relative inline-block">
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
