import React, { useState, useRef, useEffect } from "react";
import styles from "./Blogs.module.css";
import BlogCard from "../BlogCard/BlogCard";
import AddBlog from "../AddBlog/AddBlog";
import ReadBlog from "../ReadBlog/ReadBlog";
import { getblogs } from "../../apis/blogs";
import { deleteBlog } from "../../apis/blogs";

import Pencil from "/assets/icons/pencil.png";
import PencilWhite from "/assets/icons/pencil_white.png";
import { PencilRuler } from "lucide-react";

const Blogs = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [readBlog, setReadBlog] = useState(false);
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [blogs]);

  const deleteBlogById = async (id) => {
    const response = await deleteBlog(id);
    return response;
}

  const getAllBlogs = async () => {
    const response = await getblogs();
    setBlogs(response?.data.blogs);
    return response;
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <>
      {readBlog ? (
        <ReadBlog />
      ) : (
        <>
          <div className={styles.popup__container}>
            {isPopupOpen && <AddBlog setIsPopupOpen={setIsPopupOpen} />}
          </div>
          <div className={styles.blogs}>
            <div className={styles.blogs__header}>
              <h2>{!blogs.length ? "Your Posts" : "Your Feeds"}</h2>

              {blogs?.length ? (
                <button
                  className={styles.blogs__header_btn}
                  onClick={() => {
                    setIsPopupOpen(true);
                  }}
                >
                  <img src={Pencil} alt="Pencil" />
                  Write
                </button>
              ) : (
                ""
              )}
            </div>
            {blogs?.length ? (
              <div className={styles.blogs__container}>
                {blogs?.map((blog, index) => (
                    <div key={blog.id}>
                  <BlogCard blog={blog} deleteBlogById={deleteBlogById} getAllBlogs={getAllBlogs}  />
                  </div>
                ))}
                <div ref={messageEndRef}></div>
              </div>
            ) : (
              <div className={styles.popup__noblogs}>
                <div className={styles.popup__main_icon}>
                  {" "}
                  <PencilRuler />
                </div>
                <button>
                  <img src={PencilWhite} alt="Pencil White" />
                  Start Writing
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Blogs;
