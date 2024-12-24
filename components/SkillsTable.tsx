import React from 'react';

// Datos de ejemplo para `skillsData`
const skillsData = [
	{
		Entidad: 'CENCOSUD',
		Proyecto: 'Gestor de medias',
		Rol: 'Backend Developer',
		'Periodo de participación': 'Desarrollo de interface',
		Responsabilidades: [
			'Desarrollo de interface',
			'Desarrollo de interface',
		],
		'Tecnologías empleadas': [
			'Desarrollo de interface',
			'Desarrollo de interface',
		],
	},
	{
		Entidad: 'CENCOSUD',
		Proyecto: 'Gestor de medias',
		Rol: 'Frontend Developer',
		'Periodo de participación': 'Desarrollo de interface',
		Responsabilidades: [
			'Desarrollo de interface',
			'Desarrollo de interface',
		],
		'Tecnologías empleadas': [
			'Desarrollo de interface',
			'Desarrollo de interface',
		],
	},
	{
		Entidad: 'CENCOSUD',
		Proyecto: 'Plataforma de Ecommerce',
		Rol: 'Frontend Developer',
		'Periodo de participación': '2023-2024',
		Responsabilidades: ['Mantener Sistema Microfrontend'],
		'Tecnologías empleadas': ['Module federeation'],
	},
	{
		Entidad: 'CENCOSUD',
		Proyecto: 'Plataforma de Ecommerce',
		Rol: 'Frontend Developer',
		'Periodo de participación': '2023-2025',
		Responsabilidades: ['Desarrollar interfaces'],
		'Tecnologías empleadas': ['Nextjs'],
	},
	{
		Entidad: 'CENCOSUD',
		Proyecto: 'Plataforma de Ecommerce',
		Rol: 'Frontend Developer',
		'Periodo de participación': '2023-2026',
		Responsabilidades: ['Desarrollar interfaces'],
		'Tecnologías empleadas': ['Typescript'],
	},
	{
		Entidad: 'CENCOSUD',
		Proyecto: 'Plataforma de Ecommerce',
		Rol: 'Frontend Developer',
		'Periodo de participación': '2023-2027',
		Responsabilidades: ['Desarrollar interfaces'],
		'Tecnologías empleadas': ['React context'],
	},
	{
		Entidad: 'CENCOSUD',
		Proyecto: 'Plataforma de Ecommerce',
		Rol: 'Frontend Developer',
		'Periodo de participación': '2023-2028',
		Responsabilidades: ['Desarrollar interfaces'],
		'Tecnologías empleadas': ['Redux'],
	},
	{
		Entidad: 'CENCOSUD',
		Proyecto: 'Plataforma de Ecommerce',
		Rol: 'Frontend Developer',
		'Periodo de participación': '2023-2029',
		Responsabilidades: ['Desarrollar interfaces'],
		'Tecnologías empleadas': ['Styled-components'],
	},
	{
		Entidad: 'CENCOSUD',
		Proyecto: 'Plataforma de Ecommerce',
		Rol: 'Frontend Developer',
		'Periodo de participación': '2023-2030',
		Responsabilidades: ['Desarrollar formularios'],
		'Tecnologías empleadas': ['UseForm'],
	},
	{
		Entidad: 'CENCOSUD',
		Proyecto: 'Plataforma de Ecommerce',
		Rol: 'Frontend Developer',
		'Periodo de participación': '2023-2031',
		Responsabilidades: [
			'Diseñar e implementar arquitectura para optimización de performance',
		],
		'Tecnologías empleadas': ['Amazon Cloudfront'],
	},
	{
		Entidad: 'CENCOSUD',
		Proyecto: 'Plataforma de Ecommerce',
		Rol: 'Frontend Developer',
		'Periodo de participación': '2023-2032',
		Responsabilidades: [
			'Diseñar e implementar arquitectura para optimización de performance',
		],
		'Tecnologías empleadas': ['Amazon EKS'],
	},
	{
		Entidad: 'CENCOSUD',
		Proyecto: 'Plataforma de Ecommerce',
		Rol: 'Frontend Developer',
		'Periodo de participación': '2023-2033',
		Responsabilidades: [
			'Diseñar e implementar arquitectura para optimización de performance',
		],
		'Tecnologías empleadas': ['Amazon Elastic Load Balancer'],
	},
	{
		Entidad: 'CENCOSUD',
		Proyecto: 'Plataforma de Ecommerce',
		Rol: 'Frontend Developer',
		'Periodo de participación': '2023-2034',
		Responsabilidades: ['Crear pruebas unitarias'],
		'Tecnologías empleadas': ['Jest'],
	},
	{
		Entidad: 'CENCOSUD',
		Proyecto: 'Plataforma de Ecommerce',
		Rol: 'Frontend Developer',
		'Periodo de participación': '2023-2035',
		Responsabilidades: ['Mantener biblioteca UI'],
		'Tecnologías empleadas': ['Storybook'],
	},
	{
		Entidad: 'UNMSM',
		Proyecto: 'Sitio web institucional',
		Rol: 'Frontend Developer',
		'Periodo de participación': '2022-2024',
		Responsabilidades: ['Desarrollo de interface'],
		'Tecnologías empleadas': ['Desarrollo de interface'],
	},
	{
		Entidad: 'UNMSM',
		Proyecto: 'Sitio web institucional',
		Rol: 'Frontend Developer',
		'Periodo de participación': '2022-2025',
		Responsabilidades: ['Desarrollo de interface'],
		'Tecnologías empleadas': ['Desarrollo de interface'],
	},
	{
		Entidad: 'UNMSM',
		Proyecto: 'Sitio web institucional',
		Rol: 'Frontend Developer',
		'Periodo de participación': '2022-2026',
		Responsabilidades: ['Desarrollo de interface'],
		'Tecnologías empleadas': ['Desarrollo de interface'],
	},
	{
		Entidad: 'UNMSM',
		Proyecto: 'Sitio web institucional',
		Rol: 'Frontend Developer',
		'Periodo de participación': '2022-2027',
		Responsabilidades: ['Desarrollo de interface'],
		'Tecnologías empleadas': ['Desarrollo de interface'],
	},
	{
		Entidad: 'UNMSM',
		Proyecto: 'Sitio web institucional',
		Rol: 'Frontend Developer',
		'Periodo de participación': '2022-2028',
		Responsabilidades: ['Desarrollo de interface'],
		'Tecnologías empleadas': ['Desarrollo de interface'],
	},
];

