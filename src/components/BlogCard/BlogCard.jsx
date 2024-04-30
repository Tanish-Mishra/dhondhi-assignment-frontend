import React from "react";
import styles from "./BlogCard.module.css";
import ToastMessage from "../../utils/toastMessage";
import MiniProfilePic from "/assets/images/mini_profile.png";
import toast, { Toaster } from 'react-hot-toast';

import { Trash2 } from 'lucide-react';
import { Pencil } from 'lucide-react';

const BlogCard = (props) => {

  

  return (
    <div className={styles.blogcard}>
         <Toaster
  position="top-right"
  reverseOrder={false}
/>
        <div className={styles.blogcard__header}>
      <h4>{props?.blog?.blogTitle}</h4>
      <div className={styles.blogcard__header_btn}>
        <button>  <Pencil /></button>
        <button onClick={async()=>{
          const response =  await props.deleteBlogById(props?.blog._id)
          if(response?.status === 200){
          await  props.getAllBlogs()
            ToastMessage("Blog Deleted Successfully",0)
          } else {
            ToastMessage("Failed to delete blog",1)
          }
        }}><Trash2 /></button>
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
            {props?.blog?.blogDescription}
        </p>
        <span className={styles.blogcard__readmore_btn}>...read more</span>
      </div>

      <div className={styles.blogcard__footer}>
        <div className={styles.blogcard__footer_keywords_container}>
            {props?.blog?.keywords.map((item)=>(
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
