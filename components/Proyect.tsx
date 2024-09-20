import React, { FC, useId } from 'react';
import CardProyecto from '../components/CardProyecto';
import { StaticImageData } from 'next/dist/shared/lib/get-img-props';

interface Props {
	data: Information;
}
interface Information {
	id: string;
	tools: Tools[];
	content: string;
	title: string;
	image: StaticImageData;
	link: string;
}

interface Tools {
	area: string;
	tecnologies: string[];
}

const Proyect: FC<Props> = ({ data }) => {
	const { tools, content, title, image, link } = data;
	return (
		<>
			<div className="col-start-3 col-span-4">
				<CardProyecto src={image} link={link} title={title} />
			</div>
			<div className="col-span-4 flex text-sm">
				<div
					onClick={() => {
						window.open(`${link}`, '_blank');
					}}
					className="cursor-pointer bg-gris hover:scale-105 transition-transform p-9 text-center relative z-20 rounded-lg "
				>
					<h1 className="font-bold text-sm mb-2 text-verde">
						<span className="font-normal text-sm">&#91;</span>&#160;
						{title}&#160;
						<span className="font-normal text-sm">&#93;</span>
					</h1>
					<p className="text-sm">{content}</p>
				</div>
			</div>
			<div className="flex flex-wrap gap-x-4 gap-y-2 text-xs col-start-3 col-span-8 outline outline-2 rounded-md outline-transparencia mb-12 mt-2 p-3">
				<div className="flex items-baseline gap-1">
					<ul className="flex flex-wrap items-center gap-2">
						<li className="font-bold">{data.tools[0].area}: </li>
						{data.tools[0].tecnologies.map((tool) => (
							<li
								className="flex-none py-1 rounded-lg px-2 bg-transparencia"
								key={data.id + data.title}
							>
								{tool}
							</li>
						))}
					</ul>
				</div>
				<div className="flex items-baseline gap-1">
					<ul className="flex flex-wrap items-center gap-2">
						<li className="font-bold">{data.tools[1].area}: </li>
						{data.tools[1].tecnologies.map((tool) => (
							<li
								className="flex-none py-1 rounded-lg px-2 bg-transparencia"
								key={data.id + data.title}
							>
								{tool}
							</li>
						))}
					</ul>
				</div>
				<div className="flex items-baseline gap-1">
					<ul className="flex flex-wrap items-center gap-2">
						<li className="font-bold">{data.tools[2].area}: </li>
						{data.tools[2].tecnologies.map((tool) => (
							<li
								className="flex-none py-1 rounded-lg px-2 bg-transparencia"
								key={data.id + data.title}
							>
								{tool}
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Proyect;
