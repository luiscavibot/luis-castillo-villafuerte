import React, { FC } from 'react';
interface Props {
	goTos: GoTos;
}
interface GoTos {
	goToAcercaDeMi: () => void;
	goToExperiencia: () => void;
	goToPortafolio: () => void;
	goToSkills: () => void;
}

const MenuPrincipal: FC<Props> = ({ goTos }) => {
	return (
		<div className="flex justify-end">
			<ul className="text-white flex gap-16 col-auto font-bold text-lg">
				<li
					onClick={goTos.goToAcercaDeMi}
					className="cursor-pointer hover:text-verde transition-colors">
					Acercar de mí
				</li>
				<li
					className="cursor-pointer hover:text-verde transition-colors"
					onClick={goTos.goToExperiencia}>
					Experiencia
				</li>
				<li
					onClick={goTos.goToPortafolio}
					className="cursor-pointer hover:text-verde transition-colors">
					Portafolio
				</li>
				<li
					onClick={goTos.goToSkills}
					className="cursor-pointer hover:text-verde transition-colors">
					Skills
				</li>
			</ul>
		</div>
	);
};

export default MenuPrincipal;
