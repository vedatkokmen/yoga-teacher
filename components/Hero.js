import Image from "next/image";

function Hero() {
	return (
		<div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover w-full">
			<Image
				src="/yoga.jpg"
				className="w-full h-screen object-cover"
				height={900}
				width={900}
				alt="Yoga"
			/>
		</div>
	);
}

export default Hero;
