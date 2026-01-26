import './Participation.css'

const features = [
  'Track walking, running, cycling, and swimming',
  'Join solo or create teams with friends',
  'Connect your favorite fitness apps',
  'No time limits - go at your own pace'
]

function Participation() {
  return (
    <section className="participation">
      <div className="container">
        <div className="participation-content">
          <div className="participation-images">
            <div className="image-collage">
              <div className="collage-item large">
                <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop" alt="Runner" />
              </div>
              <div className="collage-item small-top">
                <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=300&h=200&fit=crop" alt="Cyclist" />
              </div>
              <div className="collage-item small-bottom">
                <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=200&fit=crop" alt="Hiker" />
              </div>
            </div>
          </div>

          <div className="participation-text">
            <h2>Participation Is Open<br />To <span className="text-gradient">Everyone</span></h2>
            <p className="lead">
              Our virtual fitness challenges welcome participants of all fitness levels.
              Whether you're just starting your fitness journey or you're an experienced athlete,
              there's a quest waiting for you.
            </p>

            <ul className="features-list">
              {features.map((feature, index) => (
                <li key={index}>
                  <span className="check-icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3.333 8L6.667 11.333L12.667 5.333" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="btn-join">
              Join Now
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Participation
