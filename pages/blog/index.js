import Image from "next/image";
import Link from "next/link";
const posts = [
	{
		id: 1,
		title: "Yoga Pose of the Week",
		slug: "blog-post-1",
		desc: "This weeks yoga pose of the week is: Standing Bow pose. The secrets to success with this yoga pose are a strong foundation and a balance of force.",
	},
	{
		id: 2,
		title: "Blog Post 2",
		slug: "blog-post-2",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		id: 3,
		title: "Blog Post 3",
		slug: "blog-post-3",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
];

function Blog() {
	return (
		<>
			<div className="grid overflow-hidden grid-cols-1 lg:grid-cols-2 lg:mx-16 grid-rows-2 gap-6 mx-4 my-16">
				{posts.map((post) => (
					<div
						key={post.id}
						className="col-span-1 row-span-1 mb-8 lg:mx-16 text-center"
					>
						<Link
							href={`/blog/${encodeURIComponent(
								post.slug
							)}`}
						>
							<div className="flex flex-col">
								<Image
									src="https://source.unsplash.com/random/400x400"
									className="w-full hover:opacity-95 cursor-pointer mb-2"
									height={400}
									width={400}
									alt={post.title}
								/>
								<a className="mt-2 text-xl font-semibold">
									{post.title}
								</a>
								<p className="mt-2 text-sm">{post.desc}</p>
							</div>
						</Link>
					</div>
				))}
			</div>
		</>
	);
}

export default Blog;
