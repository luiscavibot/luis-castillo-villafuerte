import Image, { StaticImageData } from 'next/future/image';
import React, { FC } from 'react';
interface Props {
	src: StaticImageData;
}
const CardProyecto: FC<Props> = ({ src }) => {
	return (
		<div className="hover:scale-105 transition-transform cursor-pointer before:z-20 before:hover:z-0 before:block before:absolute before:rounded-lg before:inset-0 before:translate-x-4 before:-translate-y-4 before:bg-verde/20 before:border-3 relative inline-block">
			<Image src={src} className="grayscale hover:grayscale-0" />
		</div>
	);
};

export default CardProyecto;
