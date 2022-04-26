import React from "react";

function Drawer() {
	return (
		<div className="min-h-screen min-w-full bg-black">
			<div className="flex flex-col">
				<ul>
					<li>Home</li>
					<li>Blog</li>
					<li>About</li>
				</ul>
			</div>
		</div>
	);
}

export default Drawer;
