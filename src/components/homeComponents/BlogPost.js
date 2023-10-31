import React from "react";
import style from "../../css/blog.module.css";
import blog1 from "../../assets/blog/img_1.jpg";
import blog2 from "../../assets/blog/img_2.jpg";
import blog3 from "../../assets/blog/img_3.jpg";

const blogPosts = [
  {
    img: blog1,
    title: "Make Your Business More Profitable",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
    username: "Ham Brook",
    timestamp: " Jan 18, 2023",
    category: "News",
  },
  {
    img: blog2,
    title: "Make Your Business More Profitable",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
    username: "James Phelps",
    timestamp: " Mar 07, 2023",
    category: "News",
  },
  {
    img: blog3,
    title: "Make Your Business More Profitable",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
    username: "James Phelps",
    timestamp: " Aug 23, 2023",
    category: "News",
  },
];

const BlogPost = () => {
  return (
    <div className={style.blog_container} id="blog">
      <div className="heading">
        <h2>Blog Posts</h2>
      </div>
      <div className={style.blog_wrapper}>
        {blogPosts.map((post, index) => (
          <div key={index} className={style.post_card}>
            <img src={post.img} alt="blog post" />
            <h2>{post.title}</h2>
            <ul className={style.post_label}>
              <li>{post.username}</li>
              <li>{post.timestamp}</li>
              <li>{post.username}</li>
            </ul>
            <p>{post.post}</p>
            <button className="button">Continue Reading...</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
