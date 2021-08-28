import Head from "next/head";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import {Fragment} from "react";
import {getFeaturedPosts} from "../lib/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Chris' Blog</title>
        <meta
          name="description"
          content="Environmental scientist with chemistry and coding knowledge "
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />;
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 100,
  };
}
export default HomePage;
