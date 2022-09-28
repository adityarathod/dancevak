/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Dancevak.app</title>
			</Head>
			<motion.img
				src="/dancevak.png"
				alt=""
				style={{
					display: "block",
					position: "absolute",
					height: "90%",
				}}
				initial={{
					left: 0,
					bottom: -10,
				}}
				animate={{
					left: "70vw",
					bottom: -20,
				}}
				transition={{ duration: 0.5, yoyo: Infinity, ease: "linear" }}
			/>
		</div>
	);
};

export default Home;
