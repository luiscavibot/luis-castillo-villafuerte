import Image from 'next/image';
import React from 'react';
import awsCertifiedCloudPractitioner from '../public/img/aws-certified-cloud-practitioner.png';
import awsCertifiedDeveloperAssociate from '../public/img/aws-certified-developer-associate.png';

const Certificaciones = () => {
	return (
		<div className="grid-cols-4 grid gap-x-5 ">
			<div className="col-span-4 sm:col-span-1 flex flex-col mb-7 relative z-10">
				<h1 className="font-bold text-sm mb-2 text-verde bg-white/10 py-1 px-2 rounded-md text-center">
					<span className="font-normal text-sm">&#91;</span>
					&nbsp;AWS Certified Cloud Practitioner&nbsp;
					<span className="font-normal text-sm">&#93;</span>
				</h1>
				<ul className="text-sm mt-4 flex justify-center">
					<li className="mb-4 hover:text-verde hover:scale-105 transition-transform">
						<a
							href="https://www.credly.com/badges/1c0318e6-af75-41b9-90fb-002bad76a33c/linked_in_profile"
							target="_blank"
						>
							<Image
								src={awsCertifiedCloudPractitioner}
								width={100}
								height={100}
								alt="Amazon Web Services"
							/>
						</a>
					</li>
				</ul>
			</div>
			<div className="col-span-4 sm:col-span-1 flex flex-col mb-7 relative z-10">
				<h1 className="font-bold text-sm mb-2 text-verde bg-white/10 py-1 px-2 rounded-md text-center">
					<span className="font-normal text-sm">&#91;</span>
					&nbsp;AWS Certified Developer – Associate&nbsp;
					<span className="font-normal text-sm">&#93;</span>
				</h1>
				<ul className="text-sm mt-4 flex justify-center">
					<li className="mb-4 hover:text-verde hover:scale-105 transition-transform">
						<a
							href="https://www.credly.com/badges/d8e6bf7f-812f-49f0-8b51-4436c488595b/linked_in_profile"
							target="_blank"
						>
							<Image
								src={awsCertifiedDeveloperAssociate}
								width={100}
								height={100}
								alt="Amazon Web Services"
							/>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Certificaciones;
