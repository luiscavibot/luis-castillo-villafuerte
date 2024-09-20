import React from 'react';

const Skills = () => {
	const skillsData = [
		{
			name: 'Frontend',
			techs: [
				'React',
				'Angular',
				'VueJS',
				'Typescript',
				'NextJS',
				'React Native',
				'TailwindCSS',
				'Sass',
			],
		},
		{
			name: 'Backend & BDs',
			techs: [
				'Node',
				'NestJS',
				'Socket.io',
				'MySQL',
				'MongoDB',
				'RestAPI',
				'GraphQL',
				'PHP',
			],
		},
		{
			name: 'Serverless',
			techs: [
				'Serverless framework',
				'Firebase',
				'AWS Lambda',
				'AWS API Gateway',
				'Cloudformation',
				'Amazon SQS y Amazon SNS',
			],
		},
		{
			name: 'Cloud Services',
			techs: [
				'Amazon EC2',
				'Amazon RDS y Dynamo DB',
				'Amazon ECS y Fargate',
				'Amazon S3 y Amazon CloudFront',
				'Amazon CloudMap',
				'Amazon Codepipeline, CodeCommit, Codebuild y CodeDeploy',
			],
		},
		{
			name: 'Otras tecnologías',
			techs: ['Docker', 'Git, GitHub y GitLab', 'Nginx', 'PM2'],
		},
		{
			name: 'Complementarios',
			techs: [
				'Inglés técnico',
				'WebHooks',
				'Gestores de contenido',
				'Figma',
				'Scrum',
			],
		},
		{
			name: 'Best Practices',
			techs: ['Clean code', 'SOLID', 'SEO', 'Accesibility'],
		},
	];
	return (
		<div className="grid-cols-4 grid gap-x-5">
			{skillsData.map((skill, index) => {
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
							{skill.techs.map((tech, index) => {
								return (
									<li
										key={tech + index}
										className="mb-4 hover:text-verde"
									>
										{tech}
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
