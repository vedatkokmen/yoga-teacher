import Link from "next/link";
import React from "react";
import {
	FaFacebook,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";

function Footer() {
	return (
		<footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
			<div className="grid grid-flow-col gap-4">
				<Link href="/">
					<a className="link link-hover">Home</a>
				</Link>
				<Link href="/blog">
					<a className="link link-hover">Blog</a>
				</Link>
				<Link href="/about">
					<a className="link link-hover">About</a>
				</Link>
			</div>
			<div>
				<div className="grid grid-flow-col gap-4">
					<Link href="#" passHref>
						<a>
							<FaFacebook className="link w-6 h-6 hover:opacity-70" />
						</a>
					</Link>
					<Link href="#" passHref>
						<a>
							<FaYoutube className="link w-6 h-6 hover:opacity-70" />
						</a>
					</Link>
					<Link href="#" passHref>
						<a>
							<FaTwitter className="link w-6 h-6 hover:opacity-70" />
						</a>
					</Link>
				</div>
			</div>
			<div>
				<p>
					Copyright 2022 - All right reserved by ACME
					Industries Ltd
				</p>
			</div>
		</footer>
	);
}

export default Footer;
