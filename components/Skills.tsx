import React from 'react';

const Skills = () => {
	const skillsData = [
		{
			name: 'Frontend',
			techs: [
				'HTML',
				'CSS',
				'JavaScript',
				'TypeScript',
				'React',
				'NextJS',
				'Redux',
			],
		},
		{
			name: 'Frontend',
			techs: [
				'HTML',
				'CSS',
				'JavaScript',
				'TypeScript',
				'React',
				'NextJS',
				'Redux',
			],
		},
		{
			name: 'Frontend',
			techs: [
				'HTML',
				'CSS',
				'JavaScript',
				'TypeScript',
				'React',
				'NextJS',
				'Redux',
			],
		},
		{
			name: 'Frontend',
			techs: [
				'HTML',
				'CSS',
				'JavaScript',
				'TypeScript',
				'React',
				'NextJS',
				'Redux',
			],
		},
		{
			name: 'Frontend',
			techs: [
				'HTML',
				'CSS',
				'JavaScript',
				'TypeScript',
				'React',
				'NextJS',
				'Redux',
			],
		},
		{
			name: 'Frontend',
			techs: [
				'HTML',
				'CSS',
				'JavaScript',
				'TypeScript',
				'React',
				'NextJS',
				'Redux',
			],
		},
		{
			name: 'Frontend',
			techs: [
				'HTML',
				'CSS',
				'JavaScript',
				'TypeScript',
				'React',
				'NextJS',
				'Redux',
			],
		},
		{
			name: 'Frontend',
			techs: [
				'HTML',
				'CSS',
				'JavaScript',
				'TypeScript',
				'React',
				'NextJS',
				'Redux',
			],
		},
	];
	return (
		<div className="grid-cols-4 grid gap-x-5">
			{skillsData.map((skill, index) => {
				return (
					<div
						key={skill.name + index}
						className="col-span-1 flex flex-col mb-7">
						<h1 className="font-bold text-sm mb-2 text-verde bg-white/10 py-1 px-2 rounded-md text-center">
							<span className="font-normal text-sm">&#91;</span>
							&#160;{skill.name}&#160;
							<span className="font-normal text-sm">&#93;</span>
						</h1>
						<ul className="text-sm mt-4">
							{skill.techs.map((tech, index) => {
								return (
									<li key={tech + index} className="mb-4">
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
