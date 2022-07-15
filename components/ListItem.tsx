import React, { FC } from 'react';
import { BsArrowReturnRight } from 'react-icons/bs';
interface Props {
	text: string;
}

const ListItem: FC<Props> = ({ text }) => {
	return (
		<div className="flex justify-start items-center gap-2 mb-4">
			<BsArrowReturnRight
				color="rgb(222 238 234 / 0.7)"
				className="w-[6%]"
			/>
			<p className="w-[94%]">{text}</p>
		</div>
	);
};

export default ListItem;
