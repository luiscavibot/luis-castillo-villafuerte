import React from 'react';
import Proyect from './Proyect';
import proyectoPosgrado from '../public/img/proyecto-posgrado.png';
import proyectoUnmsm from '../public/img/proyecto-unmsm.png';
import proyectoAc19p from '../public/img/proyecto-ac19p.png';
import proyectoCmUnmsm from '../public/img/proyecto-cm-unmsm.png';
import proyectoUnac from '../public/img/proyecto-unac.jpg';

const PortfolioContent = () => {
	const proyectsData = [
		{
			id: '0',
			tools: [
				{
					area: 'Frontend',
					tecnologies: ['React', 'Typescript', 'Material UI'],
				},
				{
					area: 'Backend',
					tecnologies: ['Java', 'MySQL', 'JWT'],
				},
				{
					area: 'Deployment',
					tecnologies: ['On-premise'],
				},
			],
			content: `Este proyecto busca administrar las matrículas al programa 
			de tutorías de la Universidad Nacional del Callao. Se trata de una plataforma web con 
			capacidad de seguimiento y manejo de roles de usuarios para cada proceso definido.`,
			title: 'Sistema de Tutorías para la UNAC',
			image: proyectoUnac,
			link: 'https://unac-tutorias-app.vercel.app/',
		},
		{
			id: '1',
			tools: [
				{
					area: 'Frontend',
					tecnologies: ['Angular', 'Angular material', 'TailwindCSS'],
				},
				{
					area: 'Backend',
					tecnologies: ['NestJS', 'TypeORM', 'MySQL', 'JWT'],
				},
				{
					area: 'Deployment',
					tecnologies: [
						'Amazon ECS',
						'Amazon Fargate',
						'Amazon ECR',
						'Amazon CodePipeline',
						'Amazon CodeBuild',
						'Amazon S3',
						'Amazon CodeCommit',
						'Amazon RDS',
					],
				},
			],
			content: `Este proyecto aún se encuentra en desarrollo. Se trata de
			 una plataforma web que permitirá ortorgar una fácil administración de los 
			 distintos sitios web de la institución a múltiples usuarios responsables diferenciados
			  por roles.`,
			title: 'Gestor de contenidos de los sitios web de la UNMSM',
			image: proyectoCmUnmsm,
			link: 'http://cm.unmsm.click',
		},
		{
			id: '2',
			tools: [
				{
					area: 'Frontend',
					tecnologies: [
						'React',
						'Sass',
						'Formik',
						'Semantic UI',
						'Scroll Infinite',
					],
				},
				{
					area: 'Backend',
					tecnologies: ['NodeJS', 'Express', 'MySQL'],
				},
				{
					area: 'Deployment',
					tecnologies: [
						'Nginx',
						'Amazon EC2',
						'Amazon S3',
						'Amazon RDS',
						'Amazon CloudFront',
					],
				},
			],
			content: `El Archivo Covid-19 Perú es un repositorio digital nacional que materializa un
			arduo trabajo de investigación sobre el efecto social de la pandemia del COVID-19 en el Perú. 
			Recopila un interesante acervo de materiales auditivos, visuales y textuales.`,
			title: 'Archivo Covid-19 Perú',
			image: proyectoAc19p,
			link: 'https://ac19p.unmsm.edu.pe/',
		},
		{
			id: '3',
			tools: [
				{
					area: 'Frontend',
					tecnologies: ['NextJS', 'TailwindCSS'],
				},
				{
					area: 'Backend',
					tecnologies: ['NodeJS', 'Express', 'MySQL'],
				},
				{
					area: 'Deployment',
					tecnologies: [
						'Nginx',
						'Amazon EC2',
						'Amazon S3',
						'Amazon RDS',
					],
				},
			],
			content: `En este proyecto, la Universidad Nacional Mayor de San Marcos
			muestra su oferta académica de Posgrado, a través de una plataforma
			 interactiva que reúne los múltiples programas que dispone para su comunidad.`,
			title: 'Estudios de Posgrado de la UNMSM (Próximo a publicar)',
			image: proyectoPosgrado,
			link: 'https://estudios-posgrado-prototype.vercel.app/maestrias',
		},
		{
			id: '4',
			tools: [
				{
					area: 'Frontend',
					tecnologies: ['NodeJS', 'Sass', 'Bootstrap'],
				},
				{
					area: 'Backend',
					tecnologies: ['NodeJS', 'Express', 'MySQL'],
				},
				{
					area: 'Deployment',
					tecnologies: [
						'Nginx',
						'Amazon EC2',
						'Amazon S3',
						'Amazon RDS',
					],
				},
			],
			content: `Este proyecto tuvo como objetivo visibilizar el
			liderazgo académico e investigativo de la Universidad Nacional
			Mayor de San Marcos y estableció las bases para la estandarización
			 y optimización de sus sitios web secundarios.`,
			title: 'Sitio web de la Universidad Nacional Mayor de San Marcos',
			image: proyectoUnmsm,
			link: 'https://unmsm.edu.pe/',
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
