
import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";
import PostCard from "@/components/PostCard";
import PostFormCard from "@/components/PostFormCard";

export default function Home() {
  return (
    <Layout>
      <PostFormCard>Form here</PostFormCard>
      <PostCard></PostCard>
    </Layout>
  );
}
