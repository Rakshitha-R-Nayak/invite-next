'use client';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import MusicPlayer from './components/music';
import Main from './components/index_main';

// app/page.js


export default function LandingPage() {
  return <MusicPlayer />;
}



