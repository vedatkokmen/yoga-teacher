import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Drawer = ({ isOpen, setIsOpen }) => {
	return (
		isOpen && (
			<div
				className="min-h-screen min-w-full bg-black absolute z-10 "
				style={{}}
			>
				<div className="flex flex-col space-y-6 items-center justify-center mt-8 ">
					<Link href="/">
						<a
							className="text-white text-xl hover:border-b-4"
							onClick={() => setIsOpen(!isOpen)}
						>
							Home
						</a>
					</Link>
					<Link href="/blog">
						<a
							className="text-white text-xl hover:border-b-4"
							onClick={() => setIsOpen(!isOpen)}
						>
							Blog
						</a>
					</Link>
					<Link href="/about">
						<a
							className="text-white text-xl hover:border-b-4"
							onClick={() => setIsOpen(!isOpen)}
						>
							About
						</a>
					</Link>
				</div>
			</div>
		)
	);
};

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className="container flex justify-between items-center mx-auto py-4 px-10 relative border-b-2">
				<div className="text-2xl tracking-widest font-bold ">
					<Link href="/">
						<a href="#">TYAS GODDESS</a>
					</Link>
				</div>
				<div className="hidden md:flex space-x-6">
					<Link href="/">
						<a className=" hover:text-blue-400 font-mono hover:border-b-2">
							Home
						</a>
					</Link>
					<Link href="/blog">
						<a className="hover:text-blue-400 font-mono hover:border-b-2">
							Blog
						</a>
					</Link>
					<Link href="/about">
						<a className="hover:text-blue-400 font-mono hover:border-b-2">
							About
						</a>
					</Link>
				</div>
				<div className="md:hidden ">
					{isOpen ? (
						<MdClose
							className="w-6 h-6 cursor-pointer"
							onClick={() => setIsOpen(false)}
						/>
					) : (
						<GiHamburgerMenu
							className="w-6 h-6 cursor-pointer"
							onClick={() => setIsOpen(true)}
						/>
					)}
				</div>
			</div>
			{<Drawer isOpen={isOpen} setIsOpen={setIsOpen} />}
		</>
	);
}

export default Header;
