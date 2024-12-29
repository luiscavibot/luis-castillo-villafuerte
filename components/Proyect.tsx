import React, { FC, useId } from 'react';
import CardProyecto from '../components/CardProyecto';
import { StaticImageData } from 'next/dist/shared/lib/get-img-props';

interface Props {
	data: Information;
}
interface Information {
	tools: Tools[];
	content: string;
	title: string;
	image: StaticImageData;
	rol?: string;
}

interface Tools {
	area: string;
	tecnologies: string[];
}

const Proyect: FC<Props> = ({ data }) => {
	const { tools, content, title, image, rol } = data;
	return (
		<>
			<div className="col-start-1 sm:col-start-3 col-span-full sm:col-span-4">
				<CardProyecto src={image} title={title} />
			</div>
			<div className="col-span-full sm:col-span-4 flex text-sm">
				<div className=" bg-white/5 transition-transform p-9 text-center relative z-20 rounded-lg ">
					<h1 className="font-bold text-sm mb-2 text-verde">
						<span className="font-normal text-sm"></span>&#160;
						{title}&#160;
						{rol && (
							<p className="font-normal text-sm text-claro">
								&#40; Participación: {rol} &#41;
							</p>
						)}
					</h1>
					<p className="text-sm">{content}</p>
				</div>
			</div>
			<div className="flex flex-wrap gap-x-4 gap-y-2 text-xs col-start-1 sm:col-start-3 col-span-full sm:col-span-8 outline outline-2 rounded-md outline-transparencia mb-12 mt-2 p-3">
				<div className="flex items-baseline gap-1">
					<ul className="flex flex-wrap items-center gap-2">
						<li className="font-bold">{data.tools[0].area}: </li>
						{data.tools[0].tecnologies.map((tool, index) => (
							<li
								className="flex-none py-1 rounded-lg px-2 bg-transparencia"
								key={index + data.title}
							>
								{tool}
							</li>
						))}
					</ul>
				</div>
				<div className="flex items-baseline gap-1">
					<ul className="flex flex-wrap items-center gap-2">
						<li className="font-bold">{data.tools[1].area}: </li>
						{data.tools[1].tecnologies.map((tool, index) => (
							<li
								className="flex-none py-1 rounded-lg px-2 bg-transparencia"
								key={index + data.title}
							>
								{tool}
							</li>
						))}
					</ul>
				</div>
				<div className="flex items-baseline gap-1">
					<ul className="flex flex-wrap items-center gap-2">
						<li className="font-bold">{data.tools[2].area}: </li>
						{data.tools[2].tecnologies.map((tool, index) => (
							<li
								className="flex-none py-1 rounded-lg px-2 bg-transparencia"
								key={index + data.title}
							>
								{tool}
							</li>
						))}
					</ul>
				</div>
				{data.tools[3]?.area && (
					<div className="flex items-baseline gap-1">
						<ul className="flex flex-wrap items-center gap-2">
							<li className="font-bold">
								{data.tools[3].area}:{' '}
							</li>
							{data.tools[3].tecnologies.map((tool, index) => (
								<li
									className="flex-none py-1 rounded-lg px-2 bg-transparencia"
									key={index + data.title}
								>
									{tool}
								</li>
							))}
						</ul>
					</div>
				)}
				{data.tools[4]?.area && (
					<div className="flex items-baseline gap-1">
						<ul className="flex flex-wrap items-center gap-2">
							<li className="font-bold">
								{data.tools[4].area}:{' '}
							</li>
							{data.tools[4].tecnologies.map((tool, index) => (
								<li
									className="flex-none py-1 rounded-lg px-2 bg-transparencia"
									key={index + data.title}
								>
									{tool}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</>
	);
};

export default Proyect;
