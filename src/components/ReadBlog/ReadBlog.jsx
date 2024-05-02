import React, { useEffect, useState } from "react";
import styles from "./ReadBlog.module.css";
import toast, { Toaster } from "react-hot-toast";
import ToastMessage from "../../utils/toastMessage";
import { deleteBlog } from "../../apis/blogs";
import AddBlog from "../AddBlog/AddBlog";
import LoadingSpin from "react-loading-spin";


import MiniProfilePic from "/assets/images/mini_profile.png";
import { Trash2 } from "lucide-react";
import { Pencil } from "lucide-react";
import { LogOut } from "lucide-react";
import { ChevronLeft } from 'lucide-react';
import More from "/assets/icons/dots.png";

const ReadBlog = (props) => {

  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isAddBlog, setIsAddBlog] = useState(false);
  const [screenSize,setScreenSize] = useState(window.innerWidth)
  const [isMobileToggle,setIsMobileToggle] = useState(false)
  const [formattedDate, setFormattedDate] = useState(
    props?.readBlogData?.createdAt
  );
  const [editBlogData, setEditBlogData] = useState({
    ...props.readBlogData,
    id: props.readBlogData._id,
    edit: true,
  });


  const checkScreenSize = () => {
    setScreenSize(window.innerWidth)
}
window.addEventListener("resize",checkScreenSize)
  useEffect(() => {
    const createdAtDate = new Date(props?.readBlogData?.createdAt);

    const formattedDateStr = createdAtDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
    setFormattedDate(formattedDateStr);
  }, []);
  return (
    <div className={styles.blog}>
   
      <Toaster position="top-right" reverseOrder={false} />
      {isConfirmationOpen && (
        <div className={styles.overlay}>
          <ConfirmationPopup
            blogId={props.readBlogData._id}
            setIsReadingBlog={props.setIsReadBlog}
            getAllBlogs={props.getAllBlogs}
            setIsConfirmationOpen={setIsConfirmationOpen}
          />{" "}
        </div>
      )}
      {isAddBlog && (
        <div className={styles.overlay}>
          <AddBlog
            setIsPopupOpen={setIsAddBlog}
            getAllBlogs={props.getAllBlogs}
            editBlogData={editBlogData}
            setEditBlogData={setEditBlogData}
            setIsReadBlog={props.setIsReadBlog}
          />{" "}
        </div>
      )}

      <div className={styles.blog__header}>
        <div className={styles.blog__header_title_container} >
   <ChevronLeft style={{
    marginRight: "15px",
    marginLeft: "-25px",
   }}  onClick={()=>{
      props.setIsReadBlog(false)
   }}/>
        <h2>{props.readBlogData.blogTitle}</h2>

        </div>

        <div className={styles.blog__header_btn}>

  {screenSize > 430 ?
  <>          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              ToastMessage("Link Copied", 0);
            }}
          >
            <LogOut />
          </button>
          <button
            onClick={() => {

              setIsConfirmationOpen(true);
            }}
          >
            <Trash2 />
          </button>
          <button
            onClick={() => {
              setIsAddBlog(true);
            }}
          >
            <Pencil />
          </button>
          </>
          : 
         <div className={styles.blog__more_btn_container}>
      <img src={More} alt="More" onClick={()=>[
        setIsMobileToggle(!isMobileToggle)
      ]} />
      {isMobileToggle &&
      <div className={styles.blog__more_btn_inner_container}>
           <button  onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              ToastMessage("Link Copied", 0);
            }}>
            Share
           </button>
           <hr/>
           <button onClick={() => {
              setIsAddBlog(true);
            }}>
            Edit
           </button>
           <hr/>
           <button  onClick={() => {

setIsConfirmationOpen(true);
}}>
            Delete
           </button>

      </div> 

}
         </div>
          
 
}

        </div>
      </div>

      <div className={styles.blogcard__information}>
        <div className={styles.blogcard__information_name}>
          <img src={MiniProfilePic} alt="Profile" /> <span>James Anderson</span>
        </div>
        <div className={styles.blogcard__information_date}>{formattedDate}</div>
        <div className={styles.blogcard__information_readtime}>4min.read</div>
      </div>
        <div className={styles.blogcard__keywords_container}>

         { props.readBlogData?.keywords.map((keyword, index) =>(
          <span>{keyword}</span>
         )) }

        </div>
      <p>{props.readBlogData.blogDescription}</p>
    </div>
  );
};

const ConfirmationPopup = ({
  setIsConfirmationOpen,
  blogId,
  setIsReadingBlog,
  getAllBlogs,
}) => {

  const [isLoader, setIsLoader] = useState(false);

  const deleteBlogById = async (id) => {
    const response = await deleteBlog(id);
    return response;
  };
  return (
    <div className={styles.confirmation_popup}>
        {isLoader && <div className={styles.overlay}><LoadingSpin primaryColor="#000"/> </div> }

      <h2>Sure you want to delete?</h2>
      <span>Are you sure you want to delete this?</span>
      <div className={styles.confirmation_popup_btn_container}>
        <button
          onClick={() => {
            setIsConfirmationOpen(false);
          }}
        >
          No, Cancel
        </button>
        <button
          onClick={async () => {
            setIsLoader(true);
            const response = await deleteBlogById(blogId);
            if (response?.status === 200) {
                setIsLoader(false);
              ToastMessage("Blog Deleted Successfully", 0);
              setIsConfirmationOpen(false);
              setIsReadingBlog(false);
              getAllBlogs();
            } else {
                setIsLoader(false);
              ToastMessage("Failed to delete blog", 1);
            }
          }}
        >
          Yes, Delete
        </button>
      </div>
    </div>
  );
};

export default ReadBlog;
