import React from 'react';
import Proyect from './Proyect';
import proyectoUnmsm from '../public/img/proyecto-unmsm.png';
import proyectoAc19p from '../public/img/proyecto-ac19p.png';
import proyectoCmUnmsm from '../public/img/proyecto-cm-unmsm.png';
import proyectoUnac from '../public/img/proyecto-unac.jpg';
import easyWeb from '../public/img/easy-web.jpg';
import gestorMedias from '../public/img/gestor-medias.jpg';
import fondoEditorial from '../public/img/fondo-editorial.jpg';

const PortfolioContent = () => {
	const proyectsData = [
		{
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
					area: 'Patrones arquitectónicos',
					tecnologies: [
						'Microfrontend',
						'Backend For Frontend',
						'Clean Architecture',
					],
				},
			],
			content: `Este proyecto busca administrar las matrículas al programa 
			de tutorías de la Universidad Nacional del Callao. Se trata de una plataforma web con 
			capacidad de seguimiento y manejo de roles de usuarios para cada proceso definido.`,
			title: 'Gestor de Medias - Cencosud',
			image: gestorMedias,
		},
		{
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
					area: 'Patrones arquitectónicos',
					tecnologies: [
						'Microfrontend',
						'Backend For Frontend',
						'Clean Architecture',
					],
				},
			],
			content: `Este proyecto busca administrar las matrículas al programa 
			de tutorías de la Universidad Nacional del Callao. Se trata de una plataforma web con 
			capacidad de seguimiento y manejo de roles de usuarios para cada proceso definido.`,
			title: 'Easy Ecommerce - Cencosud',
			image: easyWeb,
		},
		{
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
		},
		{
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
			title: 'Sistema de Tutorías - UNAC',
			image: proyectoUnac,
		},
		{
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
			title: 'Gestor de contenidos - UNMSM',
			image: proyectoCmUnmsm,
		},
		{
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
			title: 'Fondo Editorial - UNMSM',
			image: fondoEditorial,
		},
		{
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
		},
	];
	return (
		<>
			{proyectsData.map((data, index) => {
				return <Proyect data={data} key={index + data.title} />;
			})}
		</>
	);
};

export default PortfolioContent;
