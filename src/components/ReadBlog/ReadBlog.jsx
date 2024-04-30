import React from "react";
import styles from "./ReadBlog.module.css";

import MiniProfilePic from "/assets/images/mini_profile.png";
import { Trash2 } from "lucide-react";
import { Pencil } from "lucide-react";
import { LogOut } from "lucide-react";

const ReadBlog = () => {
  return (
    <div className={styles.blog}>
        <ConfirmationPopup/>
      <div className={styles.blog__header}>
        <h2>Some Blog is Running fdalfjajkfkdal;kf;ja;kfa flkajlfjal;jf;a</h2>

        <div className={styles.blog__header_btn}>
          <button>
            <LogOut />
          </button>
          <button>
            <Trash2 />
          </button>
          <button>
            <Pencil />
          </button>
        </div>
      </div>

      <div className={styles.blogcard__information}>
        <div className={styles.blogcard__information_name}>
          <img src={MiniProfilePic} alt="Profile" /> <span>James Anderson</span>
        </div>
        <div className={styles.blogcard__information_date}>Jul 29,2022</div>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        accusamus numquam rerum modi officiis itaque reprehenderit animi ipsam
        placeat, voluptate natus odit, blanditiis suscipit nisi, eveniet porro
        fugit quam. Asperiores natus esse sunt quasi fugiat deserunt repudiandae
        quo non laboriosam, cupiditate, amet quas nostrum eveniet aliquid
        consequuntur, cumque enim? Doloribus laudantium eveniet in, voluptate
        non debitis ea dolor laborum necessitatibus ut quas id odit. Ducimus
        pariatur sed quo a non est! Nam tempore dicta est libero corporis
        quaerat laboriosam natus veritatis architecto, voluptatum fuga ullam ex
        provident ipsam recusandae ratione! Quam quas excepturi odit odio quis
        animi, rerum praesentium mollitia placeat! Officiis consequatur earum,
        architecto est neque maiores beatae deleniti quae reprehenderit suscipit
        consectetur ad sequi blanditiis? At natus provident reiciendis
        accusantium dolore esse dolores id, culpa cum tempore libero, suscipit
        eveniet omnis impedit nulla quam voluptatum! Illum consequuntur
        aspernatur repellat rem fugit, accusantium, minima, iure temporibus non
        quasi aut sapiente exercitationem alias expedita earum ullam.
        Voluptatibus nulla voluptatem voluptates. Eos est aliquam, voluptas
        voluptatibus laboriosam eveniet cupiditate necessitatibus tenetur ipsa
        distinctio suscipit nisi minima vel sequi sunt culpa non maiores
        delectus consequuntur, tempora ab. Similique voluptas architecto rem,
        cum eligendi dolor nesciunt nam dolorem officia doloribus ratione quod
        repellat.
      </p>
    </div>
  );
};

const ConfirmationPopup = () => {
  return <div className={styles.confirmation_popup}>
  <h2>Sure you want to delete?</h2>
  <span>Are you sure you want to delete this?</span>
  <div className={styles.confirmation_popup_btn_container}>
   <button>
    No, Cancel
   </button>
   <button>
    Yes, Delete
   </button>
  </div>
  </div>
};

export default ReadBlog;
