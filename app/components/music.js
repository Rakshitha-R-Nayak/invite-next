'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function MusicPlayer() {
  const [audio, setAudio] = useState(null);
  const [animate, setAnimate] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const music = new Audio('/media/music.mp3');
    setAudio(music);
  }, []);

  const handleLogoClick = () => {
    if (audio) {
      audio.play();
      setAnimate(true); // trigger animation

      // Redirect after animation ends (400ms)
      setTimeout(() => {
        router.push('/main');
      }, 400);
    }
  };

  return (
    <div style={styles.container}>
      <img
        src="/media/logo.jpg"
        alt="Logo"
        style={{
          ...styles.logo,
          transform: animate ? 'scale(2)' : 'scale(1)',
          transition: 'transform 0.6s ease-in-out',
          
        }}
        onClick={handleLogoClick}
      />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
     // prevent scrollbar during slide
  },
  logo: {
    width: '200px',
    height: '200px',
    cursor: 'pointer',
  },
};
