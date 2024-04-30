import React from "react";
import styles from "./BlogCard.module.css";

import MiniProfilePic from "/assets/images/mini_profile.png";
import { Trash2 } from 'lucide-react';
import { Pencil } from 'lucide-react';

const BlogCard = (props) => {
  return (
    <div className={styles.blogcard}>
        <div className={styles.blogcard__header}>
      <h4>Please Start Writing Better Git Commits</h4>
      <div className={styles.blogcard__header_btn}>
        <button>  <Pencil /></button>
        <button><Trash2 /></button>
      </div>
      </div>
      <div className={styles.blogcard__information}>
        <div className={styles.blogcard__information_name}>
          <img src={MiniProfilePic} alt="Profile" /> <span>James Anderson</span>
        </div>
        <div className={styles.blogcard__information_date}>Jul 29,2022</div>
      </div>
      <hr className={styles.blogscard__horizontal_rule} />
      <div className={styles.blogcard__readmore_blog_container}>
        <p className={styles.blogcard__blog_text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
          incidunt.
        </p>
        <span className={styles.blogcard__readmore_btn}>...read more</span>
      </div>

      <div className={styles.blogcard__footer}>
        <div className={styles.blogcard__footer_keywords_container}>
          <span>Leadership</span>
          <span>Management</span>
        </div>

        <span className={styles.blogcard__footer_readtime}>4min.read</span>
      </div>
    </div>
  );
};

export default BlogCard;