const calculateRowSpans = (data: any, field: any) => {
	const spans = Array(data.length).fill(1);
	for (let i = data.length - 1; i > 0; i--) {
		if (data[i][field] === data[i - 1][field]) {
			spans[i - 1] += spans[i];
			spans[i] = 0; // Marcar como no visible
		}
	}
	return spans;
};

const SkillsTable = () => {
	// Calcular los rowSpans para las columnas "Entidad", "Proyecto" y "Rol"
	const entitySpans = calculateRowSpans(skillsData, 'Entidad');
	const projectSpans = calculateRowSpans(skillsData, 'Proyecto');
	const roleSpans = calculateRowSpans(skillsData, 'Rol');

	return (
		<div className="container mx-auto p-4 text-gray-200 bg-gray-900">
			<div className="hidden md:block overflow-x-auto">
				<table className="min-w-full border border-gray-800 bg-gray-800">
					<thead>
						<tr className="bg-gray-700 text-gray-100">
							<th className="py-3 px-4 border border-gray-700 text-left font-semibold">
								Entidad
							</th>
							<th className="py-3 px-4 border border-gray-700 text-left font-semibold">
								Proyecto
							</th>
							<th className="py-3 px-4 border border-gray-700 text-left font-semibold">
								Rol
							</th>
							<th className="py-3 px-4 border border-gray-700 text-left font-semibold">
								Responsabilidades
							</th>
							<th className="py-3 px-4 border border-gray-700 text-left font-semibold">
								Tecnologías empleadas
							</th>
							<th className="py-3 px-4 border border-gray-700 text-left font-semibold">
								Periodo de participación
							</th>
						</tr>
					</thead>
					<tbody>
						{skillsData.map((item, index) => (
							<tr key={index}>
								{entitySpans[index] > 0 && (
									<td
										rowSpan={entitySpans[index]}
										className="py-3 px-4 border border-gray-700 hover:bg-gray-700 transition-colors"
									>
										{item.Entidad}
									</td>
								)}
								{projectSpans[index] > 0 && (
									<td
										rowSpan={projectSpans[index]}
										className="py-3 px-4 border border-gray-700 hover:bg-gray-700 transition-colors"
									>
										{item.Proyecto}
									</td>
								)}
								{roleSpans[index] > 0 && (
									<td
										rowSpan={roleSpans[index]}
										className="py-3 px-4 border border-gray-700 hover:bg-gray-700 transition-colors"
									>
										{item.Rol}
									</td>
								)}
								<td className="py-3 px-4 border border-gray-700 hover:bg-gray-700 transition-colors">
									{item.Responsabilidades.join(', ')}
								</td>
								<td className="py-3 px-4 border border-gray-700 hover:bg-gray-700 transition-colors">
									{item['Tecnologías empleadas'].join(', ')}
								</td>
								<td className="py-3 px-4 border border-gray-700 hover:bg-gray-700 transition-colors">
									{item['Periodo de participación']}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default SkillsTable;
