import React from 'react';
import Proyect from './Proyect';
import bibliotecaCentral from '../public/img/biblioteca-central.png';
import proyectoUnmsm from '../public/img/proyecto-unmsm.png';

const PortfolioContent = () => {
	const proyectsData = [
		{
			id: '1',
			tools: ['Node', 'MySQL', 'Sass', 'AWS'],
			content:
				'Laboro como líder del equipo de desarrollo y diseño, que tiene como objetivo estandarizar y optimizar los sitios web de la universidad a través de la adopción de buenas prácticas del lado del diseño, desarrollo e infraestructura.',
			title: 'Sitio web de la Universidad Nacional Mayor de San Marcos',
		},
		{
			id: '2',
			tools: ['Node', 'ReactJS', 'Sass', 'MySQL', 'AWS'],
			content:
				'Laboro como líder del equipo de desarrollo y diseño, que tiene como objetivo estandarizar y optimizar los sitios web de la universidad a través de la adopción de buenas prácticas del lado del diseño, desarrollo e infraestructura.',
			title: 'Archivo Covid-19 Perú',
		},
		{
			id: '3',
			tools: ['Node', 'NextJS', 'Tailwind CSS', 'MySQL', 'AWS'],
			content:
				'Laboro como líder del equipo de desarrollo y diseño, que tiene como objetivo estandarizar y optimizar los sitios web de la universidad a través de la adopción de buenas prácticas del lado del diseño, desarrollo e infraestructura.',
			title: 'Estudios de Posgrado de la UNMSM (Próximo a publicar)',
		},
	];
	return (
		<>
			{proyectsData.map((data) => {
				return (
					<Proyect
						data={data}
						src={
							data.id === '1'
								? proyectoUnmsm
								: data.id === '2'
								? bibliotecaCentral
								: data.id === '3'
								? bibliotecaCentral
								: null
						}
						key={data.id + data.title}
					/>
				);
			})}
		</>
	);
};

export default PortfolioContent;
