import React from 'react'
import styles from './Home.module.css'
import Profile from '../Profile/Profile'
import Blogs from '../Blogs/Blogs'
const Home = () => {
  return (
    <div className={styles.home}>
            <Profile/>
        <Blogs/>
    </div>
  )
}

export default Home