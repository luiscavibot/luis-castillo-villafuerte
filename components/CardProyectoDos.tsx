import React, { FC } from 'react';

import { FiExternalLink } from 'react-icons/fi';

interface Props {
	title: string;
	description: string;
	tools: string[];
}

const CardProyectoDos: FC<Props> = ({ title, description, tools }) => {
	return (
		<div className="col-span-1 rounded-lg p-6 text-sm bg-white/10 cursor-pointer hover:scale-105 transition-transform hover:bg-white/20">
			<div className="flex justify-between mb-4 items-center">
				<h1 className="font-bold text-white">{title}</h1>
				<FiExternalLink color="rgb(222 238 234 / 0.7)" size={35} />
			</div>
			<p>{description}</p>
			<ul className="flex gap-2 text-xs mt-6 text-verde">
				{tools.map((tool, index) => (
					<li key={tool + index}>{tool}</li>
				))}
			</ul>
		</div>
	);
};

export default CardProyectoDos;
