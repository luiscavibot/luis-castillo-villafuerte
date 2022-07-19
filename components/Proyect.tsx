import React, { FC, useId } from 'react';
import CardProyecto from '../components/CardProyecto';
import { AiOutlineTool } from 'react-icons/ai';
import { StaticImageData } from 'next/future/image';

interface Props {
	data: Information;
}
interface Information {
	id: string;
	tools: string[];
	content: string;
	title: string;
	image: StaticImageData;
	link: string;
}

const Proyect: FC<Props> = ({ data }) => {
	const { tools, content, title, image, link } = data;
	return (
		<>
			<div className="col-start-3 col-span-4">
				<CardProyecto src={image} link={link} title={title} />
				<ul className="absolute flex items-center gap-2 text-sm">
					<li>
						<AiOutlineTool size="1rem" color="#DEEEEA" />
					</li>
					{tools.map((tool) => (
						<li key={data.id + data.title}>{tool}</li>
					))}
				</ul>
			</div>
			<div className="col-start-3 col-span-8 flex justify-end relative before:w-1/2 before:h-full before:block before:-top-32 text-sm before:z-0 before:absolute  before:rounded-lg before:border-2 before:border-verde">
				<div
					onClick={() => {
						window.open(`${link}`, '_blank');
					}}
					className="cursor-pointer w-1/2 bg-gris hover:scale-105 transition-transform origin-top-right p-9 text-center relative right-4 -top-28 z-20 rounded-lg ">
					<h1 className="font-bold text-sm mb-2 text-verde">
						<span className="font-normal text-sm">&#91;</span>&#160;
						{title}&#160;
						<span className="font-normal text-sm">&#93;</span>
					</h1>
					<p className="text-sm">{content}</p>
				</div>
			</div>
		</>
	);
};

export default Proyect;
