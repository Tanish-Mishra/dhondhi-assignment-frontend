import React,{useEffect, useState} from "react";
import styles from "./Profile.module.css";
import toast, { Toaster } from 'react-hot-toast';
import ToastMessage from "../../utils/toastMessage";
import { getblogs } from "../../apis/blogs";

import ProfilePhoto from "/assets/images/profile_pic.png";
import dashboardIcon from "/assets/icons/dashboard.png"; 
import plusIcon from "/assets/icons/plus.png"; 
import documentIcon from "/assets/icons/document.png"; 
import profileIcon from "/assets/icons/profile.png"; 
import settingsIcon from "/assets/icons/settings.png";
import exitIcon from '/assets/icons/exit.png'


const Profile = (props) => {
    const [isSelected,setIsSelected] = useState(3)
    const [screenSize,setScreenSize] = useState(window.innerWidth)
    const [navigationData] = useState([
        {
            id: 1,
            icon: dashboardIcon,
            title: "Dashboard",
        },
        {
            id: 2,
            icon: plusIcon,
            title: "Add new Post",
        },
        {
            id: 3,
            icon: documentIcon,
            title: "Your Feeds",
        },
        {
            id: 4,
            icon: profileIcon,
            title: "Your Saved",
        },
        {
            id: 5,
            icon: settingsIcon,
            title: "Profile",
        }
    ]);

    const checkScreenSize = () => {
        setScreenSize(window.innerWidth)
    }
    window.addEventListener("resize",checkScreenSize)
  


  return (
    <>
    <div className={styles.profile}
  
     style={{
      display: props.isProfileActive || screenSize > 430 ? "flex" : "none",

     }}
    >
  <Toaster
  position="top-right"
  reverseOrder={false}
/>
      <div className={styles.profile__information}>
        <img
          src={ProfilePhoto}
          alt="Profile"
          loading="lazy"
          className={styles.profile__photo}
        />
        <h2 className={styles.profile__information_name}>James Anderson</h2>
        <p className={styles.profile__information_ig}>@james_andy</p>
        <div className={styles.profile__stats}>
          <span className={styles.profile__stats_number}>
            <strong>240</strong> &nbsp; Followers
          </span>
          <span className={styles.profile__stats_number}>
            <strong>140</strong> &nbsp; Following
          </span>
        </div>
      </div>

        <div className={styles.profile__navigation}>
          <ul className={styles.profile__navigation_list}>

            {
                navigationData?.map((item)=>(
                    <li onClick={()=>{
                        setIsSelected(item.id)
                        if(item.id !==3) {
                          ToastMessage("Under Development!",1)
                        }
                    }} key={item.id}>
                    <img src={item.icon} alt={item.title} loading="lazy" />
                    <span style={{
                        color: isSelected === item.id ? "#3399F0" : "",
                    }}> {item.title} </span>
                    </li>
                ))
            }
           
          </ul>
             </div>
  <div className={styles.profile__logout} onClick={()=>{
    if(!props.isProfileActive){
      ToastMessage("Under Development!",1)
    }
  }}><img src={exitIcon} alt="exit" /> <span onClick={()=>{
     props.setIsProfileActive(false)
  }}>Log Out</span></div>

    </div>

  <div className={styles.overlay}></div>

</>

  );
  
};

export default Profile;
