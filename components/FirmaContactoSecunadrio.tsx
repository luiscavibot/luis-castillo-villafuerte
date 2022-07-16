import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const FirmaContactoSecunadrio = () => {
	return (
		<div className="fixed inset-x-0 bottom-0">
			<div className="grid grid-cols-12 animate__fadeIn animate__animated">
				<div className="flex flex-col items-end justify-end col-start-1 col-span-1">
					<div className="flex flex-col justify-center items-center relative -right-3">
						<div>
							<div
								className="cursor-pointer mt-4"
								onClick={() => {
									window.open(
										'https://github.com/luiscavibot',
										'_blank'
									);
								}}>
								<AiFillGithub
									size="27px"
									className="fill-claro hover:fill-verde"
								/>
							</div>
							<div
								className="cursor-pointer mt-4"
								onClick={() => {
									window.open(
										'https://www.linkedin.com/in/luiscavibot/',
										'_blank'
									);
								}}>
								<AiFillLinkedin
									size="27px"
									className="fill-claro hover:fill-verde"
								/>
							</div>
							<div
								className="cursor-pointer mt-4"
								onClick={() => {
									window.open(
										'https://twitter.com/luiscavibot',
										'_blank'
									);
								}}>
								<AiOutlineTwitter
									size="27px"
									className="fill-claro hover:fill-verde"
								/>
							</div>
						</div>
						<div className="mt-4 w-[1px] h-[200px] bg-claro"></div>
					</div>
				</div>
				<div className="flex items-center w-2 justify-between col-start-12 col-span-1">
					<div className="realtive flex flex-col items-center justify-center">
						<p
							className="cursor-pointer hover:text-verde transition-colors text-white mb-4"
							style={{ writingMode: 'vertical-rl' }}
							onClick={() => {
								window.open(
									'mailto:lcastillov123@gmail.com',
									'_blank'
								);
							}}>
							lcastillov123@gmail.com
						</p>
						<div className="w-[1px] h-[200px] bg-claro"></div>
						<BsFillArrowUpCircleFill
							onClick={() => {
								window.scrollTo(0, 0);
							}}
							size={'2rem'}
							className="absolute right-8 fill-white/50 cursor-pointer hover:scale-125 hover:fill-verde transition-transform bounce-arrow"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FirmaContactoSecunadrio;
