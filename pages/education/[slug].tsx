import React from "react";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { NAMESPACE_KEY } from "@/src/i18n/i18n";
import EducationBody from "@/src/component/EducationBody/educationBody_component";
import Header from "@/src/component/Header/header_component";

const META_IMG = "/assets/investors/invest-meta-img.jpg";
export default function Slug({ post }) {
  const { t } = useTranslation(NAMESPACE_KEY);
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "";
  return (
    <div>
      <Head>
        <title>
          {post.fields.title}
          {t("meta_title")}
        </title>
        <meta name="title" content={t("meta_title")}></meta>
        <meta name="description" content={t("meta_description")}></meta>
        <link rel="shortcut icon" href="/assets/shared/favicon.ico" />

        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content={baseURL}></meta>
        <meta property="og:title" content={t("meta_title")}></meta>
        <meta property="og:site_name" content={t("meta_title")}></meta>
        <meta property="og:description" content={t("meta_description")}></meta>
        <meta property="og:image" content={META_IMG}></meta>
      </Head>
      <Header />
      <EducationBody
        image={post.fields.image.fields.file.url}
        title={post.fields.title}
        content={post.fields.content.content[0].content[0].value}
        date={post.fields.date}
      />
    </div>
  );
}

export async function getStaticProps(context) {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: "k7xn0y4bai9d",
    accessToken: "ilgns93Xm3N1yxKgpIpZkn1iTi4j86L3n5lWKGfHW4M",
  });

  // Fetch all results where `fields.slug` is equal to the `slug` param
  const result = await client
    .getEntries({
      content_type: "education",
      "fields.slug": context.params.slug,
    })
    .then((response) => response.items);

  // Since `slug` was set to be a unique field, we can be confident that
  // the only result in the query is the correct post.
  const post = result.pop();

  // If nothing was found, return an empty object for props, or else there would
  // be an error when Next tries to serialize an `undefined` value to JSON.
  if (!post) {
    return { props: {} };
  }

  // Return the post as props
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: "k7xn0y4bai9d",
    accessToken: "ilgns93Xm3N1yxKgpIpZkn1iTi4j86L3n5lWKGfHW4M",
  });

  // Query Contentful for all blog posts in the space
  const posts = await client
    .getEntries({ content_type: "education" })
    .then((response) => response.items);

  // Map the result of that query to a list of slugs.
  // This will give Next the list of all blog post pages that need to be
  // rendered at build time.
  const paths = posts.map(({ fields: { slug } }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
