import Head from "next/head";
import { PostCard,  Categories, PostWidget} from "../components";
import { getPosts } from "@/services";

export default function Home({posts}) {
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>
        शिक्षा सरोकार
        </title>
        <link rel="icon" href="/ss.jpg">
        </link>
      </Head>
      <div className="grid grid-cols lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
           <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
            </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps () {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}
