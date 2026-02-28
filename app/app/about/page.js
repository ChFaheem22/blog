import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="intro-section">
        <div className="intro-content">
          <h1>About Faheem Blogs</h1>
          <p>
            Welcome to Faheem Blogs, a space where I share articles on topics I’m passionate about,
            from tech insights to lifestyle tips and everything in between.
          </p>
        </div>
      </section>

      <section className="bio-details">
        <div className="bio-image">
          <Image
            src="/cropped.png"
            alt="Faheem"
            width={180}
            height={180}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="bio-text">
          <h2>Hi, I&lsquo;m Faheem </h2>
          <p>
            I’m a curious mind, tech enthusiast, and lifelong learner who loves writing and building
            useful content. This blog started as a personal journal and has grown into a platform
            to share knowledge, ideas, and personal growth stories.
          </p>
          <p>
            When I&lsquo;m not blogging, you’ll find me exploring new technologies, reading, or experimenting
            with side projects.
          </p>
        </div>
      </section>

      <section className="blog-purpose">
        <h2>What You&lsquo;ll Find Here</h2>
        <ul>
          <li> Thoughtful blog posts and tutorials</li>
          <li> Tech and coding tips</li>
          <li> Productivity and mindset content</li>
        </ul>
      </section>

      <section className="connected">
        <h3>Let’s Stay Connected</h3>
        <p>
          Have questions or want to collaborate? Head over to 
          the <a href="/contact" className="contact-link"><strong>Contact page</strong></a> and drop a message.
        </p>
        <p style={{ marginTop: "1rem" }}>
          Or feel free to email directly at:{" "}
          <a href="mailto:faheem@example.com" className="email-link"><strong>faheem779@gmail.com</strong></a>
        </p>
      </section>
    </div>
  );
}
