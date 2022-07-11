import type { NextPage } from 'next';
import Head from 'next/head';
import AnimacionAtomica from '../components/AnimacionAtomica';
import FirmaContactoPrincipal from '../components/FirmaContactoPrincipal';
import MenuPrincipal from '../components/MenuPrincipal';
import PresentacionPrincipal from '../components/PresentacionPrincipal';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Luis Castillo | Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="bg-fondoOscuro text-claro">
				<div className="container mx-auto px-12">
					<div className="h-screen w-full relative flex items-center">
						<div className="absolute z-10 top-0 right-0">
							<MenuPrincipal />
						</div>
						<div className="flex w-full">
							<div className="basis-1/2">
								<PresentacionPrincipal />
							</div>
							<div className="basis-1/2 flex justify-center">
								<AnimacionAtomica />
							</div>
						</div>
						<div className="absolute w-full bottom-0 pb-9">
							<FirmaContactoPrincipal />
						</div>
					</div>
				</div>
			</main>

			<footer className=""></footer>
		</div>
	);
};

export default Home;
