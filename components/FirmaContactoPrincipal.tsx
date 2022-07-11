import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

export default function FirmaContactoPrincipal() {
	return (
		<div className="flex w-full justify-between">
			<div className="basis-1/2 flex gap-4">
				<div className="cursor-pointer">
					<AiFillGithub size="27px" className="fill-claro" />
				</div>
				<div className="cursor-pointer">
					<AiFillLinkedin size="27px" className="fill-claro" />
				</div>
				<div className="cursor-pointer">
					<AiOutlineTwitter size="27px" className="fill-claro" />
				</div>
			</div>
			<div className="basis-1/2 border-b-[1px] border-b-claro/50 w-full flex justify-end">
				lcastillov123@gmail.com
			</div>
		</div>
	);
}
