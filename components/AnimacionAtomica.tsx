import Image from 'next/future/image';
import React from 'react';
import primeraOrbita from '../public/img/primera-orbita-cuadrada.png';
import segundaOrbita from '../public/img/segunda-orbita-cuadrada.png';
import terceraOrbita from '../public/img/tercera-orbita-cuadrada.png';
import cuartaOrbita from '../public/img/cuarta-orbita-cuadrada.png';

export default function AnimacionAtomica() {
	return (
		<div className="w-full relative -top-1/4 -translate-y-1/2">
			<Image
				src={primeraOrbita}
				className="absolute top-1/2 right-0 primera-orbita"
				quality={100}
			/>
			<Image
				src={segundaOrbita}
				className="absolute top-1/2 right-0 segunda-orbita"
				quality={100}
			/>
			<Image
				src={terceraOrbita}
				className="absolute top-1/2 right-0 tercera-orbita"
				quality={100}
			/>
			<Image
				src={cuartaOrbita}
				className="absolute top-1/2 right-0 cuarta-orbita"
				quality={100}
			/>
		</div>
	);
}
