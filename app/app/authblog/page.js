"use client";
import { useState } from "react";
import Image from "next/image";

export default function AuthBlog() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    image: null,
  });

  const [previewURL, setPreviewURL] = useState(null);

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    console.log("Mock Auth:", formData);
    setIsLoggedIn(true);
  };

  const handleBlogChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewURL(reader.result);
      };
      reader.readAsDataURL(file);
      setBlogData((prev) => ({ ...prev, image: file }));
    } else {
      setBlogData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleBlogSubmit = (e) => {
    e.preventDefault();
    if (!blogData.title || !blogData.content || !blogData.image) {
      alert("All fields are required.");
      return;
    }

    console.log("Blog Submitted:", blogData);
    alert("Blog posted successfully!");
  };

  return (
    <div className="auth-blog-wrapper">
      {!isLoggedIn ? (
        <div className="auth-container">
          <h2>{isRegister ? "Register" : "Login"}</h2>
          <form onSubmit={handleAuthSubmit}>
            {isRegister && (
              <input
                type="text"
                placeholder="Username"
                value={formData.username || ""}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                required
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={formData.email || ""}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password || ""}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
            <button className="button" type="submit">{isRegister ? "Register" : "Login"}</button>
          </form>
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="toggle-btn"
          >
            {isRegister
              ? "Already have an account? Login"
              : "New user? Register"}
          </button>
        </div>
      ) : (
        <div className="blog-container">
          <h2>Submit a Blog Post</h2>
          <form onSubmit={handleBlogSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Blog Title"
              value={blogData.title || ""}
              onChange={handleBlogChange}
              required
            />
            <textarea
              name="content"
              placeholder="Blog Content"
              value={blogData.content || ""}
              onChange={handleBlogChange}
              rows={6}
              required
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleBlogChange}
              required
            />

            {previewURL && (
              <div className="preview">
                <Image
                  src={previewURL}
                  alt="Preview"
                  width={300}
                  height={200}
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginTop: "10px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                />
              </div>
            )}

            <button className="button" type="submit">Post Blog</button>
          </form>
        </div>
      )}
    </div>
  );
}
