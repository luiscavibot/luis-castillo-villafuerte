import type { NextPage } from 'next';
import Head from 'next/head';
import AnimacionAtomica from '../components/AnimacionAtomica';
import FirmaContactoPrincipal from '../components/FirmaContactoPrincipal';
import MenuPrincipal from '../components/MenuPrincipal';
import PresentacionPrincipal from '../components/PresentacionPrincipal';
import { SubTtitulo } from '../components/SubTtitulo';
import { AcercaDeMi } from '../components/AcercaDeMi';
import { FotoPersonal } from '../components/FotoPersonal';
import { useEffect, useRef, useState } from 'react';
import FirmaContactoSecunadrio from '../components/FirmaContactoSecunadrio';
import ExperienciaLaboral from '../components/ExperienciaLaboral';
import Image from 'next/image';
import circuferenciaCocentrica1 from '../public/img/circuferencia-cocentrica-1.png';
import awsCertifiedCloudPractitioner from '../public/img/aws-certified-cloud-practitioner.png';
import PortfolioContent from '../components/PortfolioContent';
import OtrosProyectos from '../components/OtrosProyectos';
import Skills from '../components/Skills';
import 'animate.css';
import Certificaciones from '../components/Certificaciones';

const Home: NextPage = () => {
	const certificacionesDivRef = useRef<HTMLDivElement>(null);
	const presentacionDivRef = useRef<HTMLDivElement>(null);
	const [showFirma, setShowFirma] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			const div = skillsRef.current;
			const { y } = div?.getBoundingClientRect()!;
			if (y < 700) {
				setShowFirma(true);
			} else {
				setShowFirma(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const acercaDeMiRef = useRef<HTMLDivElement>(null);
	const goToAcercaDeMi = () => {
		if (acercaDeMiRef.current) {
			acercaDeMiRef.current!.scrollIntoView({ behavior: 'smooth' });
		}
	};
	const experienciaMiRef = useRef<HTMLDivElement>(null);
	const goToExperiencia = () => {
		if (experienciaMiRef.current) {
			experienciaMiRef.current!.scrollIntoView({ behavior: 'smooth' });
		}
	};
	const portafolioRef = useRef<HTMLDivElement>(null);
	const goToPortafolio = () => {
		if (portafolioRef.current) {
			portafolioRef.current!.scrollIntoView({ behavior: 'smooth' });
		}
	};
	const skillsRef = useRef<HTMLDivElement>(null);
	const goToSkills = () => {
		if (skillsRef.current) {
			skillsRef.current!.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div>
			<Head>
				<title>Luis Castillo | Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="gradient-background text-claro font-roboto">
				<div className="container relative mx-auto px-12">
					<div className="h-screen relative flex items-center">
						<div className="hidden xl:flex justify-end items-center absolute z-10 top-0 inset-x-0 animate__fadeIn animate__animated animate__delay-2s mt-5">
							<MenuPrincipal
								goTos={{
									goToExperiencia,
									goToPortafolio,
									goToSkills,
									goToAcercaDeMi,
								}}
							/>
						</div>
						<div className="flex w-full gap-2">
							<div className="basis-full lg:basis-1/2 animate__animated animate__zoomIn">
								<PresentacionPrincipal />
							</div>
							<div className="hidden lg:flex basis-1/2  justify-center animate__animated animate__rotateIn">
								<AnimacionAtomica />
							</div>
						</div>
						{!showFirma && (
							<div className="hidden md:block absolute w-full bottom-0 pb-9 animate__fadeIn animate__animated">
								<FirmaContactoPrincipal />
							</div>
						)}
					</div>
					<div
						ref={certificacionesDivRef}
						className="pt-28 grid grid-cols-12 relative z-10"
						id="Certificaciones"
					>
						<div className="flex items-center col-start-1 sm:col-start-3 col-span-full">
							<SubTtitulo title="Certificaciones" />
						</div>
						<div className="col-start-1 sm:col-start-3 col-span-full sm:col-span-8 mt-14">
							<Certificaciones />
						</div>
					</div>
					<div
						ref={skillsRef}
						className="pt-28 grid grid-cols-12 relative z-10"
						id="skills"
					>
						<Image
							alt="circuferencia-cocentrica-1"
							src={circuferenciaCocentrica1}
							className="absolute right-0 top-0"
						/>
						<div className="flex items-center col-start-1 sm:col-start-3 col-span-full">
							<SubTtitulo title="Skills" />
						</div>
						<div className="col-start-1 sm:col-start-3 col-span-full sm:col-span-8 mt-14">
							<Skills />
						</div>
					</div>
					<div
						ref={portafolioRef}
						className="pt-28 grid grid-cols-12 gap-x-3 gap-y-0 relative z-10"
						id="portafolio"
					>
						<Image
							alt="circuferencia-cocentrica-1"
							src={circuferenciaCocentrica1}
							className="absolute right-0 top-0"
						/>
						<div className="mb-24 flex items-center col-start-1 sm:col-start-3 col-span-full">
							<SubTtitulo title="Portafolio" />
						</div>
						<PortfolioContent />
						<div className="mb-16 flex flex-col items-center justify-center col-start-3 col-span-8">
							<OtrosProyectos />
						</div>
					</div>
					<div
						className="pt-28 grid grid-cols-12 gap-5 relative z-10"
						ref={experienciaMiRef}
					>
						<ExperienciaLaboral />
					</div>
					<div
						className="pt-28 grid grid-cols-12 gap-5 relative z-10"
						ref={acercaDeMiRef}
					>
						<div className="flex items-center col-start-3 col-span-full">
							<SubTtitulo title="Acerca de mí" />
						</div>
						<div
							className="col-start-3 col-span-4 text-sm"
							ref={presentacionDivRef}
						>
							<AcercaDeMi />
						</div>
						<div className="col-start-8 col-span-3">
							<FotoPersonal />
						</div>
					</div>

					<div className="pt-60 grid grid-cols-12 relative z-10">
						<div className="flex flex-col items-center justify-center col-start-3 col-span-8 mb-6">
							<p className="text-verde text-2xl font-bold">
								¡Gracias por tu visita!
							</p>
							<p className="text-xs font-thin mt-4">
								Diseñado &amp; desarrollado por Luis Castillo en
								Lima, Perú.
							</p>
						</div>
					</div>
					{showFirma && <FirmaContactoSecunadrio />}
				</div>
			</main>
		</div>
	);
};

export default Home;
