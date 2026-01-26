import './LevelUp.css'

function LevelUp() {
  return (
    <section className="level-up">
      <div className="container">
        <div className="level-up-content">
          <div className="level-up-text">
            <h2>Level Up Your<br />Sports Experience</h2>
            <p>
              Download the app and start your adventure today.
              Track your progress, unlock stories, and earn rewards on the go.
            </p>

            <div className="app-buttons">
              <a href="#" className="app-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="app-btn-text">
                  <span className="app-btn-small">Download on the</span>
                  <span className="app-btn-large">App Store</span>
                </div>
              </a>
              <a href="#" className="app-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/>
                </svg>
                <div className="app-btn-text">
                  <span className="app-btn-small">Get it on</span>
                  <span className="app-btn-large">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          <div className="level-up-phones">
            <div className="phone phone-back">
              <div className="phone-screen">
                <div className="screen-content">
                  <div className="screen-header">
                    <span className="screen-title">Quest Progress</span>
                  </div>
                  <div className="screen-map">
                    <svg viewBox="0 0 180 120" fill="none">
                      <rect width="180" height="120" rx="8" fill="#E8F5E9"/>
                      <path d="M20 80 Q50 60 80 70 Q110 80 140 50 Q160 30 170 40" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" fill="none"/>
                      <circle cx="20" cy="80" r="6" fill="#22C55E"/>
                      <circle cx="80" cy="70" r="6" fill="#22C55E"/>
                      <circle cx="170" cy="40" r="8" fill="#F59E0B"/>
                    </svg>
                  </div>
                  <div className="screen-stats">
                    <div className="stat">
                      <span className="stat-value">67%</span>
                      <span className="stat-label">Complete</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value">42.5km</span>
                      <span className="stat-label">Distance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="phone phone-front">
              <div className="phone-screen">
                <div className="screen-content alt">
                  <div className="screen-header">
                    <span className="screen-title">Today's Activity</span>
                  </div>
                  <div className="activity-card">
                    <div className="activity-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13 4V20M13 4L8 9M13 4L18 9" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="activity-info">
                      <span className="activity-type">Morning Run</span>
                      <span className="activity-distance">5.2 km</span>
                    </div>
                  </div>
                  <div className="achievement">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="#F59E0B">
                      <path d="M10 2L12.09 7.26L18 8.27L14 12.14L14.94 18.02L10 15.27L5.06 18.02L6 12.14L2 8.27L7.91 7.26L10 2Z"/>
                    </svg>
                    <span>New milestone unlocked!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LevelUp
