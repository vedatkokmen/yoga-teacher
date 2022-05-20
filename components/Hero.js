import Image from "next/image";

function Hero() {
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover w-full relative">
      <Image
        src="/4.jpg"
        className="w-full object-cover"
        layout="fill"
        alt="Yoga"
      />
    </div>
  );
}

export default Hero;
