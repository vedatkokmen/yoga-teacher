import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Post() {
	const router = useRouter();
	const { id, slug } = router.query;
	return (
		<main className="flex flex-col px-8 py-8 items-center text-center space-y-4">
			<div>
				<h1 className="text-2xl font-bold mb-4 ">
					Blog Post {id}
				</h1>
				<Image
					src="https://source.unsplash.com/random/600x600"
					alt="X"
					height={600}
					width={600}
					className="w-full"
				/>
			</div>
			<div></div>
			<Link href="/blog">
				<a className="border-b-2">Back to blog</a>
			</Link>
		</main>
	);
}

export default Post;
