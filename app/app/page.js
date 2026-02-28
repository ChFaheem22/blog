import Link from "next/link";
import Image from "next/image";
import blogPosts from "./data/post";

export default function HomePage() {

  return (
    <div className="homepage">
      <section className="bio-section">
        <div className="bio-content">
          <h1>Welcome to Faheem Blogs</h1>
          <p>Read articles, learn something new, and stay updated.</p>
        </div>
      </section>

      
      <div className="grid">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blogs/${post.slug}`} className="card">
            <div>
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={200}
                className="thumbnail"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
              />

              <h3>{post.title}</h3> 
              <p>{post.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
