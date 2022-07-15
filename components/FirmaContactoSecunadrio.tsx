import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

const FirmaContactoSecunadrio = () => {
	return (
		<div className="sticky bottom-0 flex justify-between animate__fadeIn animate__animated">
			<div className="flex flex-col items-center">
				<div className="cursor-pointer mt-4">
					<AiFillGithub size="27px" className="fill-claro" />
				</div>
				<div className="cursor-pointer mt-4">
					<AiFillLinkedin size="27px" className="fill-claro" />
				</div>
				<div className="cursor-pointer mt-4">
					<AiOutlineTwitter size="27px" className="fill-claro" />
				</div>
				<div className="mt-4 w-[1px] h-[200px] bg-claro"></div>
			</div>
			<div className="flex flex-col items-center w-2 justify-center absolute right-0 bottom-0">
				<p className="rotate-90 mb-[90px] cursor-pointer text-white">
					lcastillov123@gmail.com
				</p>
				<div className="w-[1px] h-[200px] bg-claro"></div>
			</div>
		</div>
	);
};

export default FirmaContactoSecunadrio;
