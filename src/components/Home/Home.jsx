import React,{useState} from 'react'
import styles from './Home.module.css'
import Profile from '../Profile/Profile'
import Blogs from '../Blogs/Blogs'
const Home = () => {
   const [isProfileActive,setIsProfileActive] = useState(false)
  return (
    <div className={styles.home}>
            <Profile setIsProfileActive={setIsProfileActive} isProfileActive={isProfileActive} />
           <Blogs  setIsProfileActive={setIsProfileActive} isProfileActive={isProfileActive}/>
    </div>
  )
}

export default Home