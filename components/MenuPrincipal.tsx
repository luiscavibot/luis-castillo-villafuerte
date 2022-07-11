import React from 'react';

export default function MenuPrincipal() {
	return (
		<div className="flex justify-end">
			<ul className="text-white flex gap-16 pt-14 col-auto font-bold text-lg">
				<li className="cursor-pointer hover:text-verde">
					Acercar de mí
				</li>
				<li className="cursor-pointer hover:text-verde">Experiencia</li>
				<li className="cursor-pointer hover:text-verde">Portafolio</li>
				<li className="cursor-pointer hover:text-verde">Skills</li>
			</ul>
		</div>
	);
}
