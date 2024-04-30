import React,{useState} from "react";
import styles from "./ReadBlog.module.css";

import MiniProfilePic from "/assets/images/mini_profile.png";
import { Trash2 } from "lucide-react";
import { Pencil } from "lucide-react";
import { LogOut } from "lucide-react";

const ReadBlog = () => {
    const [isPopupOpen,setIsPopupOpen] = useState(false)
  return (
    <div className={styles.blog}>

    {isPopupOpen && <ConfirmationPopup setIsPopupOpen={setIsPopupOpen} /> }

      <div className={styles.blog__header}>
        <h2>Some Blog is Running fdalfjajkfkdal;kf;ja;kfa flkajlfjal;jf;a</h2>

        <div className={styles.blog__header_btn}>
          <button>
            <LogOut />
          </button>
          <button onClick={()=>{
                setIsPopupOpen(true)
          }}>
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
        repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        reprehenderit, magni neque maxime voluptas velit hic debitis facere cum,
        modi tempora nulla delectus itaque, laudantium dolor commodi ipsum
        incidunt necessitatibus sapiente error pariatur eveniet nihil! Saepe,
        distinctio quod voluptatem autem quo nulla animi repudiandae velit
        ratione dolorem, sapiente natus? Voluptatem est pariatur, ad dicta ipsum
        nobis asperiores perspiciatis! Quia, accusamus laboriosam. Quasi nostrum
        voluptatibus molestiae, sint impedit necessitatibus tempore deleniti
        soluta modi labore dolore officiis iure et consequuntur, obcaecati
        libero odio quos illum ab explicabo magnam! Magnam pariatur est ipsam
        cupiditate veniam quod repudiandae soluta ipsa numquam? Quia assumenda
        exercitationem debitis, obcaecati in dolorem! Commodi provident dolorum
        deserunt, blanditiis odio aliquam consequuntur doloremque temporibus
        veniam dolores, aliquid ex ipsa molestias quis reprehenderit maiores
        sint? Natus optio et aperiam tempore, numquam dolorem. Dolorum magnam
        distinctio a. Quis voluptates quisquam reprehenderit saepe, nulla ipsam
        minima dolores est, consequuntur velit atque ipsum reiciendis asperiores
        laboriosam nisi molestiae! Alias, doloribus nulla repudiandae blanditiis
        ex culpa, obcaecati praesentium ducimus accusantium modi quis saepe
        velit officia deleniti consectetur explicabo quidem? Aliquam, suscipit
        ducimus? In accusantium facilis quos deleniti debitis, veritatis sit
        vitae enim corrupti sequi praesentium quasi dicta atque, porro aperiam
        pariatur rem delectus. Atque, laborum saepe harum sint deleniti sequi
        eaque, veniam omnis vel natus neque quod beatae fuga. Nemo, consequatur
        fuga! Ad sequi dolore minus labore. Animi laborum recusandae, dolore
        eligendi ea ducimus ipsa distinctio similique, saepe, soluta obcaecati
        doloribus quidem tenetur aut ullam porro illo magni nesciunt a! Ad at
        magni facilis nisi velit ducimus impedit maiores iusto pariatur,
        voluptatem voluptatibus. Libero in animi laborum dolorum voluptates,
        explicabo dolore rerum cupiditate sapiente inventore, pariatur
        laudantium modi illo omnis deleniti? Consectetur minima ullam voluptatum
        quibusdam ad deleniti tempore quos at facilis quod earum dignissimos, id
        atque corporis, laboriosam repellendus non temporibus distinctio porro
        blanditiis iure ipsum doloribus. Est reiciendis suscipit unde illum
        inventore! Dignissimos voluptas veniam, quas iusto incidunt rerum alias
        reiciendis, blanditiis delectus, modi consectetur cum! Odio repudiandae
        mollitia quidem impedit, est nesciunt iste illum officia dolorem
        doloribus dolore similique, nemo exercitationem ad omnis! Dolor
        voluptatum tempore odio laborum quibusdam ipsum libero quis, eius
        laudantium, officiis sint illum nesciunt. Mollitia voluptatum sapiente
        reiciendis dolores et iure qui ad inventore explicabo voluptate
        provident aut accusantium impedit nisi placeat, quibusdam illo
        repellendus necessitatibus eius iusto! Eos nihil enim nesciunt a omnis,
        repellat, perspiciatis sunt harum ipsam, ad corporis soluta saepe et
        quod recusandae incidunt consectetur facere modi beatae! Eveniet ducimus
        minima sunt reiciendis omnis dicta, aliquam eum explicabo! Similique sit
        est, libero deserunt eum ea optio atque in ipsam quidem impedit iusto
        fugit consequuntur laudantium ab, voluptatem eligendi, hic expedita eius
        quo minima maiores! Laboriosam officia, quidem harum molestiae aut
        praesentium animi accusantium mollitia, fuga debitis quasi. Ratione
        excepturi voluptas quas, quis quisquam ex suscipit harum sed, aspernatur
        est debitis nisi, ipsam neque tempora nesciunt. Ducimus numquam, iure
        quisquam saepe quia distinctio. Totam fuga accusantium veniam. Error nam
        consequatur, magni magnam sit fuga iure possimus culpa vero repellendus
        accusantium perferendis eligendi dolor repudiandae excepturi asperiores?
      </p>
    </div>
  );
};

const ConfirmationPopup = ({setIsPopupOpen}) => {
  return (
    <div className={styles.confirmation_popup}>
      <h2>Sure you want to delete?</h2>
      <span>Are you sure you want to delete this?</span>
      <div className={styles.confirmation_popup_btn_container}>
        <button onClick={()=>{setIsPopupOpen(false)}}>No, Cancel</button>
        <button>Yes, Delete</button>
      </div>
    </div>
  );
};

export default ReadBlog;
