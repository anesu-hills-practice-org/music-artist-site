import './App.css'

function App() {
  const albums = [
    { title: 'Midnight Dreams', year: '2024', cover: 'https://placehold.co/400x400/8b5cf6/ffffff?text=Midnight+Dreams' },
    { title: 'Electric Soul', year: '2023', cover: 'https://placehold.co/400x400/ec4899/ffffff?text=Electric+Soul' },
    { title: 'Neon Nights', year: '2022', cover: 'https://placehold.co/400x400/3b82f6/ffffff?text=Neon+Nights' },
  ];

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="artist-name">NOVA BEATS</h1>
          <p className="tagline">Electronic Music Producer & DJ</p>
          <div className="cta-buttons">
            <a href="#music" className="btn btn-primary"> Listen Now</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="music-section" id="music">
        <h2 className="section-title">Latest Releases</h2>
        <div className="albums-grid">
          {albums.map((album, index) => (
            <div key={index} className="album-card">
              <img src={album.cover} alt={album.title} className="album-cover" />
              <h3 className="album-title">{album.title}</h3>
              <p className="album-year">{album.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="social-links">
          <a href="https://spotify.com" className="social-link" aria-label="Spotify">🎵</a>
          <a href="https://instagram.com" className="social-link" aria-label="Instagram">📸</a>
          <a href="https://youtube.com" className="social-link" aria-label="YouTube">▶️</a>
          <a href="https://twitter.com" className="social-link" aria-label="Twitter">🐦</a>
        </div>
        <p className="footer-text">© 2024 Nova Beats. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
