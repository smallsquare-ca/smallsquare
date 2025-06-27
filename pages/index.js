import Head from 'next/head';

export default function Home() {
  const handleEmailClick = () => {
    const user = 'info';
    const domain = 'smallsquare.ca';
    window.location.href = `mailto:${user}@${domain}`;
  };

  return (
    <div style={styles.container}>
      <Head>
        <title>Smallsquare Digital Marketing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.main}>
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
    backgroundColor: '#f8f9fa',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'system-ui, sans-serif',
    textAlign: 'center',
    padding: '2rem',
  },
  main: {
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '2.5rem',
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
    transition: 'background-color 0.3s ease',
  },
};
