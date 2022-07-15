import React from 'react';
import CardProyectoDos from './CardProyectoDos';

const OtrosProyectos = () => {
	const projectsOthersData = [
		{
			title: 'Sitio web del Sistema de Bibliotecas de la UNMSM',
			description:
				'Laboro como líder del equipo de desarrollo y diseño, que tiene como objetivo estandarizar y optimizar los sitios web de la universidad a través de la adopción de buenas prácticas del la',
			tools: ['PHP', 'MySQL', 'HTML'],
		},
		{
			title: 'Sitio web del Sistema de Bibliotecas de la UNMSM',
			description:
				'Laboro como líder del equipo de desarrollo y diseño, que tiene como objetivo estandarizar y optimizar los sitios web de la universidad a través de la adopción de buenas prácticas del la',
			tools: ['PHP', 'MySQL', 'HTML'],
		},
		{
			title: 'Sitio web del Sistema de Bibliotecas de la UNMSM',
			description:
				'Laboro como líder del equipo de desarrollo y diseño, que tiene como objetivo estandarizar y optimizar los sitios web de la universidad a través de la adopción de buenas prácticas del la',
			tools: ['PHP', 'MySQL', 'HTML'],
		},
		{
			title: 'Sitio web del Sistema de Bibliotecas de la UNMSM',
			description:
				'Laboro como líder del equipo de desarrollo y diseño, que tiene como objetivo estandarizar y optimizar los sitios web de la universidad a través de la adopción de buenas prácticas del la',
			tools: ['PHP', 'MySQL', 'HTML'],
		},
		{
			title: 'Sitio web del Sistema de Bibliotecas de la UNMSM',
			description:
				'Laboro como líder del equipo de desarrollo y diseño, que tiene como objetivo estandarizar y optimizar los sitios web de la universidad a través de la adopción de buenas prácticas del la',
			tools: ['PHP', 'MySQL', 'HTML'],
		},
		{
			title: 'Sitio web del Sistema de Bibliotecas de la UNMSM',
			description:
				'Laboro como líder del equipo de desarrollo y diseño, que tiene como objetivo estandarizar y optimizar los sitios web de la universidad a través de la adopción de buenas prácticas del la',
			tools: ['PHP', 'MySQL', 'HTML'],
		},
	];
	return (
		<>
			<h1 className=" text-verde text-lg font-semibold mb-12">
				<span className="font-normal text-base">&#123;</span> Otros
				proyectos <span className="font-normal text-base">&#125;</span>
			</h1>
			<div className="grid grid-cols-3 grid-rows-2 gap-4 w-full">
				{projectsOthersData.map((project, index) => (
					<CardProyectoDos key={index} {...project} />
				))}
			</div>
			{/* <button className="border-2 cursor-pointer bg-white/10 hover:bg-white/25 mt-14 rounded-lg px-4 py-2">
				ver más
			</button> */}
		</>
	);
};

export default OtrosProyectos;
