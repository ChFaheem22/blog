import blogPosts from "@/app/data/post";
import Image from "next/image";

export default function BlogDetailPage({ params }) {
  const { slug } = params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="not-found">
        <h1>404 - Blog Not Found</h1>
        <p>The blog you’re looking for doesn’t exist.</p>
      </div>
    );
  }

  return (
    <article className="blog-article">
      <header className="blog-header">
        <h1 className="blog-title">{post.title}</h1>
        <div className="blog-meta">
          <span>{post.author}</span> | <span>{post.date}</span> |{" "}
          <span>{post.category}</span>
        </div>
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="blog-image"
        />
      </header>

      <section className="blog-content">
        {post.content.split("\n").map((paragraph, index) => (
          <p key={index}>{paragraph.trim()}</p>
        ))}
      </section>
    </article>
  );
}
