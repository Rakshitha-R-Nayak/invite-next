import { useEffect } from 'react';

export default function AutoMusic() {
  useEffect(() => {
    const audio = new Audio('/media/music.mp3');
    audio.loop = true;
    audio.play().catch(err => {
      console.warn('Autoplay blocked:', err);
    });
  }, []);

  return (
    <div style={styles.container}>
      <h1>Welcome!</h1>
      <p>Music is playing in the background 🎵</p>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif',
  },
};
