import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "../../data/blogposts";
import Navbar from "../../components/Navbar";
import CommentSection from "@/app/components/comment";

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post) => post.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <article className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="relative h-64 md:h-96">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          </div>
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {post.title}
            </h1>
            <p className="text-gray-400 mb-6 text-lg">{post.description}</p>
            <div className="prose prose-invert max-w-none">{post.content}</div>
          </div>
        </article>
        <CommentSection postId={post.id} />
      </main>
    </div>
  );
}
