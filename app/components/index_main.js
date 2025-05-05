'use client';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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
          <h1 className={styles.h1}>You're Invited!</h1>
          <h2>Bride & Groom11</h2>
          <p>Join us on 28-04-2025</p>
        </header>

        <section className={styles.gallery}>
          <h3>Our Moments</h3>
          <div className={styles.photoContainer}>
            <div className={styles.photoSlide}>
              <img src="/media/Photo2.jpg" alt="Bride" />
            </div>
            <div className={styles.photoSlide}>
              <img src="/media/photo1.jpg" alt="Groom" />
            </div>
          </div>
        </section>

        <section className={styles.additionalGallery}>
          <h3>Additional Photos</h3>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            className={styles.swiper}
          >
            <SwiperSlide><img src="/media/photo4.jpg" alt="Additional 1" /></SwiperSlide>
            <SwiperSlide><img src="/media/photo6.jpg" alt="Additional 2" /></SwiperSlide>
          </Swiper>
        </section>

        <section className={styles.venue}>
          <h3>Wedding Venue</h3>
          <p>Kateelu, Karnataka 574148</p>
          <a href="https://www.google.com/maps/place/Kateelu,+Karnataka+574148" target="_blank" rel="noopener noreferrer">
            <button className={styles.locationButton}>View Location on Google Maps</button>
          </a>
          <p>India</p>
        </section>

        <section className={styles.videoSection}>
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
        </section>

        <footer className={styles.footer}>
          <p>We can't wait to celebrate with you!</p>
        </footer>
      </main>
    </>
  );
}
