import React from 'react';

export default function PresentacionPrincipal() {
	return (
		<>
			<p className="text-verde text-xl font-medium">Hola, mi nombre es</p>
			<h1 className="text-white mt-2 text-5xl">
				<span className="text-white/50 font-thin text-4xl">
					&lt;&#160;
				</span>
				Luis Castillo V.
				<span className="text-white/50 font-thin text-4xl">
					&#160;&#47;&gt;
				</span>
			</h1>
			<h2 className="text-3xl mt-2">y soy un Full stack developer.</h2>
			<p className="text-verde mt-14 font-semibold">
				Disfruto construir aplicaciones web extraordinarias y tengo la
				oportunidad de trabajar en la{' '}
				<span
					className="text-claro cursor-pointer hover:underline"
					onClick={() => {
						window.open('https://unmsm.edu.pe/', '_blank');
					}}>
					universidad más antigua de América
				</span>
				, donde lidero un equipo de TI que crea productos digitales
				increíbles.
			</p>
			<button
				onClick={() => {
					window.open(
						'/pdf/Curriculum_Vitae_2022-07-04_compressed.pdf',
						'_blank'
					);
				}}
				className="border-2 cursor-pointer bg-white/10 hover:bg-white/25 mt-14 rounded-lg px-4 py-2">
				Resumen
			</button>
		</>
	);
}
