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
import { ArrowRightFromLine } from 'lucide-react';
import { ArrowLeftFromLine } from 'lucide-react';


const Blogs = (props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [isReadBlog, setIsReadBlog] = useState(false);
  const messageEndRef = useRef(null);
  const [readBlogData, setReadBlogData] = useState({});
  const [page,setPage] = useState(1)

  useEffect(() => {
    messageEndRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [blogs]);


  const deleteBlogById = async (id) => {
    const response = await deleteBlog(id);
    return response;
  };

  const setPageHandler = (selectedPage) => {
    if(selectedPage>=1 && selectedPage!==page && selectedPage && selectedPage <= (Math.ceil(blogs.length/4)) ) {
    setPage(selectedPage) 
}
  }

  const getAllBlogs = async () => {
    const response = await getblogs();
    setBlogs(response?.data.blogs);
    return response;
  };
  
  const [editBlogData,setEditBlogData] = useState({
    id:"",
    edit: false,
    blogTitle:"",
    blogDescription:"",
    keywords:""
  })


  const editBlog = (blog) => {
    setEditBlogData({
      id: blog._id,
      edit: true,
      blogTitle: blog.blogTitle,
      blogDescription: blog.blogDescription,
      keywords: blog.keywords
    })
    setIsPopupOpen(true)
  }



  useEffect(() => {
    getAllBlogs();
  }, []);



  return (
    <>
      {isReadBlog ? (
        <ReadBlog getAllBlogs={getAllBlogs} readBlogData={readBlogData} setIsReadBlog={setIsReadBlog} />
      ) : (
        <>
          <div className={styles.popup__container}>
            {isPopupOpen && (
                <div className={styles.overlay}>
              <AddBlog
                setIsPopupOpen={setIsPopupOpen}
                getAllBlogs={getAllBlogs}
                editBlogData={editBlogData}
                setEditBlogData={setEditBlogData}
              />
              </div>
            )}
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
                {blogs?.slice(page * 4 - 4,page * 4).map((blog, index) => (
                  <div key={blog.id}>
                    <BlogCard
                      blog={blog}
                      deleteBlogById={deleteBlogById}
                      getAllBlogs={getAllBlogs}
                      setIsPopupOpen={setIsPopupOpen}
                      editBlog={editBlog}
                      setIsReadBlog={setIsReadBlog}
                      setReadBlogData={setReadBlogData}

                    />
                  </div>
                ))}
                <div>
                    {blogs.length > 0 && <div className={styles.pagination__container}>

                   <span onClick={()=>{
                    setPageHandler(page-1)
                   }}>
                   <ArrowLeftFromLine />
                   </span>
                    {[...Array(Math.ceil(blogs.length / 4))].map((_,i)=>(
                          <span style={{
                            border: page === (i + 1) ? "2px solid red" : "2px solid  #181717",
                          }} onClick={()=>{
                          setPageHandler(i+1)
                          }}>{i+1}</span>
                    ))}
                   <span onClick={()=>{
                    setPageHandler(page+1)
                   }}>
                   <ArrowRightFromLine />
                   </span>
                        </div>}
                </div>
                <div ref={messageEndRef}></div>
              </div>
            ) : (
              <div className={styles.popup__noblogs}>
                <div className={styles.popup__main_icon}>
                  {" "}
                  <PencilRuler />
                </div>
                <button
                  onClick={() => {
                    setIsPopupOpen(true);
                  }}
                >
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
