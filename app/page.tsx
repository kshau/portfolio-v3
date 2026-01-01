"use client"

import Landing from "@/components/home/Landing"
import { Navbar } from "@/components/Navbar";
import Starfield from "react-starfield";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import Experience from "@/components/home/Experience";


export default function Home() {


	return (

		<main className="w-full overflow-x-hidden p-2">

			<Starfield
				starCount={1000}
				starColor={[255, 255, 255]}
				speedFactor={0.07}
			/>

			<Navbar/>

			<Landing/>
			<Skills/>
			<Projects/>
			<Experience/>

		</main>
	)

}