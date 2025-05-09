//app/cmponents/Automusic.js
'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function MusicPlayer() {
  const [audio, setAudio] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const music = new Audio('/media/neelashala.mp3');
    setAudio(music);
  }, []);

  const handleLogoClick = () => {
    if (audio) {
      //audio.play();
      setTimeout(() => {
        router.push('/main');
      }, 1000); // wait 1 sec before navigating (optional)
    }
  };

  return (
    <div style={styles.container}>
      <img
        src="/media/logo.jpg"
        alt="Logo"
        style={styles.logo}
        onClick={handleLogoClick}
      />
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
    backgroundColor: '#f0f0ff',
    
  },
  logo: {
    width: '200px',
    height: '200px',
    cursor: 'pointer',
    
  },
};
