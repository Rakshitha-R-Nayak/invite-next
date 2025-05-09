'use client';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion'; // adjust this path if needed


export default function Main() {
  return (
    <>
      <Head>
        <title>Wedding Invitation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Roboto&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.body}>
        <header className={styles.header}>
        <div className="text-center p-8">
      <motion.h1
        className={styles.h1}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        You're Invited!
      </motion.h1>

      <motion.h2
        className={styles.nam}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        SACHIN & VIBHA
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        We are getting married!
      </motion.p>

      <motion.p
        className="font-[calibri]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Save the date
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        Join us on 07-11-2025
      </motion.p>
    </div>
        </header>

        <section className={styles.gallery}>
          
          <div className={styles.photoContainer}>
            <div className={styles.photoSlide}>
              <img src="/media/groom.jpg" alt="groom" />
            </div>
            <div className={styles.photoSlide}>
              <img src="/media/bride1.jpg" alt="bride" />
            </div>
          </div>
        </section>

        
        <h3 className={styles.wed}>SACHIN WEDS VIBHA</h3>
        <section className={styles.additionalGallery}>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            className={styles.swiper}
          >
            <SwiperSlide><img src="/media/add1.jpg" alt="Additional 1" /></SwiperSlide>
            <SwiperSlide><img src="/media/add6.jpg" alt="Additional 2" /></SwiperSlide>
            <SwiperSlide><img src="/media/add3.jpg" alt="Additional 1" /></SwiperSlide>
           
            <SwiperSlide><img src="/media/add2.jpg" alt="Additional 1" /></SwiperSlide>
            <SwiperSlide><img src="/media/add5.jpg" alt="Additional 2" /></SwiperSlide>
          </Swiper>
        </section>
        <br/>
        <br/>
        <br/>

<h2 className={styles.function}>FUNCTIONS</h2>
        <section className={styles.venue}>
       

<h2 className={styles.sangtext}>SANGEETH<br/>
02-11-2025</h2>

          <section className={styles.Sangeetgallery}>
          
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            className={styles.swiperSangeeth}
          >
            <SwiperSlide><img src="/media/sang3.jpg" alt="Additional 1" /></SwiperSlide>
            <SwiperSlide><img src="/media/sang2.jpg" alt="Additional 2" /></SwiperSlide>
            <SwiperSlide><img src="/media/sang1.jpg" alt="Additional 1" /></SwiperSlide>
           
            
          </Swiper>
          <h2 className={styles.sangeeth}>Sangeeth Venue
          <p className="font-[Cinze]">UDBHAV VINTAGE RESORT</p>
          <a href="https://www.google.com/maps/place/UDBHAV+VINTAGE+RESORT/@13.2832906,74.7288802,17z/data=!3m1!4b1!4m9!3m8!1s0x3bbcbb5cd1447ebf:0x7218a57a1f8e5180!5m2!4m1!1i2!8m2!3d13.2832906!4d74.7314551!16s%2Fg%2F11vkzbn9x_?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <button className={styles.locationButton}>View Location on Google Maps</button>
          </a>
          </h2>
        </section>
<br/>
<br/>
<br/>
<section className={styles.wedding}>WEDDING<br/>
07-11-2025</section>
        <section className={styles.additionalGallery}>
        <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            className={styles.swiper}
          >
            <SwiperSlide><img src="/media/add7.jpg" alt="Additional 1" /></SwiperSlide>
            <SwiperSlide><img src="/media/add9.jpg" alt="Additional 1" /></SwiperSlide>
            <SwiperSlide><img src="/media/add8.jpg" alt="Additional 2" /></SwiperSlide>


            </Swiper>
</section>

         
         <section className={styles.weddingt}>
           <p> Wedding Venue</p>
          <p>NARAYANAGURU AUDITORIUM, BANNANJE, UDUPI</p>
          
          </section>
          <a
  href="https://www.google.com/maps/place/Narayanaguru+Auditorium,+Udupi/@13.3456821,74.7361433,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbcbb794f8c3edd:0x6abdfc29f11180dd!8m2!3d13.3456821!4d74.7387182!16s%2Fg%2F11c2pmtqw7?entry=ttu"
  target="_blank"
  rel="noopener noreferrer"
>
            <button className={styles.locationButton}>View Location on Google Maps</button>
          </a>
          
        </section>

   {/*}   <section className={styles.videoSection}>
          <div className={styles.textBlock}>
            <h3>Our Special Moments</h3>
            <p>Watch our love story unfold</p>
            <p>We hope you enjoy it!</p>
          </div>

          <div className={styles.videoBlock}>
            <video className={styles.video} controls autoPlay muted loop>
              <source src="/media/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>*/}

        <footer className={styles.footer}>
          <p  className={styles.cel}>We can't wait to celebrate with you!</p>
        </footer>
      </main>
    </>
  );
}
