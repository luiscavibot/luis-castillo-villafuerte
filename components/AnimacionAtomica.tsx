import Image from 'next/image';
import React from 'react';
import primeraOrbita from '../public/img/primera-orbita-cuadrada.png';
import segundaOrbita from '../public/img/segunda-orbita-cuadrada.png';
import terceraOrbita from '../public/img/tercera-orbita-cuadrada.png';
import cuartaOrbita from '../public/img/cuarta-orbita-cuadrada.png';

export default function AnimacionAtomica() {
	return (
		<div className="scale-[0.8] xl:scale-100 w-full relative -top-1/4 -translate-y-1/2">
			<Image
				alt="Primera orbita"
				src={primeraOrbita}
				className="absolute top-[80%] xl:top-1/2 right-0 primera-orbita tranform-to-white"
				quality={100}
				draggable="false"
			/>
			<Image
				alt="Segunda orbita"
				src={segundaOrbita}
				className="absolute top-[80%] xl:top-1/2 right-0 segunda-orbita tranform-to-white"
				quality={100}
				draggable="false"
			/>
			<Image
				alt="Tercera orbita"
				src={terceraOrbita}
				className="absolute top-[80%] xl:top-1/2 right-0 tercera-orbita tranform-to-white"
				quality={100}
				draggable="false"
			/>
			<Image
				alt="Cuarta orbita"
				src={cuartaOrbita}
				className="absolute top-[80%] xl:top-1/2 right-0 cuarta-orbita tranform-to-white"
				quality={100}
				draggable="false"
			/>
		</div>
	);
}
