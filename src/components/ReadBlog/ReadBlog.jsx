import React from 'react'
import styles from './ReadBlog.module.css'

import MiniProfilePic from "/assets/images/mini_profile.png";
import {  Trash2 } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { LogOut } from 'lucide-react';

const ReadBlog = () => {
  return (
    <div className={styles.blog}>
  
     <div className={styles.blog__header}>
      <h2>Some Blog is Running fdalfjajkfkdal;kf;ja;kfa flkajlfjal;jf;a</h2>
      
     

      <div className={styles.blog__header_btn}>
        <button><LogOut/></button>
        <button><Trash2/></button>
        <button><Pencil/></button>
      </div>
        </div>

        <div className={styles.blogcard__information}>
        <div className={styles.blogcard__information_name}>
          <img src={MiniProfilePic} alt="Profile" /> <span>James Anderson</span>
        </div>
        <div className={styles.blogcard__information_date}>Jul 29,2022</div>
      </div>

        </div>
  )
}

export default ReadBlog