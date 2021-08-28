import Head from "next/head";
import {Fragment} from "react";
import AllPosts from "../../components/posts/all-posts";
import {getAllPosts} from "../../lib/posts-util";
function AllPostsPage({posts}) {
  return (
    <Fragment>
      <Head>
        <title>All My Posts</title>
        <meta name="description" content="A page that includes all posts" />
      </Head>
      <AllPosts posts={posts} />;
    </Fragment>
  );
}
export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
    revalidate: 100,
  };
}
export default AllPostsPage;
