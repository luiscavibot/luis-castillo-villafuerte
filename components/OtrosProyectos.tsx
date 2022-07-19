import React from 'react';
import CardProyectoDos from './CardProyectoDos';

const OtrosProyectos = () => {
	const projectsOthersData = [
		{
			title: 'Facultad de Ciencias Biológicas de la UNMSM',
			description: `Este proyecto refleja la formación académica que ofrece la Facultad de 
			Ciencias Biológicas de la UNMSM a sus alumnos y su actual producción científica.`,
			tools: ['NextJS', 'NodeJS', 'MySQL'],
			link: 'https://biologia.unmsm.edu.pe/',
		},
		{
			title: 'Sistema de Bibliotecas y Biblioteca Central',
			description: `El Sistema de Bibliotecas de la UNMSM integra los distintos servicios digitales
			que dispone para sus usuarios a través de esta plataforma web.`,
			tools: ['PHP', 'Javascript', 'MySQL', 'HTML'],
			link: 'https://sisbib.unmsm.edu.pe/',
		},
		{
			title: 'Repositorio de Colecciones Especiales',
			description: `El Repositorio de Colecciones Especiales de la UNMSM es una plataforma web que 
			recopila múltiples y selectos recursos para la investigación, obtenidos de un amplio proceso de 
			digitalización.`,
			tools: ['PHP', 'Javascript', 'MySQL'],
			link: 'https://repositorio.unmsm.edu.pe/',
		},
		{
			title: 'Discursos audiovisuales sobre lo Afroperuano',
			description: `En el marco de la celebración del Bicentenario de la independencia del Perú,
			este proyecto web muestra un trabajo de investigación que reconoce y pone en valor la 
			riqueza cultural afroperuana del Perú.`,
			tools: ['NextJS', 'Sass', 'NodeJS', 'MySQL'],
			link: 'https://discursosvisualesafroperuanos.com/',
		},
		{
			title: 'Actas del Consejo de Ministros',
			description: `Este proyecto web provee un repositorio que contiene las Actas del Consejo de Ministros
			 de los sucesivos gobiernos desde diciembre de 1939 hasta julio de 1990 del Estado Peruano.`,
			tools: ['PHP', 'Javascript', 'MySQL'],
			link: 'https://sisbib.unmsm.edu.pe/Repositorio_ACM/',
		},
		{
			title: 'Fondo Editorial de la UNMSM',
			description: `La UNMSM cuenta con una producción editorial importante que cuenta con un repositorio 
			digital desarrollado para ofrecer de manera gratuita una serie de libros seleccionados y digitalizados, a través de este proyecto.`,
			tools: ['PHP', 'MySQL', 'Javascript'],
			link: 'https://fondoeditorial.unmsm.edu.pe/index.php/fondoeditorial',
		},
	];
	return (
		<>
			<h1 className=" text-verde text-lg font-semibold mb-12">
				<span className="font-normal text-base">&#123;</span> Otros
				proyectos <span className="font-normal text-base">&#125;</span>
			</h1>
			<div className="grid grid-cols-3 grid-rows-2 gap-4 w-full">
				{projectsOthersData.map((project) => (
					<CardProyectoDos key={project.title} {...project} />
				))}
			</div>
		</>
	);
};

export default OtrosProyectos;
