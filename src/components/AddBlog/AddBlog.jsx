import React, { useState } from "react";
import styles from "./AddBlog.module.css";
import toast, { Toaster } from "react-hot-toast";
import ToastMessage from "../../utils/toastMessage";
import { addBlog } from "../../apis/blogs";
import { editBlogById } from "../../apis/blogs";
import LoadingSpin from "react-loading-spin";

const AddBlog = ({
  setIsPopupOpen,
  getAllBlogs,
  editBlogData,
  setEditBlogData,
  setIsReadBlog,
}) => {
 const [isLoader, setIsLoader] = useState(false);
  const [blogData, setBlogData] = useState({
    blogTitle: "" || editBlogData.blogTitle,
    blogDescription: "" || editBlogData.blogDescription,
    keywords: "" || editBlogData.keywords,
  });
 
  const handleChange = (e) => {
    setBlogData({
      ...blogData,
      [e.target.name]: e.target.value,
    });
  };

  const addBlogData = async () => {
    const response = await addBlog({ ...blogData });
    return response;
  };

  return (
    <div className={styles.popup}>
        {isLoader && <div className={styles.overlay}><LoadingSpin primaryColor="#000"/> </div> }
      <Toaster position="top-right" reverseOrder={false} />
      <div className={styles.popup__header_container}>
        <input
          type="text"
          className={styles.popup__title}
          onChange={(e) => {
            handleChange(e);
          }}
          value={blogData.blogTitle}
          name="blogTitle"
          placeholder="Write Title"
        />
        <select
          name="keywords"
          onChange={(e) => {
            handleChange(e);
          }}
          value={blogData.keywords}
          className={styles.popup__select_keyword}
        >
          <option disabled>Keyword</option>
          <option value="Leadership">Leadership</option>
          <option value="Management">Management</option>
        </select>
      </div>

      <textarea
        name="blogDescription"
        value={blogData.blogDescription}
        onChange={(e) => {
          handleChange(e);
        }}
        className={styles.popup__content}
        placeholder="Start Typing..."
      ></textarea>
      <div className={styles.popup__btn_container}>
        <button
          onClick={() => {
            setEditBlogData({
              id: "",
              edit: false,
              blogTitle: "",
              blogDescription: "",
              keywords: "",
            });
            setIsPopupOpen(false);
          }}
        >
          Cancel
        </button>
        <button
          onClick={async () => {
            if (
              !blogData.blogTitle ||
              !blogData.blogDescription ||
              !blogData.keywords.length
            ) {
              ToastMessage("Please fill all the fields", 1);
              return;
            }
            setIsLoader(true);
            if (!editBlogData.edit) {
              const response = await addBlogData();
              if (response?.status === 201) {
                ToastMessage("Blog Added Successfully", 0);
                setIsPopupOpen(false);
                getAllBlogs();
            setIsLoader(false);

              } else {
                ToastMessage("Failed to add blog", 1);
            setIsLoader(false);

              }
            } else {
                setIsLoader(true);
              const response = await editBlogById({
                ...blogData,
                id: editBlogData.id,
              });
              setEditBlogData({
                id: "",
                edit: false,
                blogTitle: "",
                blogDescription: "",
                keywords: "",
              });
              if (response?.status === 200) {
             if(setIsReadBlog){
                setIsReadBlog(false);
             }
                ToastMessage("Blog Edited Successfully", 0);
                setIsPopupOpen(false);
                getAllBlogs();
                setIsLoader(false);
              }
            }
          }}
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default AddBlog;
