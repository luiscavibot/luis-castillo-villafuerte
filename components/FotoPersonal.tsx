import React from 'react';
import Image from 'next/future/image';

import yo from '../public/img/yo.png';

export const FotoPersonal = () => {
	return (
		<div className="hover:scale-105 transition-transform translate-y-4 mt-14 before:z-10 before:hover:z-0 before:block before:absolute before:rounded-lg before:inset-0 before:translate-x-4 before:-translate-y-4 before:bg-verde/20 before:border-3 relative inline-block">
			<Image
				src={yo}
				quality={100}
				className="grayscale hover:grayscale-0"
			/>
		</div>
	);
};
