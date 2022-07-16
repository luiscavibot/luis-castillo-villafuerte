import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

export default function FirmaContactoPrincipal() {
	return (
		<div className="flex w-full justify-between">
			<div className="basis-1/2 flex gap-4">
				<div
					className="cursor-pointer"
					onClick={() => {
						window.open('https://github.com/luiscavibot', '_blank');
					}}>
					<AiFillGithub
						size="27px"
						className="fill-claro hover:fill-verde transition-colors"
					/>
				</div>
				<div
					className="cursor-pointer"
					onClick={() => {
						window.open(
							'https://www.linkedin.com/in/luiscavibot/',
							'_blank'
						);
					}}>
					<AiFillLinkedin
						size="27px"
						className="fill-claro hover:fill-verde transition-colors"
					/>
				</div>
				<div
					className="cursor-pointer"
					onClick={() => {
						window.open(
							'https://twitter.com/luiscavibot',
							'_blank'
						);
					}}>
					<AiOutlineTwitter
						size="27px"
						className="fill-claro hover:fill-verde transition-colors"
					/>
				</div>
			</div>
			<div
				onClick={() => {
					window.open('mailto:lcastillov123@gmail.com', '_blank');
				}}
				className="basis-1/2 border-b-[1px] border-b-claro/50 w-full flex justify-end cursor-pointer hover:text-verde transition-colors">
				lcastillov123@gmail.com
			</div>
		</div>
	);
}
