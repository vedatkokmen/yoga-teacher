import imageUrlBuilder from "@sanity/image-url";
import groq from "groq";
import Head from "next/head";
import Link from "next/link";
import client from "../../client";
function urlFor(source) {
	return imageUrlBuilder(client).image(source);
}

const Index = ({ posts }) => {
	return (
		<>
			<Head>
				<title>Tyas Goddess | Blog</title>
			</Head>
			<h1 className="text-4xl font-bold text-center mt-16">
				Blog
			</h1>
			<div className="grid overflow-hidden grid-cols-1 md:grid-cols-2 lg:mx-20 grid-rows-2 gap-4 mx-4 my-16">
				{posts.length > 0 &&
					posts.map(
						({
							_id,
							title = "",
							slug = "",
							publishedAt = "",
							mainImage = "",
							description = "",
						}) =>
							slug && (
								<div
									key={_id}
									className="col-span-1 row-span-1 mb-8 lg:mx-16 text-center border-2 p-2 "
								>
									<Link
										href="/blog/[slug]"
										as={`/blog/${slug.current}`}
									>
										<div className="cursor-pointer flex flex-col space-y-2 ">
											<img
												src={urlFor(mainImage).url()}
												className="w-full h-96 object-fill"
											/>
											<a className="font-semibold text-xl">
												{title}
											</a>
											<div className="text-sm">
												{description}
											</div>
											<div className="text-xs">
												{new Date(
													publishedAt
												).toDateString()}
											</div>
										</div>
									</Link>
								</div>
							)
					)}
			</div>
		</>
	);
};

export async function getStaticProps() {
	const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
    `);
	return {
		props: {
			posts,
		},
	};
}

export default Index;
