'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function MusicPlayer() {
  const [animate, setAnimate] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!window.globalAudio) {
      const music = new Audio('/media/nelashalbhame.mp3');//change here
      music.loop = true;
      window.globalAudio = music;
    }
  }, []);

  const handleLogoClick = () => {
    const audio = window.globalAudio;
    if (audio) {
      audio.play().catch(() => {});
    }

    setAnimate(true);

    setTimeout(() => {
      router.push('/main');
    }, 400); // delay for animation
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
  },
  logo: {
    width: '200px',
    height: '200px',
    cursor: 'pointer',
  },
};
