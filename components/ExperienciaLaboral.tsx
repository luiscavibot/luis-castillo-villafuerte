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
					<h1 className="mt-10 text-verde text-lg font-semibold">
						<span className="font-normal text-base">&#123;</span>{' '}
						WiTI SpA - CENCOSUD{' '}
						<span className="font-normal text-base">&#125;</span>
					</h1>
					<p className="text-claro/70 mb-3">
						Ene. 2023 - actualidad &#40; 2 años &#41;
					</p>
					<div>
						<ListItem text="Actualmente formo parte del equipo de EASY-Chile, donde participo en el desarrollo de la plataforma de comercio electrónico del negocio." />
						<ListItem text="Tuve la oportunidad de integrarme al equipo de Cecommerce, donde colaboré en el desarrollo del proyecto Gestor de Medias." />
						<ListItem text="Trabajé del lado del front, back e infraestructura bajo el ecosistema de tecnologías basadas en Javascript y AWS." />
						<ListItem text="Mi principal logro en el proyecto Gestor de Medias fue desarrollar una funcionalidad para la aplicación que permitía visualizar en tiempo real la trazabilidad del procesamiento de imágenes. Para ello, utilicé principalmente tecnologías como WebSockets, AWS API Gateway y Amazon Step Functions." />
						<ListItem text="Mi principal aporte en la plataforma de comercio electrónico de EASY fue colaborar en la optimización del rendimiento de la carga del sitio web. Apliqué estrategias basadas en tecnologías como Amazon CloudFront, Amazon Elastic Load Balancer y Kubernetes." />
					</div>
					<h1 className="mt-10 text-verde text-lg font-semibold">
						<span className="font-normal text-base">&#123;</span>{' '}
						Oficina General de Imagen Institucional - UNMSM{' '}
						<span className="font-normal text-base">&#125;</span>
					</h1>
					<p className="text-claro/70 mb-3">
						Ene. 2022 - Ene. 2023 &#40; 1 año y 1 mes &#41;
					</p>
					<div>
						<ListItem text="Laboré en esta oficina como Líder Técnico del equipo de desarrollo." />
						<ListItem text="Trabajé del lado del front, back e infraestructura bajo el ecosistema de tecnologías basadas en Javascript y AWS." />
						<ListItem text="Mi principal logro como Líder técnico fue dirigir el desarrollo de 8 sitios web y 2 aplicaciones web." />
						<ListItem text="Tuve la responsabilidad de administrar la cuenta de AWS de la institución." />
						<ListItem text="Definí e implementé un sistema de DevOps que hasta la fecha se mantiene vigente" />
					</div>
					<h1 className="mt-14 text-verde text-lg font-semibold">
						<span className="font-normal text-base">&#123;</span>{' '}
						Oficina de Automatización de la DSBBC-UNMSM{' '}
						<span className="font-normal text-base">&#125;</span>
					</h1>
					<p className="text-claro/70 mb-3">
						Jun. 2018 - ene. 2022 &#40; 3 años y 7 meses &#41;
					</p>
					<div>
						<ListItem text="Laboré en esta oficina como Líder Técnico del equipo de desarrollo." />
						<ListItem text="Trabajé del lado del front, back e infraestructura bajo el ecosistema de tecnologías basadas en Javascript." />
						<ListItem text="Uno de mis principales logros como Líder técnico fue dirigir el desarrollo de 2 sitios web y 4 aplicaciones web." />
						<ListItem text="El mayor logro alcanzado fue dirigir el desarrollo el sitio web institucional de la universidad" />
					</div>
				</div>
			) : (
				<div className="col-span-6 text-sm relative z-10">
					<h1 className="mt-14 text-verde text-lg font-semibold">
						<span className="font-normal text-base">&#123;</span>{' '}
						Centro Cultural UNMSM{' '}
						<span className="font-normal text-base">&#125;</span>
					</h1>
					<p className="text-claro/70 mb-3">
						Oct. 2024 &#40; 2 meses &#41;
					</p>
					<div>
						<ListItem text="Rol: Fullstack Developer" />
					</div>
					<h1 className="mt-14 text-verde text-lg font-semibold">
						<span className="font-normal text-base">&#123;</span>{' '}
						Unidad de Posgrado de la Facultad de Ciencias
						Adminsitrativas de la UNMSM{' '}
						<span className="font-normal text-base">&#125;</span>
					</h1>
					<p className="text-claro/70 mb-3">
						Jun. 2023 &#40; 4 meses &#41;
					</p>
					<div>
						<ListItem text="Rol: Fullstack Developer" />
					</div>
					<h1 className="mt-14 text-verde text-lg font-semibold">
						<span className="font-normal text-base">&#123;</span>{' '}
						Universidad Nacional del Callao{' '}
						<span className="font-normal text-base">&#125;</span>
					</h1>
					<p className="text-claro/70 mb-3">
						Ene. 2023 &#40; 2 meses &#41;
					</p>
					<div>
						<ListItem text="Rol: Frontend Developer" />
					</div>
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
						<ListItem text="Rol: Frontend Developer" />
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
						<ListItem text="Rol: Frontend Developer" />
					</div>
				</div>
			)}
		</>
	);
};

export default ExperienciaLaboral;
