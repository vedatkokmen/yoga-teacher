import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import groq from "groq";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import client from "../../client";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <Image
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value)
            // .width(320)
            // .height(240)
            .fit("max")
            .auto("format")}
          height={240}
          width={320}
        />
      );
    },
    block: {
      // Ex. 1: customizing common block types
      h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
      blockquote: ({ children }) => (
        <blockquote className="border-l-purple-500">{children}</blockquote>
      ),
      p: ({ children }) => <p className="mt-4 font-bold">{children}</p>,

      // Ex. 2: rendering custom styles
      customHeading: ({ children }) => (
        <h2 className="text-lg text-purple-700">{children}</h2>
      ),
    },
    list: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
      number: ({ children }) => <ol className="mt-lg">{children}</ol>,

      // Ex. 2: rendering custom lists
      checkmarks: ({ children }) => (
        <ol className="m-auto text-lg">{children}</ol>
      ),
    },
    listItem: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => (
        <li style={{ listStyleType: "disclosure-closed" }}>{children}</li>
      ),

      // Ex. 2: rendering custom list items
      checkmarks: ({ children }) => <li>? {children}</li>,
    },
    marks: {
      // Ex. 1: custom renderer for the em / italics decorator
      em: ({ children }) => (
        <em className="text-gray-600 font-semibold">{children}</em>
      ),

      // Ex. 2: rendering a custom `link` annotation
      link: ({ value, children }) => {
        const target = (value?.href || "").startsWith("http")
          ? "_blank"
          : undefined;
        return (
          <a
            href={value?.href}
            target={target}
            rel={target === "_blank" && "noindex nofollow"}
          >
            {children}
          </a>
        );
      },
    },
  },
};

const Post = ({ post }) => {
  const {
    title = "Missing title",
    name = "Missing name",
    categories,
    authorImage,
    mainImage,
    keywords,
    body = [],
  } = post;

  return (
    <div className="container flex flex-col px-6 lg:px-40 py-8 items-center space-y-6 mx-auto ">
      <Head>
        <title>{title}</title>
        {keywords && (
          <meta
            name="keywords"
            content={keywords.map((keyword) => keyword).join(", ")}
          />
        )}
        <meta name="description" content={post.description} />
      </Head>
      <article className="">
        <h1 className="text-2xl font-bold text-center">{title}</h1>
        <div className="flex items-center justify-center space-x-2">
          <div className="font-semibold">Author: </div>
          <span className="ml-2 font-semibold text-white badge badge-success gap-2">
            {name}
          </span>
        </div>
        {categories && (
          <div className="text-center font-semibold">
            Category
            {categories.map((category) => (
              <span key={category} className="badge badge-success gap-2 ml-2">
                <span className="text-white"># {category}</span>
              </span>
            ))}
          </div>
        )}
        {mainImage && (
          <div className="flex items-center justify-center my-6">
            <Image
              src={urlFor(mainImage).url()}
              className="duration-400 scale-110 object-cover object-center transition-all hover:scale-100 md:h-36 lg:h-48"
              height={400}
              alt="main image"
              width={400}
            />
          </div>
        )}
        <PortableText
          className="mx-40"
          value={body}
          components={ptComponents}
        />
      </article>
      <Link href="/blog" passHref>
        <div className="flex items-center hover:opacity-80 cursor-pointer">
          <FaChevronLeft className="text-2xl mr-2" />
          <a className="text-center font-semibold">Back to blog</a>
        </div>
      </Link>
    </div>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
	"keywords": keywords[]->keyword,
  "authorImage": author->image,
  body,
	"mainImage": mainImage
}`;
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
}
export default Post;
