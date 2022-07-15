import React from 'react';
import Proyect from './Proyect';
import bibliotecaCentral from '../public/img/biblioteca-central.png';

const PortfolioContent = () => {
	const proyectsData = [
		{
			id: '1',
			tools: ['PHP', 'Javascript', 'MySQL'],
			content:
				'Laboro como líder del equipo de desarrollo y diseño, que tiene como objetivo estandarizar y optimizar los sitios web de la universidad a través de la adopción de buenas prácticas del lado del diseño, desarrollo e infraestructura.',
			title: 'Sitio web de la Biblioteca Central de la UNMSM',
		},
		{
			id: '2',
			tools: ['PHP', 'Javascript', 'MySQL'],
			content:
				'Laboro como líder del equipo de desarrollo y diseño, que tiene como objetivo estandarizar y optimizar los sitios web de la universidad a través de la adopción de buenas prácticas del lado del diseño, desarrollo e infraestructura.',
			title: 'Sitio web de la Biblioteca Central de la UNMSM',
		},
		{
			id: '3',
			tools: ['PHP', 'Javascript', 'MySQL'],
			content:
				'Laboro como líder del equipo de desarrollo y diseño, que tiene como objetivo estandarizar y optimizar los sitios web de la universidad a través de la adopción de buenas prácticas del lado del diseño, desarrollo e infraestructura.',
			title: 'Sitio web de la Biblioteca Central de la UNMSM',
		},
	];
	return (
		<>
			{proyectsData.map((data) => {
				return <Proyect data={data} src={bibliotecaCentral} />;
			})}
		</>
	);
};

export default PortfolioContent;
