
import Navigation from "@/components/Navigation";
import PostCard from "@/components/PostCard";
import PostFormCard from "@/components/PostFormCard";

export default function Home() {
  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-6">
      <div className="w-1/3">
        <Navigation></Navigation>
      </div>
      <div className="grow">
        <PostFormCard>Form here</PostFormCard>
        <PostCard></PostCard>
      </div>
    </div>
  );
}
