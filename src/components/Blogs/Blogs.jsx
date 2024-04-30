import React,{useState,useRef,useEffect} from 'react'
import styles from './Blogs.module.css'
import BlogCard from '../BlogCard/BlogCard'
import AddBlog from '../AddBlog/AddBlog'
import ReadBlog from '../ReadBlog/ReadBlog'

import Pencil from '/assets/icons/pencil.png'
import CreateBlog from '/assets/images/create.png'
import PencilWhite from '/assets/icons/pencil_white.png'
import { PencilRuler } from 'lucide-react';

const Blogs = () => {
 const [isPopupOpen,setIsPopupOpen] = useState(false)
 const [blogs,setBlogs] = useState([])
 const [readBlog,setReadBlog] = useState(false)
 const messageEndRef = useRef(null)

 useEffect(() => {
    messageEndRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [blogs])

  return (

    <>
    {readBlog ? <ReadBlog/> :
    <>
    <div className={styles.popup__container}>
    {  isPopupOpen &&   <AddBlog setIsPopupOpen={setIsPopupOpen}/>    }
    </div>
    <div className={styles.blogs}>
      <div className={styles.blogs__header}>
        <h2>{!blogs.length ? "Your Posts" : "Your Feeds"}</h2>

       {!blogs.length ?  <button className={styles.blogs__header_btn} onClick={()=>{
            setIsPopupOpen(true)
        }}><img src={Pencil} alt='Pencil'/>Write</button> : "" }
      </div> 
      {
        !blogs.length ?
      <div className={styles.blogs__container}>
         <BlogCard/>
         <BlogCard/>
         <BlogCard/>
         <BlogCard/>
         <BlogCard/>
         <BlogCard/>
         <BlogCard/>
         <div ref={messageEndRef}></div>
      </div>
 : <div className={styles.popup__noblogs}>
   <div className={styles.popup__main_icon}>   <PencilRuler /></div>
    <button>
        <img src={PencilWhite} alt='Pencil White'/>
        Start Writing</button>
 </div>
}
    </div>
    </>
}
    </>
  )
}

export default Blogs