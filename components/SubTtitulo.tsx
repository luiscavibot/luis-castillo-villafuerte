import React, { FC } from 'react';
import { BiRadioCircleMarked } from 'react-icons/bi';
interface Props {
	title: string;
}

export const SubTtitulo: FC<Props> = ({ title }) => {
	return (
		<>
			<BiRadioCircleMarked color="rgb(166 76 56)" className="text-xl " />
			<h1>
				<span className="text-naranja/50 font-thin text-3xl">
					&lt;&#160;
				</span>
				<span className="text-3xl text-naranja font-semibold">
					{title}
				</span>
				<span className="text-naranja/50 font-thin text-3xl">
					&#160;&#47;&gt;
				</span>
			</h1>
		</>
	);
};
