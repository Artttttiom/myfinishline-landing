import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Is a story-driven virtual fitness
              quest where movement unlocks
              the <span className="text-gradient">story</span>
            </h1>
            <p className="hero-description">
              Transform your workouts into epic adventures. Walk, run, or cycle through immersive virtual worlds while tracking real progress.
            </p>
            <button className="btn-start">
              Start Your Quest
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="hero-visual">
            <div className="map-illustration">
              {/* Main map image - scenic route illustration */}
              <div className="map-image">
                <svg viewBox="0 0 500 400" className="map-svg">
                  {/* Background gradient */}
                  <defs>
                    <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#87CEEB" />
                      <stop offset="100%" stopColor="#E0F4FF" />
                    </linearGradient>
                    <linearGradient id="waterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4FB8E8" />
                      <stop offset="100%" stopColor="#2D9CDB" />
                    </linearGradient>
                    <linearGradient id="landGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#90C67C" />
                      <stop offset="100%" stopColor="#5EA34D" />
                    </linearGradient>
                  </defs>

                  {/* Sky background */}
                  <rect width="500" height="400" fill="url(#skyGradient)" rx="20"/>

                  {/* Water/Ocean areas */}
                  <ellipse cx="400" cy="300" rx="150" ry="100" fill="url(#waterGradient)" opacity="0.8"/>
                  <ellipse cx="100" cy="350" rx="120" ry="80" fill="url(#waterGradient)" opacity="0.6"/>

                  {/* Mountains */}
                  <path d="M0 250 L80 150 L160 220 L240 120 L320 200 L400 100 L500 180 L500 400 L0 400 Z" fill="#8B9A6B" opacity="0.7"/>
                  <path d="M0 300 L100 200 L200 280 L300 180 L400 250 L500 200 L500 400 L0 400 Z" fill="url(#landGradient)"/>

                  {/* Snow caps */}
                  <path d="M235 125 L240 120 L245 125 Z" fill="white"/>
                  <path d="M395 105 L400 100 L405 105 Z" fill="white"/>

                  {/* Trees */}
                  <g fill="#2D5A27">
                    <path d="M50 320 L60 280 L70 320 Z"/>
                    <path d="M80 310 L90 275 L100 310 Z"/>
                    <path d="M420 270 L430 235 L440 270 Z"/>
                    <path d="M450 280 L460 250 L470 280 Z"/>
                  </g>

                  {/* Route path */}
                  <path
                    d="M60 350 Q100 320 150 330 Q200 340 250 300 Q300 260 350 280 Q400 300 450 250"
                    fill="none"
                    stroke="#22C55E"
                    strokeWidth="4"
                    strokeDasharray="8 4"
                    strokeLinecap="round"
                  />

                  {/* Checkpoints */}
                  <circle cx="60" cy="350" r="8" fill="#22C55E"/>
                  <circle cx="60" cy="350" r="4" fill="white"/>

                  <circle cx="250" cy="300" r="8" fill="#22C55E"/>
                  <circle cx="250" cy="300" r="4" fill="white"/>

                  <circle cx="450" cy="250" r="10" fill="#F59E0B"/>
                  <path d="M446 250 L449 253 L455 247" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

                  {/* Clouds */}
                  <g fill="white" opacity="0.9">
                    <ellipse cx="80" cy="60" rx="30" ry="15"/>
                    <ellipse cx="100" cy="55" rx="25" ry="12"/>
                    <ellipse cx="60" cy="55" rx="20" ry="10"/>

                    <ellipse cx="380" cy="50" rx="35" ry="18"/>
                    <ellipse cx="405" cy="45" rx="28" ry="14"/>
                    <ellipse cx="355" cy="45" rx="22" ry="11"/>
                  </g>

                  {/* Sun */}
                  <circle cx="450" cy="60" r="25" fill="#FCD34D"/>
                </svg>
              </div>

              {/* Floating cards */}
              <div className="floating-card card-progress">
                <div className="card-icon yellow">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L12.09 7.26L18 8.27L14 12.14L14.94 18.02L10 15.27L5.06 18.02L6 12.14L2 8.27L7.91 7.26L10 2Z" fill="#F59E0B"/>
                  </svg>
                </div>
                <div className="card-info">
                  <span className="card-label">Progress</span>
                  <span className="card-value">67%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '67%'}}></div>
                </div>
              </div>

              <div className="floating-card card-distance">
                <div className="card-icon green">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 18.333a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666z" stroke="#22C55E" strokeWidth="2"/>
                    <path d="M10 5v5l3.333 1.667" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="card-info">
                  <span className="card-label">Distance</span>
                  <span className="card-value">42.5 km</span>
                </div>
              </div>

              <div className="floating-card card-medal">
                <div className="medal-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="18" r="10" fill="#F59E0B"/>
                    <circle cx="16" cy="18" r="7" fill="#FCD34D"/>
                    <path d="M12 4L16 12L20 4" fill="#3B82F6"/>
                    <path d="M13 4L16 10L19 4" fill="#60A5FA"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
