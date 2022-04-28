import imageUrlBuilder from "@sanity/image-url";
import groq from "groq";
import Head from "next/head";
import Image from "next/image";
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
			<h1 className="text-4xl font-bold text-center my-8">
				Blog
			</h1>
			<section className="body-font text-gray-600">
				<div className="container mx-auto px-5 py-16">
					<div className="-m-4 flex flex-wrap">
						{posts.length > 0 &&
							posts.map(
								({
									_id,
									title = "",
									slug = "",
									publishedAt = "",
									mainImage = "",
									description = "",
									categories,
								}) =>
									slug && (
										<div
											key={_id}
											className="p-4 md:w-1/2 lg:w-1/3"
										>
											<div className="shadow-cla-pink h-full overflow-hidden rounded-xl bg-gradient-to-r from-fuchsia-50 to-pink-50">
												<Link
													passHref
													href="/blog/[slug]"
													as={`/blog/${slug.current}`}
												>
													<div className="cursor-pointer flex flex-col space-y-2 ">
														<Image
															src={urlFor(mainImage).url()}
															className="duration-400 w-full scale-110 object-cover object-center transition-all hover:scale-100 md:h-36 lg:h-48"
															alt={title}
															width={400}
															height={400}
														/>
														<div className="p-6">
															<h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
																{/* Categories:{" "}
																{categories.map(
																	(category) =>
																		category.title
																)} */}
															</h2>
															<p className="text-xs mb-1 text-gray-300">
																{new Date(
																	publishedAt
																).toDateString()}
															</p>
															<h1 className="title-font mb-3 text-lg font-medium text-gray-600">
																{title}
															</h1>
															<p className="mb-3 leading-relaxed">
																{description}
															</p>

															<div className="flex flex-wrap items-center">
																<button className="shadow-cla-violate rounded-lg bg-gradient-to-r from-orange-300 to-amber-400 px-4 py-1 drop-shadow-md hover:scale-105">
																	Learn more
																</button>
															</div>
														</div>
													</div>
												</Link>
											</div>
										</div>
									)
							)}
					</div>
				</div>
			</section>
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
