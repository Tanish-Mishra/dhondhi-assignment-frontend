import React from 'react'
import styles from './AddBlog.module.css'
const AddBlog = ({setIsPopupOpen}) => {
  return (
    <div className={styles.popup}>
        <div className={styles.popup__header_container}>
     <input type='text' className={styles.popup__title} name='blogTitle' placeholder='Write Title' />
<select name="keywords" className={styles.popup__select_keyword}>
  <option value="leardership" disabled>Keyword</option>
  <option value="leardership">Leadership</option>
  <option value="management">Management</option>
</select>
</div>

<textarea name="blogContent" className={styles.popup__content} placeholder='Start Typing...'></textarea>
 <div className={styles.popup__btn_container}>
 <button onClick={()=>{
    setIsPopupOpen(false)
 }}>Cancel</button>
 <button>Publish</button>
 </div>
    </div>
  )
}

export default AddBlog