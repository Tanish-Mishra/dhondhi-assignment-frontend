import React, { useEffect, useState } from "react";
import styles from "./BlogCard.module.css";
import ToastMessage from "../../utils/toastMessage";
import MiniProfilePic from "/assets/images/mini_profile.png";
import toast, { Toaster } from "react-hot-toast";
import LoadingSpin from "react-loading-spin";


import { Trash2 } from "lucide-react";
import { Pencil } from "lucide-react";

const BlogCard = (props) => {
  const [formattedDate, setFormattedDate] = useState();
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    const createdAtDate = new Date(props?.blog?.createdAt);

    const formattedDateStr = createdAtDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });

    setFormattedDate(formattedDateStr);
  }, []);
  return (
    <div className={styles.blogcard}>
        {isLoader && <div className={styles.overlay}><LoadingSpin primaryColor="#000"/> </div> }
      <Toaster position="top-right" reverseOrder={false} />
      <div className={styles.blogcard__header}>
        <h4>{props?.blog?.blogTitle}</h4>
        <div className={styles.blogcard__header_btn}>
          <button
            onClick={() => {
              props.setIsPopupOpen(true);
            }}
          >
            {" "}
            <Pencil
              onClick={() => {
                props.editBlog(props.blog);
              }}
            />
          </button>
          <button
            onClick={async () => {
                setIsLoader(true);
              const response = await props.deleteBlogById(props?.blog._id);
              if (response?.status === 200) {
                await props.getAllBlogs();
                ToastMessage("Blog Deleted Successfully", 0);
                setIsLoader(false);

              } else {
                ToastMessage("Failed to delete blog", 1);
                setIsLoader(false);

              }
            }}
          >
            <Trash2 />
          </button>
        </div>
      </div>
      <div className={styles.blogcard__information}>
        <div className={styles.blogcard__information_name}>
          <img src={MiniProfilePic} alt="Profile" /> <span>James Anderson</span>
        </div>
        <div className={styles.blogcard__information_date}>{formattedDate}</div>
      </div>
      <hr className={styles.blogscard__horizontal_rule} />
      <div className={styles.blogcard__readmore_blog_container}>
        <p className={styles.blogcard__blog_text}>
          {props?.blog?.blogDescription}
        </p>
        <span
          className={styles.blogcard__readmore_btn}
          onClick={() => {
            props.setIsReadBlog(true);
            props.setReadBlogData(props.blog);
          }}
        >
          ...read more
        </span>
      </div>

      <div className={styles.blogcard__footer}>
        <div className={styles.blogcard__footer_keywords_container}>
          {props?.blog?.keywords.map((item) => (
            <span key={item}>{item}</span>
            // <span>Management</span>
          ))}
        </div>

        <span className={styles.blogcard__footer_readtime}>4min.read</span>
      </div>
    </div>
  );
};

export default BlogCard;
