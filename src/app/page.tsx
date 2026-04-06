export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        background: '#f7f6f2',
        color: '#28251d',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
        Hello
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#7a7974' }}>
        Motion Harbour Physio — coming soon.
      </p>
    </main>
  );
}
