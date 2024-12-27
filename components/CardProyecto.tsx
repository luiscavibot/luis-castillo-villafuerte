import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
// import Link from 'next/link';
import React, { FC } from 'react';
interface Props {
	src: StaticImageData;
	title: string;
}
const CardProyecto: FC<Props> = ({ src, title }) => {
	return (
		<div className=" transition-transform">
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
