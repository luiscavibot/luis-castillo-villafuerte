import React, { FC } from 'react';

import { FiExternalLink } from 'react-icons/fi';

interface Props {
	title: string;
	description: string;
	tools: string[];
	link: string;
}

const CardProyectoDos: FC<Props> = ({ title, description, tools, link }) => {
	return (
		<div
			onClick={() => {
				window.open(`${link}`, '_blank');
			}}
			className="flex flex-col justify-between col-span-full sm:col-span-1 rounded-lg p-6 text-sm bg-white/10 cursor-pointer hover:scale-105 transition-transform hover:bg-white/20"
		>
			<div>
				<div className="flex justify-between mb-4 items-center">
					<h1 className="w-[90%] font-bold text-white mr-2">
						{title}
					</h1>
					<FiExternalLink
						color="rgb(222 238 234 / 0.7)"
						className="w-[10%]"
						size={20}
					/>
				</div>
				<p>{description}</p>
			</div>
			<ul className="flex gap-2 text-xs mt-6 text-verde">
				{tools.map((tool, index) => (
					<li key={tool + index}>{tool}</li>
				))}
			</ul>
		</div>
	);
};

export default CardProyectoDos;
