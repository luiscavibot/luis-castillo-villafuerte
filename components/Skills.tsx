import React from 'react';

const Skills = () => {
	const skillsData = [
		{
			name: 'FRONTEND',
			techs: [
				{ name: 'React', rating: 5 },
				{ name: 'Typescript', rating: 5 },
				{ name: 'Angular', rating: 4 },
				{ name: 'VueJS', rating: 3 },
				{ name: 'Redux', rating: 5 },
				{ name: 'NextJS', rating: 5 },
				{ name: 'React Native', rating: 3 },
				{ name: 'TailwindCSS', rating: 5 },
				{ name: 'Storybook', rating: 4 },
			],
		},
		{
			name: 'BACKEND & BDs',
			techs: [
				{ name: 'NestJS', rating: 5 },
				{ name: 'Node', rating: 5 },
				{ name: 'RestAPI', rating: 5 },
				{ name: 'Redis', rating: 4 },
				{ name: 'MySQL', rating: 4 },
				{ name: 'MongoDB', rating: 4 },
				{ name: 'GraphQL', rating: 3 },
				{ name: 'Socket.io', rating: 3 },
				{ name: 'Firebase', rating: 3 },
			],
		},
		{
			name: 'PATRONES DE DISEÑO',
			techs: [
				{ name: 'Dependency Injection', rating: 5 },
				{ name: 'Singleton', rating: 5 },
				{ name: 'Observer', rating: 5 },
				{ name: 'Facade', rating: 5 },
				{ name: 'Adapter', rating: 5 },
				{ name: 'Decorator', rating: 5 },
				{ name: 'Factory Method', rating: 4 },
				{ name: 'Abstract factory', rating: 4 },
			],
		},
		{
			name: 'PATRONES ARQUITECTÓNICOS',
			techs: [
				{ name: 'Microfrontend', rating: 5 },
				{ name: 'Clean Architecture', rating: 5 },
				{ name: 'Arquitectura Hexagonal', rating: 4 },
				{ name: 'Microservicios', rating: 5 },
				{ name: 'Backend for Frontend', rating: 5 },
				{ name: 'Orientada a eventos', rating: 4 },
				{ name: 'Serverless', rating: 4 },
			],
		},
		{
			name: 'DEVOPS',
			techs: [
				{ name: 'Git, Github y Gitlab', rating: 4 },
				{
					name: 'Github Actions',
					rating: 4,
				},
				{
					name: 'AWS CodePipeline, CodeCommit, CodeBuild y CodeDeploy',
					rating: 3,
				},
				{ name: 'Docker', rating: 4 },
				{ name: 'Kubernetes', rating: 4 },
				{ name: 'Terraform', rating: 4 },
				{ name: 'CloudFormation', rating: 4 },
				{ name: 'Prometheus y Grafana', rating: 3 },
				{ name: 'New Relic', rating: 3 },
				{ name: 'SonarQube', rating: 3 },
			],
		},
		{
			name: 'SEGURIDAD',
			techs: [
				{
					name: 'AWS Secrets Manager y AWS Systems Manager',
					rating: 5,
				},
				{
					name: 'AWS IAM ',
					rating: 5,
				},
				{
					name: 'AWS Cognito',
					rating: 3,
				},
				{
					name: 'AWS WAF y AWS Shield',
					rating: 3,
				},
				{ name: 'AWS Single Sign-On', rating: 3 },
				{
					name: 'AWS Certificate Manager',
					rating: 4,
				},
				{ name: 'JWT', rating: 5 },
				{ name: 'OAuth', rating: 5 },
				{ name: 'AWS API Gateway', rating: 5 },
			],
		},
		{
			name: 'SERVERLESS',
			techs: [
				{ name: 'Amazon DynamoDB', rating: 4 },
				{ name: 'Amazon RDS', rating: 4 },
				{ name: 'Amazon SQS y Amazon SNS', rating: 4 },
				{ name: 'AWS Fargate', rating: 4 },
				{ name: 'AWS Lambda', rating: 5 },
				{ name: 'AWS Step Functions', rating: 4 },
				{ name: 'Amazon EventBridge', rating: 4 },
				{ name: 'Firebase', rating: 4 },
				{ name: 'Serverless framework', rating: 3 },
			],
		},
		{
			name: 'CLOUD',
			techs: [
				{ name: 'Amazon EC2', rating: 5 },
				{ name: 'Amazon RDS y Dynamo DB', rating: 4 },
				{ name: 'Amazon ECS y Fargate', rating: 5 },
				{ name: 'Amazon S3', rating: 5 },
				{ name: 'Amazon CloudFront', rating: 5 },
				{ name: 'Amazon Route 53', rating: 5 },
				{ name: 'Amazon CloudWatch', rating: 3 },
			],
		},
		{
			name: 'IA',
			techs: [
				{ name: 'OpenAI', rating: 5 },
				{ name: 'Amazon Rekognition', rating: 4 },
				{ name: 'Amazon Textract', rating: 4 },
				{ name: 'Amazon Bedrock', rating: 4 },
			],
		},
		{
			name: 'SERVIDORES WEB',
			techs: [
				{ name: 'NGINX', rating: 3 },
				{ name: 'Ubuntu Server', rating: 3 },
				{ name: 'Kubernetes', rating: 4 },
				{ name: 'PM2', rating: 4 },
			],
		},
		{
			name: 'COMPLEMENTARIOS',
			techs: [
				{ name: 'Jest', rating: 5 },
				{ name: 'Figma', rating: 3 },
				{ name: 'Jira', rating: 3 },
				{ name: 'Visual Studio Code ', rating: 3 },
			],
		},
	];
	const renderRating = (rating: number) => {
		return (
			<div className="flex items-center ml-2">
				{Array.from({ length: 5 }).map((_, index) => (
					<div
						key={index}
						className={`w-2 h-2 rounded-full ${
							index < rating ? 'bg-claro/80' : 'bg-white/15'
						}`}
						style={{ marginRight: '4px' }}
					></div>
				))}
			</div>
		);
	};

	return (
		<div className="grid-cols-3 grid gap-x-10">
			{skillsData.map((skill, index) => {
				// Ordena el array de tecnologías de mayor a menor basado en `rating`.
				const sortedTechs = [...skill.techs].sort(
					(a, b) => b.rating - a.rating
				);

				return (
					<div
						key={skill.name + index}
						className="text-center sm:text-left col-span-full sm:col-span-1 flex flex-col mb-7 relative z-10"
					>
						<h1 className="font-bold text-sm mb-2 text-verde bg-white/10 py-1 px-2 rounded-md text-center">
							<span className="font-normal text-sm">&#91;</span>
							&#160;{skill.name}&#160;
							<span className="font-normal text-sm">&#93;</span>
						</h1>
						<ul className="text-sm mt-4">
							{sortedTechs.map((tech, index) => {
								return (
									<li
										key={tech.name + index}
										className="mb-4 flex items-center justify-between group"
									>
										<span className="text-left relative text-white group-hover:text-verde transition-colors duration-300">
											{tech.name}
											<span className="absolute bottom-0 left-0 w-0 h-[2px] bg-verde group-hover:w-full transition-all duration-300"></span>
										</span>
										{renderRating(tech.rating)}
									</li>
								);
							})}
						</ul>
					</div>
				);
			})}
		</div>
	);
};

export default Skills;
