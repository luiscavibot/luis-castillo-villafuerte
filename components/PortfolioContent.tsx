import React from 'react';
import Proyect from './Proyect';
import proyectoPosgrado from '../public/img/proyecto-posgrado.png';
import proyectoUnmsm from '../public/img/proyecto-unmsm.png';
import proyectoAc19p from '../public/img/proyecto-ac19p.png';
const PortfolioContent = () => {
	const proyectsData = [
		{
			id: '1',
			tools: ['Node', 'MySQL', 'Sass', 'AWS', 'Serverless'],
			content: `Este proyecto tuvo como objetivo visibilizar el
			liderazgo académico e investigativo de la Universidad Nacional
			Mayor de San Marcos y estableció las bases para la estandarización
			 y optimización de sus sitios web secundarios. `,
			title: 'Sitio web de la Universidad Nacional Mayor de San Marcos',
			image: proyectoUnmsm,
			link: 'https://unmsm.edu.pe/',
		},
		{
			id: '2',
			tools: ['Node', 'ReactJS', 'Sass', 'MySQL', 'AWS'],
			content: `El Archivo Covid-19 Perú es un repositorio digital nacional que materializa un
			arduo trabajo de investigación sobre el efecto social de la pandemia del COVID-19 en el Perú. 
			Recopila un interesante acervo de materiales auditivos, visuales y textuales.`,
			title: 'Archivo Covid-19 Perú',
			image: proyectoAc19p,
			link: 'https://ac19p.unmsm.edu.pe/',
		},
		{
			id: '3',
			tools: ['Node', 'NextJS', 'Tailwind CSS', 'MySQL', 'AWS'],
			content: `En este proyecto, la Universidad Nacional Mayor de San Marcos
			muestra su oferta académica de Posgrado, a través de una plataforma
			 interactiva que reúne los múltiples programas que dispone para su comunidad.`,
			title: 'Estudios de Posgrado de la UNMSM (Próximo a publicar)',
			image: proyectoPosgrado,
			link: 'https://estudios-posgrado-prototype.vercel.app/maestrias',
		},
	];
	return (
		<>
			{proyectsData.map((data) => {
				return <Proyect data={data} key={data.id + data.title} />;
			})}
		</>
	);
};

export default PortfolioContent;
