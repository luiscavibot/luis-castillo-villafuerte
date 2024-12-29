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
					tecnologies: [
						'React',
						'Typescript',
						'Redux & Redux Saga',
						'Websocket.io',
					],
				},
				{
					area: 'Backend',
					tecnologies: ['NestJS', 'TypeORM', 'MongoDB', 'Redis'],
				},
				{
					area: 'Cloud technologies',
					tecnologies: [
						'AWS Lambda',
						'AWS S3',
						'AWS API Gateway',
						'AWS Step Functions',
						'AWS Cloudfront',
						'AWS ECS',
					],
				},
				{
					area: 'Devops',
					tecnologies: [
						'Docker',
						'Github Actions',
						'Terraform',
						'Kubernetes',
					],
				},
				{
					area: 'Patrones arquitectónicos',
					tecnologies: ['Microservicios', 'Serverless'],
				},
			],
			title: 'Gestor de Medias - Cencosud - Latinoamérica',
			rol: 'Full Stack Developer -Cloud Developer',
			content: `El Gestor de medios es un sistema web que permite a los proveedores de productos de la empresa CENCOSUD administrar todos los recursos
			audiovisuales que se utilizan en sus distintas plataformas de Ecommerce y tiene la facultad de integrarse a todo el ecosistema de TI de la empresa.`,
			image: gestorMedias,
		},
		{
			tools: [
				{
					area: 'Frontend',
					tecnologies: ['React', 'Typescript', 'Storybook', 'Redux'],
				},
				{
					area: 'Patrones arquitectónicos',
					tecnologies: [
						'Microfrontend',
						'Backend For Frontend',
						'Clean Architecture',
					],
				},
				{
					area: 'Cloud technologies',
					tecnologies: [
						'AWS Cloudfront',
						'AWS WAF',
						'AWS Elastic Load Balancer',
						'Amazon EKS',
						'Amazon Route 53',
					],
				},

				{
					area: 'Devops',
					tecnologies: [
						'Docker',
						'Github Actions',
						'Terraform',
						'Kubernetes',
						'New Relic',
					],
				},
			],
			content: `Easy, una de las marcas líder de productos por departamento de Cencosud, emprendió la renovación 
			de su plataforma de e-commerce con el objetivo de mejorar la experiencia del usuario y potenciar sus ventas. Para ello, desarrolló un proyecto 
			enfocado en sustituir la plataforma Vtex que utilizaba anteriormente.`,
			title: 'Easy Ecommerce - Cencosud - Chile',
			image: easyWeb,
			rol: 'Frontend Developer - Cloud Developer',
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
					area: 'Patrones arquitectónicos',
					tecnologies: ['Microservicios'],
				},
				{
					area: 'Cloud technologies',
					tecnologies: [
						'AWS S3',
						'AWS Cloudfront',
						'Amazon RDS',
						'AWS Elastic Load Balancer',
						'Amazon EKS',
						'Amazon Route 53',
					],
				},

				{
					area: 'Devops',
					tecnologies: [
						'Prometheus',
						'Grafana',
						'Docker',
						'Github Actions',
						'Kubernetes',
					],
				},
			],
			content: `Este proyecto tuvo como objetivo visibilizar el
			liderazgo académico e investigativo de la Universidad Nacional
			Mayor de San Marcos y estableció las bases para la estandarización
			 y optimización de sus sitios web secundarios.`,
			title: 'Sitio web institucional - Universidad Nacional Mayor de San Marcos',
			image: proyectoUnmsm,
			rol: 'Full stack Developer - Devops',
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
					area: 'Cloud technologies',
					tecnologies: [
						'Amazon ECS',
						'Amazon Fargate',
						'Amazon ECR',
						'AWS S3',
						'AWS Cloudfront',
						'Amazon RDS',
						'AWS Elastic Load Balancer',
						'Amazon EKS',
						'Amazon Route 53',
					],
				},
				{
					area: 'Devops',
					tecnologies: [
						'Amazon CodePipeline',
						'Amazon CodeBuild',
						'Amazon CodeCommit',
					],
				},
			],
			content: `Este Gestor de contenidos es una plataforma web que permite ortorgar una fácil administración de los 
			 distintos sitios web de la institución a múltiples usuarios. Incluye políticas de gestión de contenido de la institución.`,
			title: 'Gestor de contenidos - Universidad Nacional Mayor de San Marcos',
			image: proyectoCmUnmsm,
			rol: 'Full stack Developer - Devops',
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
					area: 'Infraestructura',
					tecnologies: ['On-premise'],
				},
			],
			content: `Este proyecto busca administrar las matrículas al programa 
			de tutorías de la Universidad Nacional del Callao. Se trata de una plataforma web con 
			capacidad de seguimiento y manejo de roles de usuarios para cada proceso definido.`,
			title: 'Sistema de Tutorías - Universidad Nacional del Callao',
			image: proyectoUnac,
			rol: 'Frontend Developer',
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
					tecnologies: ['NodeJS', 'Express', 'MongoDB'],
				},
				{
					area: 'Cloud technologies',
					tecnologies: [
						'AWS Lambda',
						'AWS S3',
						'AWS API Gateway',
						'AWS Cloudfront',
						'AWS EKS',
					],
				},
				{
					area: 'Devops',
					tecnologies: ['Docker', 'Github Actions', 'Kubernetes'],
				},
			],
			content: `El Sitio web del fondo editorial es una plataforma donde se exponen la producción bibliográfica de la 
			Universidad Nacional Mayor de San Marcos. Se presenta el catálogo completo de libros en venta de la editorial.`,
			title: 'Fondo Editorial - UNMSM',
			image: fondoEditorial,
			rol: 'Full stack Developer - Devops',
		},
		{
			tools: [
				{
					area: 'Frontend',
					tecnologies: ['React', 'Sass', 'Formik', 'Semantic UI'],
				},
				{
					area: 'Backend',
					tecnologies: ['NodeJS', 'Express', 'MySQL'],
				},
				{
					area: 'Cloud technologies',
					tecnologies: [
						'Amazon EC2',
						'Amazon S3',
						'Amazon RDS',
						'Amazon CloudFront',
					],
				},
				{
					area: 'Devops',
					tecnologies: ['Docker', 'Github Actions', 'Kubernetes'],
				},
			],
			content: `El Archivo Covid-19 Perú es un repositorio digital nacional que materializa un
			arduo trabajo de investigación sobre el efecto social de la pandemia del COVID-19 en el Perú. 
			Recopila un interesante acervo de materiales auditivos, visuales y textuales.`,
			title: 'Archivo Covid-19 Perú',
			image: proyectoAc19p,
			rol: 'Full stack Developer - Devops',
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
