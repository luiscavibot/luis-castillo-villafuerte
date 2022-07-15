import React, { FC } from 'react';
import { BiRadioCircleMarked } from 'react-icons/bi';
interface Props {
	title: string;
}

export const SubTtitulo: FC<Props> = ({ title }) => {
	return (
		<>
			<BiRadioCircleMarked
				color="rgba(222, 238, 234, 0.2)"
				className="text-xl "
			/>
			<h1>
				<span className="text-white/50 font-thin text-xl">
					&lt;&#160;
				</span>
				<span className="text-xl text-white font-semibold">
					{title}
				</span>
				<span className="text-white/50 font-thin text-xl">
					&#160;&#47;&gt;
				</span>
			</h1>
		</>
	);
};
