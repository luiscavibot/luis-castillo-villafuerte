import React, { SyntheticEvent } from 'react';
import ListItem from '../components/ListItem';
import circuferenciaCocentrica1 from '../public/img/circuferencia-cocentrica-1.png';
import Image from 'next/image';
import { SubTtitulo } from '../components/SubTtitulo';
import { useState } from 'react';
const ExperienciaLaboral = () => {
	const [selectionButton, setSelectionButton] = useState(0);
	const styleSelectionButton =
		'before:block before:absolute before:rounded-lg before:inset-0 before:border-2 before:m-2 before:border-verde';
	const handleClick = (e: SyntheticEvent, option: number) => {
		if (option === 0) {
			setSelectionButton(0);
		} else {
			setSelectionButton(1);
		}
	};
	return (
		<>
			<Image
				alt="Circuferencia cocentrica 1"
				src={circuferenciaCocentrica1}
				className="absolute right-0 top-0"
			/>
			<div className="flex items-center col-start-1 sm:col-start-3 col-span-full relative z-10">
				<SubTtitulo title="Experiencia Laboral" />
			</div>
			<div className="hidden sm:block col-start-1 sm:col-start-3 col-span-2 text-sm relative z-10">
				<div className="mt-14 text-white">
					<div
						onClick={(e) => handleClick(e, 0)}
						className={`hover:bg-white/20 hover:scale-105 transition-transform font-semibold rounded-lg items-center h-24 bg-white/10 flex justify-center relative cursor-pointer ${
							selectionButton === 0 && styleSelectionButton
						}`}
					>
						<p>Full time</p>
					</div>
					<div
						onClick={(e) => handleClick(e, 1)}
						className={`hover:bg-white/20 hover:scale-105 transition-transform mt-3 font-semibold rounded-lg items-center h-24 bg-white/10 flex justify-center relative cursor-pointer ${
							selectionButton === 1 && styleSelectionButton
						}`}
					>
						<p>Freelance</p>
					</div>
				</div>
			</div>
			{selectionButton === 0 ? (
				<div className="col-span-full sm:col-span-6 text-sm relative z-10">
					<h1 className="mt-14 text-verde text-lg font-semibold">
						<span className="font-normal text-base">&#123;</span>{' '}
						Oficina de Automatización de la DSBBC-UNMSM{' '}
						<span className="font-normal text-base">&#125;</span>
					</h1>
					<p className="text-claro/70 mb-3">
						Jun. 2018 - ene. 2022 &#40; 3 años y 8 meses &#41;
					</p>
					<div>
						<ListItem text="Laboré como líder del equipo de diseño y desarrollo." />
						<ListItem text="El equipo tuvo la responsabilidad de crear productos digitales de naturaleza académica e investigativa." />
						<ListItem text="Renovamos el sitio web principal del Sistema de Bibliotecas y creamos diversos repositorios y archivos digitales en la Biblioteca Central de la universidad para lograr la transformación digital." />
						<ListItem text="Creamos aplicaciones para optimizar algunos procesos de la gestión administrativa." />
					</div>
					<h1 className="mt-10 text-verde text-lg font-semibold">
						<span className="font-normal text-base">&#123;</span>{' '}
						Oficina General de Imagen Institucional-UNMSM{' '}
						<span className="font-normal text-base">&#125;</span>
					</h1>
					<p className="text-claro/70 mb-3">
						Ene. 2022 - actualidad &#40; 9 meses &#41;
					</p>
					<div>
						<ListItem text="Actualmente laboro en esta oficina como líder del equipo de diseño y desarrollo." />
						<ListItem text="El equipo tiene la responsabilidad de crear productos digitales para incrementar la visibilidad de la universidad como institución lider en formación académica e investigación. " />
						<ListItem text="Uno de nuestros objetivos más importantes es optimizar todos los sitios web existentes en la universidad, a través del uso de tecnologías y diseños modernos, además de la adopción de buenas prácticas en la construcción de productos digitales." />
						<ListItem text="Además de desarrolladores y diseñadores UX/UI, el equipo cuenta con un UX Writer." />
					</div>
				</div>
			) : (
				<div className="col-span-6 text-sm relative z-10">
					<h1 className="mt-14 text-verde text-lg font-semibold">
						<span className="font-normal text-base">&#123;</span>{' '}
						Discursos visuales sobre lo Afroperuano - Bicentenario
						del Perú{' '}
						<span className="font-normal text-base">&#125;</span>
					</h1>
					<p className="text-claro/70 mb-3">
						Ene. 2022 &#40; 2 meses &#41;
					</p>
					<div>
						<ListItem text="Fui contratado como Teach Lead." />
						<ListItem text="El proyecto visibiliza el trabajo de investigación desarrollado por una comisión de Investigación creada especialmente para este proyecto en el marco del Bicentenario de mi país." />
					</div>
					<h1 className="mt-10 text-verde text-lg font-semibold">
						<span className="font-normal text-base">&#123;</span>{' '}
						INTELEGO{' '}
						<span className="font-normal text-base">&#125;</span>
					</h1>
					<p className="text-claro/70 mb-3">
						Jun. 2022 - actualidad &#40; 2 meses &#41;
					</p>
					<div>
						<ListItem text="Actualmente estoy contratado en esta empresa como desarrollar Frontend." />
						<ListItem text="El proyecto busca construir el sitio web corporativo de la empresa." />
					</div>
				</div>
			)}
		</>
	);
};

export default ExperienciaLaboral;
