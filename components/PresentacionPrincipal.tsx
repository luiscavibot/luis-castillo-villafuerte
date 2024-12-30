import React from 'react';
import Typical from 'react-typical';

export default function PresentacionPrincipal() {
	return (
		<>
			<p className="text-verde text-xl font-medium">Hola, mi nombre es</p>
			<h1 className="text-naranja mt-2 text-3xl sm:text-4xl md:text-5xl">
				{/* Envuelve Typical en un span y aplica la clase */}
				<span className="inline-block cursor-typical">
					<Typical
						steps={[
							'< Luis',
							1000,
							'< Luis Castillo ',
							800,
							'< Luis Castillo />',
							1000,
							'< Luis Castillo V. ',
							500,
							'< Luis Castillo V. />',
						]}
						wrapper="span"
					/>
				</span>
			</h1>
			<h2 className="text-lg mt-2">
				y soy un <span className="text-2xl">Full stack developer </span>{' '}
				con experiencia en <span className="text-2xl"> DevOps </span> y
				tecnologías de
				<span className="text-2xl"> Amazon Web Services </span> &#40;+6
				años&#41;.
			</h2>
			<p className="text-verde mt-14 font-semibold">
				Me apasiona construir aplicaciones web de principio a fin. He
				tenido la oportunidad de trabajar en la{' '}
				<span
					className="text-claro hover:underline"
					// onClick={() => {
					// 	window.open('https://unmsm.edu.pe/', '_blank');
					// }}
				>
					universidad más antigua de América
				</span>
				&nbsp; y en una de las empresas de&nbsp;
				<span
					className="text-claro hover:underline"
					// onClick={() => {
					// 	window.open('https://cencosud.com/', '_blank');
					// }}
				>
					ecommerce más grandes de América Latina
				</span>
				, lo que me ha permitido adquirir experiencia valiosa en
				proyectos de alto impacto y gran escala.
			</p>
			<button
				onClick={() => {
					window.open('/pdf/cv-luis-castillo.pdf', '_blank');
				}}
				className="border-2 cursor-pointer bg-white/10 hover:bg-white/25 mt-14 rounded-lg px-4 py-2"
			>
				Descargar resumen
			</button>
		</>
	);
}
