import React,{useRef} from 'react'
import styles from './Home.module.css'
import Profile from '../Profile/Profile'
import Blogs from '../Blogs/Blogs'
const Home = () => {
    const homeRef = useRef(null)
  return (
    <div className={styles.home} ref={homeRef}>
            <Profile homeRef={homeRef} />
           <Blogs homeRef={homeRef}/>
    </div>
  )
}

export default Home