import React,{useState} from 'react'
import styles from './AddBlog.module.css'
import toast, { Toaster } from 'react-hot-toast';
import ToastMessage from '../../utils/toastMessage'
import { addBlog } from '../../apis/blogs'

const AddBlog = ({setIsPopupOpen}) => {

    const [blogData,setBlogData] = useState({
        blogTitle:"",
        blogDescription:"",
        keywords:""
    })

    const handleChange = (e) => {
        setBlogData({
            ...blogData,
            [e.target.name]:e.target.value
        })


    }

    const addBlogData = async() => {
        const response = await addBlog({...blogData})
        return response
    }

  return (
    <div className={styles.popup}>
        <Toaster
  position="top-right"
  reverseOrder={false}
/>
        <div className={styles.popup__header_container}>
     <input type='text' className={styles.popup__title} onChange={(e)=>{handleChange(e)}} name='blogTitle' placeholder='Write Title' />
<select name="keywords" onChange={(e)=>{handleChange(e)}} className={styles.popup__select_keyword}>
  <option disabled>Keyword</option>
  <option value="Leadership">Leadership</option>
  <option value="Management">Management</option>
</select>
</div>

<textarea name="blogDescription" onChange={(e)=>{handleChange(e)}} className={styles.popup__content} placeholder='Start Typing...'></textarea>
 <div className={styles.popup__btn_container}>
 <button onClick={()=>{
    setIsPopupOpen(false)
 }}>Cancel</button>
 <button onClick={async()=>{
     if(!blogData.blogTitle|| !blogData.blogDescription || !blogData.keywords.length){
        ToastMessage("Please fill all the fields",1)
        return
    }
    const response = await addBlogData()
    if(response?.status === 201){
        ToastMessage("Blog Added Successfully",0) 
        setIsPopupOpen(false)
    } else {
        ToastMessage("Failed to add blog",1)
    }
 }}>Publish</button>
 </div>
    </div>
  )
}

export default AddBlog