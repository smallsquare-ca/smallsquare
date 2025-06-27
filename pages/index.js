import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  const handleEmailClick = () => {
    const user = 'info';
    const domain = 'smallsquare.ca';
    window.location.href = `mailto:${user}@${domain}`;
  };

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div style={styles.container}>
      <Head>
        <title>Smallsquare Digital Marketing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.card}>
        <h1 style={styles.title}>Smallsquare Digital Marketing</h1>
        <p style={styles.subtitle}>
          Modern marketing solutions tailored for small businesses.
        </p>
        <button onClick={handleEmailClick} style={styles.button}>
          Contact Us
        </button>
      </main>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    background: 'linear-gradient(-45deg, #d0eaff, #c7ffd8, #ffe5b4, #ffd3d3)',
    backgroundSize: '400% 400%',
    animation: 'gradient 15s ease infinite',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Inter', system-ui, sans-serif",
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    padding: '3rem',
    textAlign: 'center',
    maxWidth: '600px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 600,
    color: '#212529',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#495057',
    marginBottom: '2rem',
  },
  button: {
    fontSize: '1rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#343a40',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
};

const globalStyles = `
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;

if (typeof window !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.innerHTML = globalStyles;
  document.head.appendChild(styleTag);
}
