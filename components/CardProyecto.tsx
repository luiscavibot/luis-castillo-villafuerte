import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
// import Link from 'next/link';
import React, { FC } from 'react';
interface Props {
	src: StaticImageData;
	link: string;
	title: string;
}
const CardProyecto: FC<Props> = ({ src, link, title }) => {
	return (
		<div
			// onClick={() => {
			// 	window.open(`${link}`, '_blank');
			// }}
			className=" transition-transform cursor-pointer"
		>
			<Image
				src={src}
				// className="grayscale hover:grayscale-0"
				alt={title}
				quality={100}
			/>
		</div>
	);
};

export default CardProyecto;
